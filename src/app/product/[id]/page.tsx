import { products } from "@/lib/data";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ShieldPlus,
  Beaker,
  Thermometer,
  Syringe,
  Package,
  MapPin,
  Clock,
  ArrowLeft,
  MoreVertical,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

function getBadgeClass(color?: string) {
    switch (color) {
      case "yellow":
        return "bg-yellow-400 text-black border-yellow-500";
      case "black":
        return "bg-black text-white border-black";
      case "green":
        return "bg-green-500 text-white border-green-600";
      case "blue":
        return "bg-blue-500 text-white border-blue-600";
      case "red":
        return "bg-red-500 text-white border-red-600";
      case "purple":
        return "bg-purple-500 text-white border-purple-600";
      case "brown":
        return "bg-amber-800 text-white border-amber-900";
      case "orange":
        return "bg-orange-500 text-white border-orange-600";
      case "white":
        return "bg-white text-black border-gray-400";
      case "gray":
        return "bg-gray-400 text-black border-gray-500";
      default:
        return "";
    }
  };

  function renderDoseRow (
    dose: { vial: string; volume: string; interval: string },
    i: number
  ) {
    const isYellow = dose.vial.includes("Amarilla");
    const isBlack = dose.vial.includes("Negra");
    const isGreen = dose.vial.includes("Verde");
    const isBlue = dose.vial.includes("Azul");
    const isOrange = dose.vial.includes("Naranja");
    const isRed = dose.vial.includes("Roja");
    const isViolet = dose.vial.includes("Violeta");
    const isBrown = dose.vial.includes("Marrón");
    const isWhite = dose.vial.includes("Blanca");
    const isGray = dose.vial.includes("Gris");


    return (
      <TableRow key={i}>
        <TableCell>
          {isYellow && (
            <Badge
              variant="outline"
              className="bg-yellow-400 text-black border-yellow-500 mb-1"
            >
              AMARILLA
            </Badge>
          )}
          {isBlack && (
            <Badge
              variant="outline"
              className="bg-black text-white border-black mb-1"
            >
              NEGRA
            </Badge>
          )}
          {isGreen && (
            <Badge
              variant="outline"
              className="bg-green-500 text-white border-green-600 mb-1"
            >
              VERDE
            </Badge>
          )}
           {isBlue && (
            <Badge
              variant="outline"
              className="bg-blue-500 text-white border-blue-600 mb-1"
            >
              AZUL
            </Badge>
          )}
          {isOrange && (
            <Badge
              variant="outline"
              className="bg-orange-500 text-white border-orange-600 mb-1"
            >
              NARANJA
            </Badge>
          )}
          {isRed && (
            <Badge
              variant="outline"
              className="bg-red-500 text-white border-red-600 mb-1"
            >
              ROJA
            </Badge>
          )}
          {isViolet && (
            <Badge
              variant="outline"
              className="bg-purple-500 text-white border-purple-600 mb-1"
            >
              VIOLETA
            </Badge>
          )}
          {isBrown && (
             <Badge
                variant="outline"
                className="bg-amber-800 text-white border-amber-900 mb-1"
              >
                MARRÓN
              </Badge>
          )}
          {isWhite && (
             <Badge
                variant="outline"
                className="bg-white text-black border-gray-400 mb-1"
              >
                BLANCA
              </Badge>
          )}
           {isGray && (
             <Badge
                variant="outline"
                className="bg-gray-400 text-black border-gray-500 mb-1"
              >
                GRIS
              </Badge>
          )}
          <div>{dose.vial.replace(/ \(([^,]+), [^)]+\)/, "")}</div>
          <div className="text-xs text-muted-foreground">
            {dose.vial.match(/\(([^)]+)\)/)?.[1].split(", ")[1]}
          </div>
        </TableCell>
        <TableCell>{dose.volume}</TableCell>
        <TableCell>{dose.interval}</TableCell>
      </TableRow>
    );
  };

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  const hasConventional = product.dosage.conventional.initiation.length > 0;
  const hasCluster = product.dosage.cluster.initiation.length > 0;
  const hasAlternative = product.dosage.alternative.initiation.length > 0;

  const getDefaultTab = () => {
    if (hasConventional) return "conventional";
    if (hasCluster) return "cluster";
    if (hasAlternative) return "alternative";
    return "";
  }

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
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-6">
          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>
                Fabricante: {product.manufacturer}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="md:col-span-2 lg:col-span-3 border-accent/20">
                  <CardHeader>
                    <CardTitle>Características</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{product.characteristics}</p>
                  </CardContent>
                </Card>

                <Card className="border-accent/20">
                  <CardHeader className="flex flex-row items-center gap-2">
                    <Thermometer className="h-6 w-6 text-primary" />
                    <CardTitle>Conservación</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{product.storage.conditions}</p>
                  </CardContent>
                </Card>

                <Card className="border-accent/20">
                  <CardHeader className="flex flex-row items-center gap-2">
                    <Beaker className="h-6 w-6 text-primary" />
                    <CardTitle>Composición</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="galenic">
                        <AccordionTrigger>
                          Composición Galénica
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="font-semibold">Excipientes:</p>
                          <ul className="list-disc pl-5">
                            {product.composition.galenic.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="allergenic">
                        <AccordionTrigger>
                          Composición Alergénica
                        </AccordionTrigger>
                        <AccordionContent>
                          {Object.entries(product.composition.allergenic).map(([key, value]) => (
                            <div key={key} className="mt-2">
                              <p className="font-semibold">{key.toUpperCase()}:</p>
                              {Array.isArray(value) ? (
                                <ul className="list-disc pl-9">
                                  {value.map((item: any, index: number) => (
                                    <li key={index}>
                                      {item.group && <strong>{item.group}: </strong>}
                                      {item.name}
                                      {item.units && ` (${item.units}`})
                                      {item.major && `, ${item.major}`}
                                      {item.concentration && ` - ${item.concentration}`}
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="pl-4">{value as string}</p>
                              )}
                            </div>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2 border-accent/20">
                  <CardHeader className="flex flex-row items-center gap-2">
                    <Package className="h-6 w-6 text-primary" />
                    <CardTitle>Presentación</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="multiple">
                      <AccordionItem value="inicio">
                        <AccordionTrigger>
                          <h3 className="font-semibold">INICIO</h3>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">
                            {product.presentation.inicio.vialsDesc}
                          </p>
                          {product.presentation.inicio.diluentDesc &&
                            <p className="mb-4">
                              {product.presentation.inicio.diluentDesc}
                            </p>
                          }
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Vial</TableHead>
                                <TableHead>Recomposición</TableHead>
                                <TableHead>
                                  Concentración Final
                                </TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {product.presentation.inicio.table.map(
                                (row, i) => (
                                  <TableRow key={i}>
                                    <TableCell>
                                      <Badge
                                        variant="outline"
                                        className={getBadgeClass(row.labelColor)}
                                      >
                                        {row.label}
                                      </Badge>
                                      <div className="font-medium mt-1">
                                        {row.vial}
                                      </div>
                                      <div className="text-xs text-muted-foreground">
                                        {row.venom}
                                      </div>
                                    </TableCell>
                                    <TableCell>
                                      {row.recomposition}
                                    </TableCell>
                                    <TableCell>
                                      {row.concentration}
                                    </TableCell>
                                  </TableRow>
                                )
                              )}
                            </TableBody>
                          </Table>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="continuacion">
                        <AccordionTrigger>
                          <h3 className="font-semibold">
                            CONTINUACIÓN
                          </h3>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">
                            {
                              product.presentation.continuacion
                                .vialsDesc
                            }
                          </p>
                          {product.presentation.continuacion.diluentDesc && 
                            <p className="mb-4">
                              {
                                product.presentation.continuacion
                                  .diluentDesc
                              }
                            </p>
                          }
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Vial</TableHead>
                                <TableHead>Recomposición</TableHead>
                                <TableHead>
                                  Concentración Final
                                </TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {product.presentation.continuacion.table.map(
                                (row, i) => (
                                  <TableRow key={i}>
                                    <TableCell>
                                      <Badge
                                        variant="outline"
                                        className={getBadgeClass(row.labelColor)}
                                      >
                                        {row.label}
                                      </Badge>
                                      <div className="font-medium mt-1">
                                        {row.vial}
                                      </div>
                                      <div className="text-xs text-muted-foreground">
                                        {row.venom}
                                      </div>
                                    </TableCell>
                                    <TableCell>
                                      {row.recomposition}
                                    </TableCell>
                                    <TableCell>
                                      {row.concentration}
                                    </TableCell>
                                  </TableRow>
                                )
                              )}
                            </TableBody>
                          </Table>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>

                <Card className="border-accent/20">
                  <CardHeader className="flex flex-row items-center gap-2">
                    <MapPin className="h-6 w-6 text-primary" />
                    <CardTitle>Distribución</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5">
                      {product.distribution.map((country, index) => (
                        <li key={index}>{country}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-accent/20">
                  <CardHeader className="flex flex-row items-center gap-2">
                      <Clock className="h-6 w-6 text-primary" />
                      <CardTitle>Duración del Envase</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p><strong>Tratamiento de iniciación:</strong> {product.packageDuration.initiation}</p>
                      <p><strong>Tratamiento de mantenimiento:</strong> {product.packageDuration.continuation}</p>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-3 border-accent/20">
                  <CardHeader className="flex flex-row items-center gap-2">
                    <Syringe className="h-6 w-6 text-primary" />
                    <CardTitle>Pautas de Administración</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Vía de administración: {product.adminRoute}
                    </p>
                    <Tabs defaultValue={getDefaultTab()}>
                      <TabsList>
                        {hasConventional && (
                          <TabsTrigger value="conventional">
                             {product.id === 10 ? 'Pauta I de aumento de dosis (11 inyecciones) en 7 semanas' : 'Pauta Convencional'}
                          </TabsTrigger>
                        )}
                        {hasCluster && (
                          <TabsTrigger value="cluster">
                            {product.id === 7 ? 'Pauta Cluster 4 semanas' : product.id === 10 ? 'Pauta II de aumento de dosis (15 inyecciones) en 15 semanas' : 'Pauta Rápida'}
                          </TabsTrigger>
                        )}
                         {hasAlternative && (
                          <TabsTrigger value="alternative">
                            {product.id === 7 ? 'Pauta Cluster 2 semanas' : product.id === 10 ? 'Pauta III de aumento de dosis (25 inyecciones) en 25 semanas' : 'Pauta Alternativa'}
                          </TabsTrigger>
                        )}
                      </TabsList>
                      {hasConventional && (
                        <TabsContent value="conventional" className="mt-4">
                          <div className="grid gap-6 md:grid-cols-2">
                            <div>
                              <h3 className="font-semibold mb-2">
                                Pauta de Iniciación
                              </h3>
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Vial</TableHead>
                                    <TableHead>Volumen (mL)</TableHead>
                                    <TableHead>Intervalo</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {product.dosage.conventional.initiation.map(
                                    renderDoseRow
                                  )}
                                </TableBody>
                              </Table>
                            </div>
                            <div>
                              <h3 className="font-semibold mb-2">
                                Pauta de Mantenimiento
                              </h3>
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Vial</TableHead>
                                    <TableHead>Volumen (mL)</TableHead>
                                    <TableHead>Intervalo</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {product.dosage.conventional.maintenance.map(
                                    renderDoseRow
                                  )}
                                </TableBody>
                              </Table>
                            </div>
                          </div>
                        </TabsContent>
                      )}
                      {hasCluster && 
                        <TabsContent value="cluster" className="mt-4">
                          <div className="grid gap-6 md:grid-cols-2">
                            <div>
                              <h3 className="font-semibold mb-2">
                                Pauta de Iniciación
                              </h3>
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Vial</TableHead>
                                    <TableHead>Volumen (mL)</TableHead>
                                    <TableHead>Intervalo</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {product.dosage.cluster.initiation.map(
                                    renderDoseRow
                                  )}
                                </TableBody>
                              </Table>
                            </div>
                            <div>
                              <h3 className="font-semibold mb-2">
                                Pauta de Mantenimiento
                              </h3>
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Vial</TableHead>
                                    <TableHead>Volumen (mL)</TableHead>
                                    <TableHead>Intervalo</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {product.dosage.cluster.maintenance.map(
                                    renderDoseRow
                                  )}
                                </TableBody>
                              </Table>
                            </div>
                          </div>
                        </TabsContent>
                      }
                      {hasAlternative && 
                        <TabsContent value="alternative" className="mt-4">
                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <h3 className="font-semibold mb-2">
                              Pauta de Iniciación (pacientes muy sensibilizados)
                            </h3>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Vial</TableHead>
                                  <TableHead>Volumen (mL)</TableHead>
                                  <TableHead>Intervalo</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {product.dosage.alternative.initiation.map(
                                  renderDoseRow
                                )}
                              </TableBody>
                            </Table>
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">
                                Pauta de Mantenimiento
                            </h3>
                            <Table>
                                <TableHeader>
                                <TableRow>
                                    <TableHead>Dosis Recomendada</TableHead>
                                    <TableHead>Volumen (mL)</TableHead>
                                    <TableHead>Descripción</TableHead>
                                </TableRow>
                                </TableHeader>
                                <TableBody>
                                {product.dosage.alternative.maintenance.map(
                                    (dose, i) => (
                                    <TableRow key={i}>
                                        <TableCell>{dose.interval}</TableCell>
                                        <TableCell>{dose.volume}</TableCell>
                                        <TableCell>{dose.vial}</TableCell>
                                    </TableRow>
                                    )
                                )}
                                </TableBody>
                            </Table>
                          </div>
                        </div>
                      </TabsContent>
                      }
                    </Tabs>
                  </CardContent>
                </Card>

              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}