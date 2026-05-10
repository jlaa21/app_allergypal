import { ArrowLeft, ShieldPlus, MoreVertical } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft />
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <ShieldPlus className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">Allergy Pal</h1>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href="/nursing">Actuación de enfermería en la gestión de inmunoterapia</Link>
            </DropdownMenuItem>
             <DropdownMenuItem asChild>
              <Link href="/dosage-modification">Modificación de dosis por interrupción</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/terms">Condiciones de uso</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/privacy">Política de privacidad</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Última actualización: 01/08/2024</DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Condiciones de Uso</h1>
        <div className="space-y-4">
          <p>
            Bienvenido a Allergy Pal. Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web de Allergy Pal, ubicado en [URL de tu aplicación].
          </p>
          <p>
            Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones. No continúes usando Allergy Pal si no estás de acuerdo con todos los términos y condiciones establecidos en esta página.
          </p>
          <h2 className="text-2xl font-semibold mt-6">Licencia</h2>
          <p>
            A menos que se indique lo contrario, Allergy Pal y/o sus licenciantes poseen los derechos de propiedad intelectual de todo el material en Allergy Pal. Todos los derechos de propiedad intelectual están reservados. Puedes acceder a esto desde Allergy Pal para tu uso personal sujeto a las restricciones establecidas en estos términos y condiciones.
          </p>
          <p>No debes:</p>
          <ul className="list-disc pl-6">
            <li>Volver a publicar material de Allergy Pal</li>
            <li>Vender, alquilar o sublicenciar material de Allergy Pal</li>
            <li>Reproducir, duplicar o copiar material de Allergy Pal</li>
            <li>Redistribuir contenido de Allergy Pal</li>
          </ul>
          <p>Este Acuerdo comenzará en la fecha presente.</p>
        </div>
      </main>
    </div>
  );
}
