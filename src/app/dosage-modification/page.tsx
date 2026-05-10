import { ArrowLeft, ShieldPlus, MoreVertical } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DosageModificationPage() {
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
              <Link href="/nursing">
                Actuación de enfermería en la gestión de inmunoterapia
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dosage-modification">
                Modificación de dosis por interrupción
              </Link>
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
        <h1 className="text-3xl font-bold mb-6">
          Modificación de Dosis por Interrupción del Tratamiento
        </h1>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Fase de Iniciación</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Intervalo entre dosis superior al habitual
                </h3>
                <p>
                  Si el intervalo entre dos inyecciones es superior al
                  habitual, se debe continuar el tratamiento de la siguiente
                  manera:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    <strong>Hasta 2 semanas:</strong> Continuar con la misma
                    dosis.
                  </li>
                  <li>
                    <strong>Entre 2 y 4 semanas:</strong> Reducir la dosis en
                    un 50%.
                  </li>
                  <li>
                    <strong>Más de 4 semanas:</strong> Reiniciar el
                    tratamiento desde el principio.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fase de Mantenimiento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Intervalo entre dosis superior al habitual
                </h3>
                <p>
                  Si el intervalo entre dos inyecciones es superior al
                  habitual, se debe continuar el tratamiento de la siguiente
                  manera:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    <strong>Hasta 6 semanas:</strong> Continuar con la misma
                    dosis.
                  </li>
                  <li>
                    <strong>Entre 6 y 8 semanas:</strong> Reducir la dosis en
                    un 50%.
                  </li>
                  <li>
                    <strong>Más de 8 semanas:</strong> Reiniciar el
                    tratamiento desde la fase de iniciación.
                  </li>
                </ul>
              </div>
              <div className="pt-4">
                 <h3 className="font-semibold text-lg mb-2">
                  Reacción Local
                </h3>
                <p>
                  En caso de una reacción local extensa (más de 12 cm de diámetro) en la última inyección, se recomienda repetir la misma dosis. Si la reacción persiste, se debe reducir la dosis al nivel anterior.
                </p>
              </div>
                 <div className="pt-4">
                 <h3 className="font-semibold text-lg mb-2">
                  Reacción Sistémica
                </h3>
                <p>
                  Ante una reacción sistémica, el especialista debe reevaluar el caso y decidir si continuar con el tratamiento. En caso afirmativo, generalmente se reduce la dosis a un nivel previamente bien tolerado.
                </p>
              </div>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground pt-4">
            <strong>Nota:</strong> Estas son recomendaciones generales. El
            alergólogo podrá adaptar la pauta de administración de forma
            individual a cada paciente según su criterio.
          </p>
        </div>
      </main>
    </div>
  );
}
