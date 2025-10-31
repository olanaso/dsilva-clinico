import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { 
  ClipboardCheck, 
  UserCheck, 
  Calendar, 
  UserX, 
  RefreshCw,
  ArrowUpCircle,
  Mountain,
  Box,
  Flame,
  Zap,
  Building2,
  Factory,
  ShoppingCart,
  HardHat,
  Hotel,
  Code,
  Wrench,
  MessageCircle,
  Award,
  Clock
} from "lucide-react";
import preOcupacionalImg from "@/assets/exams/pre-ocupacional.jpg";
import periodicoImg from "@/assets/exams/periodico.jpg";
import retiroImg from "@/assets/exams/retiro.jpg";
import reintegroImg from "@/assets/exams/reintegro.jpg";

const ExamenesOcupacionales = () => {
  const mainExams = [
    {
      icon: UserCheck,
      title: "Examen Médico Ocupacional De Reincorporación Laboral",
      subtitle: "Ingreso al Trabajo",
      description: "Se realiza cuando un colaborador de la empresa se reincorpora a la organización tras haber sufrido alguna incapacidad temporal dentro del trabajo.",
      includes: ["Evaluación médica general", "Análisis de laboratorio", "Exámenes auxiliares según puesto", "Certificado de aptitud"],
      image: preOcupacionalImg
    },
    {
      icon: Calendar,
      title: "Examen Médico Ocupacional De Cambio De Puesto En El Trabajo",
      subtitle: "Cambio de Puesto",
      description: "Se realiza cuando el colaborador experimenta cambios en sus responsabilidades o área, incluyendo la adición de nuevas tareas que implican un nivel de riesgo mayor.",
      includes: ["Control médico anual", "Evaluaciones específicas", "Monitoreo de salud ocupacional", "Actualización de historia clínica"],
      image: periodicoImg
    },
    {
      icon: UserX,
      title: "Examen Médico Ocupacional De Retiro",
      subtitle: "Cese Laboral",
      description: "Se realiza unos días antes de concluir el contrato laboral con su empresa para detectar posibles enfermedades relacionadas con las actividades laborales.",
      includes: ["Evaluación médica final", "Diagnóstico de salud al cese", "Certificado de retiro", "Registro en historia ocupacional"],
      image: retiroImg
    },
    {
      icon: RefreshCw,
      title: "Examen Médico Ocupacional Periódico",
      subtitle: "Evaluación Anual",
      description: "Evaluación médica programada durante la relación laboral para detectar precozmente daños a la salud ocasionados por la exposición a factores de riesgo.",
      includes: ["Evaluación de capacidad funcional", "Valoración de restricciones", "Recomendaciones médicas", "Plan de reincorporación"],
      image: reintegroImg
    }
  ];

  const specializedExams = [
    {
      icon: ArrowUpCircle,
      title: "Trabajos en Altura",
      description: "Evaluaciones especializadas para trabajadores que realizan labores a más de 1.80 metros. Incluye evaluación cardiovascular, equilibrio y vértigo.",
      color: "text-blue-500"
    },
    {
      icon: Mountain,
      title: "Altura Geográfica - Anexo 16",
      description: "Examen específico para trabajos en minería o a más de 2,500 msnm. Incluye evaluaciones cardiológicas y respiratorias especializadas.",
      color: "text-purple-500"
    },
    {
      icon: Box,
      title: "Espacios Confinados",
      description: "Evaluación para trabajadores en áreas con ventilación limitada. Incluye pruebas respiratorias y evaluación psicológica especializada.",
      color: "text-orange-500"
    },
    {
      icon: Flame,
      title: "Trabajos en Caliente",
      description: "Para trabajadores expuestos a altas temperaturas. Evaluación cardiovascular, oftalmológica y dermatológica especializada.",
      color: "text-red-500"
    },
    {
      icon: Zap,
      title: "Riesgo Eléctrico",
      description: "Evaluación para personal que trabaja con energía eléctrica. Incluye examen cardiovascular y valoración de coordinación motora.",
      color: "text-yellow-500"
    }
  ];

  const sectorExams = [
    { icon: Factory, title: "Minería", description: "Exámenes especializados según DS 024-2016-EM" },
    { icon: HardHat, title: "Construcción", description: "Evaluaciones para trabajo en obra" },
    { icon: ShoppingCart, title: "Comercio", description: "Exámenes para sector retail y comercial" },
    { icon: Zap, title: "Electricidad", description: "Evaluaciones para electricistas" },
    { icon: Hotel, title: "Hotelería", description: "Exámenes para sector turismo" },
    { icon: Code, title: "Tecnología", description: "Evaluaciones para trabajos de oficina" },
    { icon: Building2, title: "Industria", description: "Exámenes para sector industrial" },
    { icon: Wrench, title: "Soldadura", description: "Evaluaciones especializadas para soldadores" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge variant="secondary" className="mb-6 text-base px-4 py-1.5">
              Certificados Oficiales
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Exámenes Médicos<br />Ocupacionales
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-primary-foreground/90 max-w-3xl mx-auto">
              Servicios especializados cumpliendo con todas las normativas 
              del Ministerio de Salud y Ministerio de Trabajo
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.open('https://wa.me/51929312370', '_blank')}
                className="gap-2 hover-scale shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                Cotizar Examen
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 border-white/30 hover:bg-white/20 text-primary-foreground hover-scale"
                onClick={() => window.location.href = '/contacto'}
              >
                Agendar Cita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Exams Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Exámenes Principales
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Tipos de Exámenes Ocupacionales
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Evaluaciones médicas según cada fase de la relación laboral
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {mainExams.map((exam, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 hover:-translate-y-2 overflow-hidden h-full">
                      {/* Image Section */}
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={exam.image} 
                          alt={exam.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Badges Overlay */}
                        <div className="absolute top-4 right-4 flex flex-col gap-2">
                          <Badge className="bg-destructive text-destructive-foreground shadow-lg">
                            RESULTADOS EL MISMO DÍA
                          </Badge>
                          <Badge className="bg-yellow-500 text-yellow-950 shadow-lg flex items-center gap-1">
                            <Award className="h-3 w-3" />
                            100% CALIDAD
                          </Badge>
                          <Badge className="bg-background text-foreground shadow-lg flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            +10 AÑOS DE EXPERIENCIA
                          </Badge>
                        </div>
                      </div>

                      {/* Content Section */}
                      <CardHeader>
                        <CardTitle className="text-lg md:text-xl mb-2 group-hover:text-primary transition-colors text-center">
                          {exam.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-4">
                        <p className="text-sm text-muted-foreground leading-relaxed text-center min-h-[80px]">
                          {exam.description}
                        </p>
                        <Button 
                          className="w-full"
                          onClick={() => window.open('https://wa.me/51929312370', '_blank')}
                        >
                          Cotiza aquí
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Specialized Exams Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Evaluaciones Especializadas
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Exámenes Especializados
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Evaluaciones específicas según el tipo de riesgo ocupacional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {specializedExams.map((exam, index) => {
              const Icon = exam.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-background to-secondary/5 border-2 hover:border-primary/50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex flex-col items-center text-center gap-4 mb-2">
                      <div className={`p-4 bg-gradient-to-br from-background to-secondary/10 rounded-2xl group-hover:scale-110 transition-transform shadow-lg`}>
                        <Icon className={`h-12 w-12 ${exam.color}`} />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {exam.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center mb-4 min-h-[4rem]">
                      {exam.description}
                    </p>
                    <Button 
                      variant="ghost" 
                      className="w-full hover:bg-primary/10 hover:text-primary"
                      onClick={() => window.open('https://wa.me/51929312370', '_blank')}
                    >
                      Solicitar cotización →
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sector Exams Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Por Industria
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Exámenes por Sector Económico
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Evaluaciones médicas adaptadas a cada industria
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {sectorExams.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-primary/50 hover:-translate-y-2 bg-gradient-to-br from-background to-primary/5 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => window.open('https://wa.me/51929312370', '_blank')}
                >
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className="p-4 bg-primary/10 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {sector.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 border-2 border-primary/20 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
              <CardHeader className="text-center relative z-10 pt-12">
                <Badge variant="secondary" className="mb-4 mx-auto">
                  Nuestras Ventajas
                </Badge>
                <CardTitle className="text-3xl md:text-4xl mb-4">
                  ¿Por qué elegir D'Silva Policlínico?
                </CardTitle>
                <CardDescription className="text-lg">
                  Experiencia y calidad en medicina ocupacional
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 pb-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex gap-4 group hover-scale">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <div className="h-3 w-3 rounded-full bg-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Personal Certificado</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Médicos ocupacionales certificados por el Ministerio de Salud
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 group hover-scale">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <div className="h-3 w-3 rounded-full bg-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Equipos Modernos</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Tecnología de punta para diagnósticos precisos
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 group hover-scale">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <div className="h-3 w-3 rounded-full bg-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Resultados Rápidos</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Entrega de certificados en 24-48 horas hábiles
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex gap-4 group hover-scale">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <div className="h-3 w-3 rounded-full bg-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Dos Sedes Disponibles</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Atención en Challhuahuacho y Cusco
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 group hover-scale">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <div className="h-3 w-3 rounded-full bg-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Convenios Corporativos</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Precios especiales para empresas y organizaciones
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 group hover-scale">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <div className="h-3 w-3 rounded-full bg-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Servicio In-House</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Atención en las instalaciones de su empresa
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Badge variant="secondary" className="mb-6 text-base px-4 py-1.5">
              Estamos para ayudarte
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              ¿Necesitas realizar exámenes ocupacionales?
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-primary-foreground/90">
              Contáctanos para recibir una cotización personalizada según las necesidades de tu empresa
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.open('https://wa.me/51929312370', '_blank')}
                className="gap-2 hover-scale shadow-xl text-lg px-8 py-6"
              >
                <MessageCircle className="h-6 w-6" />
                Solicitar Cotización
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 border-white/30 hover:bg-white/20 text-primary-foreground hover-scale shadow-xl text-lg px-8 py-6"
                onClick={() => window.location.href = 'tel:+51929312370'}
              >
                Llamar Ahora
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExamenesOcupacionales;
