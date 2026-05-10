import { ArrowLeft, ShieldPlus, MoreVertical } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

export default function NursingPage() {
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
        <h1 className="text-3xl font-bold mb-4">Actuación de Enfermería en la Gestión de Inmunoterapia</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Introducción</h2>
            <p>
              La inmunoterapia con alérgenos (ITA) es un tratamiento fundamental para las enfermedades alérgicas. El personal de enfermería juega un papel crucial en la administración segura y eficaz de la ITA, así como en la educación del paciente y el manejo de posibles reacciones adversas.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Antes de la Administración</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Verificación:</strong> Comprobar la identidad del paciente, el alérgeno prescrito, la dosis y la fecha de caducidad del vial.</li>
              <li><strong>Evaluación del Paciente:</strong> Preguntar sobre el estado de salud actual, medicación concomitante (especialmente betabloqueantes), y posibles reacciones a la última dosis.</li>
              <li><strong>Preparación del Material:</strong> Asegurar que se dispone de todo el material necesario, incluyendo adrenalina y equipo de reanimación en caso de una reacción anafiláctica.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Administración de la Inyección</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>La administración es subcutánea, generalmente en la cara externa del tercio medio del brazo.</li>
              <li>Aspirar antes de inyectar para evitar la administración intravascular.</li>
              <li>Alternar los brazos en cada administración.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Periodo de Observación</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>El paciente debe permanecer en observación en el centro médico durante al menos 30 minutos después de la inyección.</li>
              <li>Vigilar la aparición de cualquier signo o síntoma de reacción local o sistémica (prurito, eritema, urticaria, dificultad respiratoria, etc.).</li>
              <li>Registrar la administración y cualquier incidencia en la historia clínica del paciente.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Educación al Paciente</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Informar sobre la importancia de la adherencia al tratamiento.</li>
              <li>Explicar los signos de una reacción tardía y cómo actuar.</li>
              <li>Recordar que no debe realizar ejercicio físico intenso ni tomar baños calientes en las horas posteriores a la inyección.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
