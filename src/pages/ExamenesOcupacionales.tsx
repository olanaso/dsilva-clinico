import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  MessageCircle
} from "lucide-react";

const ExamenesOcupacionales = () => {
  const mainExams = [
    {
      icon: UserCheck,
      title: "Examen Pre-Ocupacional",
      subtitle: "Ingreso al Trabajo",
      description: "Evaluación médica obligatoria antes de iniciar actividades laborales. Determina la aptitud del trabajador para el puesto específico al que postula.",
      includes: ["Evaluación médica general", "Análisis de laboratorio", "Exámenes auxiliares según puesto", "Certificado de aptitud"]
    },
    {
      icon: Calendar,
      title: "Examen Periódico",
      subtitle: "Anual o Semestral",
      description: "Evaluación médica programada durante la relación laboral para detectar precozmente daños a la salud ocasionados por la exposición a factores de riesgo.",
      includes: ["Control médico anual", "Evaluaciones específicas", "Monitoreo de salud ocupacional", "Actualización de historia clínica"]
    },
    {
      icon: UserX,
      title: "Examen de Retiro",
      subtitle: "Cese Laboral",
      description: "Evaluación obligatoria al término de la relación laboral para identificar enfermedades ocupacionales que pudieran haberse desarrollado durante el trabajo.",
      includes: ["Evaluación médica final", "Diagnóstico de salud al cese", "Certificado de retiro", "Registro en historia ocupacional"]
    },
    {
      icon: RefreshCw,
      title: "Examen de Reintegro",
      subtitle: "Retorno al Trabajo",
      description: "Evaluación para trabajadores que regresan después de descanso médico prolongado, accidente o enfermedad, para verificar su capacidad de retomar funciones.",
      includes: ["Evaluación de capacidad funcional", "Valoración de restricciones", "Recomendaciones médicas", "Plan de reincorporación"]
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
      <section className="bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Certificados Oficiales
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Exámenes Médicos Ocupacionales
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Servicios especializados de medicina ocupacional cumpliendo con todas las normativas 
              del Ministerio de Salud y Ministerio de Trabajo
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.open('https://wa.me/51929312370', '_blank')}
                className="gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Cotizar Examen
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 border-white/30 hover:bg-white/20 text-primary-foreground"
                onClick={() => window.location.href = '/contacto'}
              >
                Agendar Cita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Exams Section */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tipos de Exámenes Ocupacionales
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exámenes médicos ocupacionales según la fase de la relación laboral
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {mainExams.map((exam, index) => {
              const Icon = exam.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{exam.title}</CardTitle>
                        <CardDescription className="text-base">{exam.subtitle}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exam.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold">Incluye:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {exam.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <ClipboardCheck className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialized Exams Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Exámenes Especializados
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Evaluaciones específicas según el tipo de riesgo ocupacional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {specializedExams.map((exam, index) => {
              const Icon = exam.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className={`h-10 w-10 ${exam.color}`} />
                      <CardTitle className="text-lg">{exam.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{exam.description}</p>
                    <Button 
                      variant="link" 
                      className="px-0 mt-3"
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
      <section className="py-16 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Exámenes por Sector Económico
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Evaluaciones médicas adaptadas a cada industria
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {sectorExams.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-primary"
                  onClick={() => window.open('https://wa.me/51929312370', '_blank')}
                >
                  <CardContent className="pt-6 text-center">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">{sector.title}</h3>
                    <p className="text-xs text-muted-foreground">{sector.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl mb-2">
                  ¿Por qué elegir D'Silva Policlínico?
                </CardTitle>
                <CardDescription className="text-base">
                  Experiencia y calidad en medicina ocupacional
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Personal Certificado</h4>
                        <p className="text-sm text-muted-foreground">
                          Médicos ocupacionales certificados por el Ministerio de Salud
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Equipos Modernos</h4>
                        <p className="text-sm text-muted-foreground">
                          Tecnología de punta para diagnósticos precisos
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Resultados Rápidos</h4>
                        <p className="text-sm text-muted-foreground">
                          Entrega de certificados en 24-48 horas hábiles
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Dos Sedes Disponibles</h4>
                        <p className="text-sm text-muted-foreground">
                          Atención en Challhuahuacho y Cusco
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Convenios Corporativos</h4>
                        <p className="text-sm text-muted-foreground">
                          Precios especiales para empresas y organizaciones
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Servicio In-House</h4>
                        <p className="text-sm text-muted-foreground">
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
      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Necesitas realizar exámenes ocupacionales?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Contáctanos para recibir una cotización personalizada según las necesidades de tu empresa
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => window.open('https://wa.me/51929312370', '_blank')}
              className="gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Solicitar Cotización
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 border-white/30 hover:bg-white/20 text-primary-foreground"
              onClick={() => window.location.href = 'tel:+51929312370'}
            >
              Llamar Ahora
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExamenesOcupacionales;
