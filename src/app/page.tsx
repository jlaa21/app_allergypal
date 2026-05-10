'use client';

import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { products } from "@/lib/data";
import { MoreVertical, Search, ShieldPlus } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState, useEffect, Suspense, useDeferredValue } from "react";
import { useSearchParams } from "next/navigation";

// Mapa de colores para máxima eficiencia
const manufacturerColors: Record<string, string> = {
  "ROXALL": "text-red-600",
  "LETI PHARMA": "text-blue-600",
  "LETI": "text-blue-600",
  "ALLERGOPHARMA": "text-emerald-600",
  "DIATER": "text-amber-600",
  "STALLERGENES IBERICA": "text-purple-600",
  "ALK-ABELLO": "text-pink-600",
  "ALK ABELLO": "text-pink-600",
  "INMUNOTEK": "text-indigo-600",
  "ASAC PHARMACEUTICAL INMUOLOGY": "text-teal-600",
  "PROBELTE": "text-orange-600",
  "ALLERGY THERAPEUTICS": "text-cyan-600",
  "LOFARMA IBERICA": "text-lime-600",
  "HAL ALLERGY": "text-violet-600",
  "ITAI PHARMA": "text-rose-600",
};

const getManufacturerStyle = (m: string) => {
  const color = manufacturerColors[m.toUpperCase()] || "text-slate-600";
  return `${color} font-bold text-xs uppercase tracking-wider`;
};

function SearchContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const deferredSearch = useDeferredValue(searchTerm);
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("search");
    if (query) setSearchTerm(query);
  }, [searchParams]);

  const filteredProducts = products.filter((product) => {
    const term = deferredSearch.toLowerCase();
    return (
      product.name.toLowerCase().includes(term) || 
      product.manufacturer.toLowerCase().includes(term)
    );
  });

  return (
    <>
      <div className="mb-8 p-4 rounded-xl border-2 border-primary/20 bg-card shadow-sm ring-1 ring-black/5">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar por nombre de producto o laboratorio..."
            className="w-full h-12 bg-background pl-10 border-none focus-visible:ring-2 focus-visible:ring-primary/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id} className="group">
            <Card className="h-full transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 border-accent/10 overflow-hidden">
              <div className="h-1 bg-primary/10 group-hover:bg-primary transition-colors" />
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                <CardDescription className={getManufacturerStyle(product.manufacturer)}>
                  {product.manufacturer}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="py-20 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <p className="text-xl font-medium text-muted-foreground">No se encontraron productos.</p>
          <Button variant="link" onClick={() => setSearchTerm("")} className="mt-2">
            Limpiar búsqueda
          </Button>
        </div>
      )}
    </>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50/50">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-background/80 backdrop-blur-md px-4 md:px-6">
        <div className="flex items-center gap-2">
          <ShieldPlus className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold tracking-tight">Allergy Pal</h1>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon"><MoreVertical className="h-5 w-5" /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem asChild><Link href="/nursing">Actuación de enfermería</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href="/dosage-modification">Modificación de dosis</Link></DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild><Link href="/terms">Condiciones de uso</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href="/privacy">Política de privacidad</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8">
        <Suspense fallback={
          <div className="flex flex-col gap-4 animate-pulse">
            <div className="h-16 bg-muted rounded-xl w-full" />
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-32 bg-muted rounded-lg" />
              ))}
            </div>
          </div>
        }>
          <SearchContent />
        </Suspense>
      </main>
      <footer className="py-6 px-4 border-t bg-card text-center text-xs text-muted-foreground">
        <p>© 2024 Allergy Pal - Información para profesionales sanitarios</p>
        <p className="mt-1">Última actualización: Agosto 2024</p>
      </footer>
    </div>
  );
}
