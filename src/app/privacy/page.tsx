import { ArrowLeft, ShieldPlus, MoreVertical } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

export default function PrivacyPage() {
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
        <h1 className="text-3xl font-bold mb-4">Política de Privacidad</h1>
        <div className="space-y-4">
          <p>
            En Allergy Pal, accesible desde [URL de tu aplicación], una de nuestras principales prioridades es la privacidad de nuestros visitantes. Este documento de Política de Privacidad contiene tipos de información que son recopilados y registrados por Allergy Pal y cómo la usamos.
          </p>
          <p>
            Si tienes preguntas adicionales o requieres más información sobre nuestra Política de Privacidad, no dudes en contactarnos.
          </p>
          <h2 className="text-2xl font-semibold mt-6">Archivos de Registro</h2>
          <p>
            Allergy Pal sigue un procedimiento estándar de uso de archivos de registro. Estos archivos registran a los visitantes cuando visitan sitios web. Todas las empresas de alojamiento hacen esto y forma parte de los análisis de los servicios de alojamiento. La información recopilada por los archivos de registro incluye direcciones de protocolo de Internet (IP), tipo de navegador, proveedor de servicios de Internet (ISP), marca de tiempo, páginas de referencia/salida y, posiblemente, el número de clics. Estos no están vinculados a ninguna información que sea personalmente identificable. El propósito de la información es analizar tendencias, administrar el sitio, rastrear el movimiento de los usuarios en el sitio web y recopilar información demográfica.
          </p>
          <h2 className="text-2xl font-semibold mt-6">Consentimiento</h2>
          <p>
            Al utilizar nuestro sitio web, por la presente, das tu consentimiento a nuestra Política de Privacidad y aceptas sus términos.
          </p>
        </div>
      </main>
    </div>
  );
}
