import { Link } from "react-router-dom";
import { Heart, Stethoscope, Eye, Microscope, Brain, Pill, CheckCircle, Clock, Shield, FileText, UserCheck, Calendar, UserX, RefreshCw, MapPin, Award, Users, Target, Phone, Mail, MessageCircle, Ambulance, Glasses, Building2, Activity, Ear, Wind } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-image.jpg";
import teamImage from "@/assets/team-image.jpg";
import medicinaGeneralImg from "@/assets/specialties/medicina-general.jpg";
import medicinaOcupacionalImg from "@/assets/specialties/medicina-ocupacional.jpg";
import laboratorioImg from "@/assets/specialties/laboratorio.jpg";
import oftalmologiaImg from "@/assets/specialties/oftalmologia.jpg";
import farmaciaImg from "@/assets/specialties/farmacia.jpg";
import consultaMedicaImg from "@/assets/specialties/consulta-medica.jpg";
import rayosXImg from "@/assets/specialties/rayos-x-procedimiento.jpg";
import preOcupacionalImg from "@/assets/exams/pre-ocupacional.jpg";
import periodicoImg from "@/assets/exams/periodico.jpg";
import retiroImg from "@/assets/exams/retiro.jpg";
import reintegroImg from "@/assets/exams/reintegro.jpg";
import audiometriaImg from "@/assets/specialties/audiometria.jpg";
import ecografiaImg from "@/assets/specialties/ecografia.jpg";
import electrocardiogramaImg from "@/assets/specialties/electrocardiograma.jpg";
import espirometriaImg from "@/assets/specialties/espirometria.jpg";
import odontologiaImg from "@/assets/specialties/odontologia.jpg";
import psicologiaImg from "@/assets/specialties/psicologia.jpg";

const Index = () => {
  const services = [
    {
      icon: Heart,
      title: "Examen Médico Ocupacional",
      description: "Evaluaciones médicas para ingreso, periódicos, retiro y más.",
      image: medicinaOcupacionalImg
    },
    {
      icon: Microscope,
      title: "Levantamiento de Observación",
      description: "Servicios especializados de odontología, laboratorio, audiometría y más.",
      image: laboratorioImg
    },
    {
      icon: Stethoscope,
      title: "Asistencia",
      description: "Consultas médicas, odontológicas, psicológicas e imagenología.",
      image: consultaMedicaImg
    },
    {
      icon: Shield,
      title: "Vigilancia Ocupacional",
      description: "Monitoreo y control de salud en el ambiente laboral.",
      image: oftalmologiaImg
    },
    {
      icon: Ambulance,
      title: "Servicio de Ambulancia",
      description: "Atención de emergencias y traslados médicos.",
      image: medicinaOcupacionalImg
    },
    {
      icon: Glasses,
      title: "Óptica",
      description: "Servicios de oftalmología y productos ópticos de calidad.",
      image: oftalmologiaImg
    },
    {
      icon: Pill,
      title: "Farmacia",
      description: "Medicamentos y productos farmacéuticos.",
      image: farmaciaImg
    },
  ];

  const occupationalExams = [
    {
      icon: UserCheck,
      title: "Examen Pre-Ocupacional",
      description: "Evaluación médica antes del ingreso laboral para determinar la aptitud del trabajador.",
      image: preOcupacionalImg
    },
    {
      icon: Calendar,
      title: "Examen Periódico",
      description: "Control médico anual durante la relación laboral para prevenir enfermedades ocupacionales.",
      image: periodicoImg
    },
    {
      icon: UserX,
      title: "Examen de Retiro",
      description: "Evaluación final al término del contrato laboral para detectar posibles enfermedades.",
      image: retiroImg
    },
    {
      icon: RefreshCw,
      title: "Examen de Reintegro",
      description: "Valoración médica tras ausencia prolongada para garantizar capacidad laboral.",
      image: reintegroImg
    },
  ];

  const specialties = [
    {
      icon: Microscope,
      title: "Laboratorio Clínico",
      description: "Análisis clínicos especializados con equipos de última generación.",
      image: laboratorioImg
    },
    {
      icon: Activity,
      title: "Rayos X",
      description: "Servicios de imagenología con tecnología digital avanzada.",
      image: rayosXImg
    },
    {
      icon: Ear,
      title: "Audiometría",
      description: "Evaluación completa de la capacidad auditiva ocupacional.",
      image: audiometriaImg
    },
    {
      icon: Wind,
      title: "Espirometría",
      description: "Pruebas de función pulmonar para evaluar capacidad respiratoria.",
      image: espirometriaImg
    },
    {
      icon: Heart,
      title: "Electrocardiograma",
      description: "Estudios cardiológicos para diagnóstico y prevención.",
      image: electrocardiogramaImg
    },
    {
      icon: Eye,
      title: "Ecografía",
      description: "Estudios de ultrasonido con equipos de alta resolución.",
      image: ecografiaImg
    },
    {
      icon: Brain,
      title: "Psicología",
      description: "Evaluaciones psicológicas ocupacionales y asistenciales.",
      image: psicologiaImg
    },
    {
      icon: Stethoscope,
      title: "Odontología",
      description: "Atención odontológica integral y preventiva.",
      image: odontologiaImg
    },
  ];

  const faqs = [
    {
      question: "¿Qué servicios médicos ofrecen?",
      answer: "Medicina General, Medicina Ocupacional, Odontología, Psicología, Oftalmología, Laboratorio, Rayos X, Ecografía y más."
    },
    {
      question: "¿Cuánto tiempo tarda la entrega de resultados?",
      answer: "Los resultados de exámenes ocupacionales están disponibles entre 24 a 48 horas hábiles."
    },
    {
      question: "¿Realizan convenios con empresas?",
      answer: "Sí, ofrecemos convenios corporativos con precios preferenciales y servicios personalizados."
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Atención de Calidad",
      description: "Profesionales médicos con años de experiencia",
    },
    {
      icon: Clock,
      title: "Horario Extendido",
      description: "Disponibles de lunes a sábado para tu comodidad",
    },
    {
      icon: Shield,
      title: "Tecnología Avanzada",
      description: "Equipamiento médico de última generación",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Hero" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-block mb-6 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30">
              <span className="text-secondary-foreground font-semibold text-sm">✨ Centro Médico de Excelencia</span>
            </div>
            <h1 className="font-display text-6xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Tu Salud,<br />
              <span className="bg-gradient-to-r from-secondary to-primary-foreground bg-clip-text text-transparent">
                Nuestra Prioridad
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 leading-relaxed">
              Centro médico especializado con atención integral. Brindamos servicios de salud de calidad con
              profesionales expertos y tecnología de punta.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-glow hover:shadow-hover transition-all duration-300 hover:scale-105 text-lg px-8 py-6">
                <Link to="/contacto">Agendar Cita</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 backdrop-blur transition-all duration-300 hover:scale-105 text-lg px-8 py-6">
                <Link to="/especialidades">Ver Especialidades</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 backdrop-blur transition-all duration-300 hover:scale-105 text-lg px-8 py-6">
                <Link to="/resultados-online" className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Resultados en Línea
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative flex gap-4 p-8 bg-gradient-card rounded-2xl shadow-card-custom hover:shadow-hover transition-all duration-300 animate-fade-in border border-border/50 hover:border-secondary/50 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300" />
                <div className="w-14 h-14 rounded-xl bg-gradient-secondary flex items-center justify-center flex-shrink-0 shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Soluciones Integrales</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Servicios especializados en salud ocupacional y asistencial con los más altos estándares de calidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-medical transition-all duration-300 hover:-translate-y-2 animate-fade-in border-border/50 hover:border-secondary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay group-hover:opacity-70 transition-opacity" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="h-6 w-6 text-secondary-foreground" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-secondary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90 shadow-medical hover:shadow-hover transition-all duration-300 hover:scale-105 text-lg px-8 py-6">
              <Link to="/contacto">Agendar Cita</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-105 text-lg px-8 py-6">
              <Link to="/examenes-ocupacionales">Ver Todos los Servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-24 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">
              Atención Especializada
            </Badge>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Nuestras Especialidades
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Contamos con profesionales altamente capacitados y equipos de última tecnología en todas nuestras especialidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            {specialties.map((specialty, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-medical transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2 border-border/50 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={specialty.image}
                    alt={specialty.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay group-hover:opacity-70 transition-opacity" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <specialty.icon className="h-6 w-6 text-secondary-foreground" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{specialty.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{specialty.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90 shadow-medical hover:shadow-hover transition-all duration-300 hover:scale-105 text-lg px-8 py-6">
              <Link to="/especialidades">Ver Todas las Especialidades</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 animate-fade-in">
              <Badge variant="outline">Sobre Nosotros</Badge>
              <h2 className="font-display text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Más de 13 Años de Experiencia
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Policlínico D'SILVA es una institución de salud especializada en medicina ocupacional y ambulatoria, 
                trabajando con importantes empresas como MMG Las Bambas, Graña y Montero, y Minera Antares.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-secondary flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Excelencia</h4>
                    <p className="text-sm text-muted-foreground">Tecnología de vanguardia</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Equipo</h4>
                    <p className="text-sm text-muted-foreground">Personal certificado</p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" variant="outline" className="hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-105">
                <Link to="/nosotros">Conocer Más</Link>
              </Button>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <img
                src={teamImage}
                alt="Equipo Médico D'Silva"
                className="rounded-2xl shadow-medical w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="relative py-24 bg-gradient-to-b from-secondary/10 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none z-0">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-72.5%2C-14.5%2C-71.5%2C-13.3&layer=mapnik"
            className="w-full h-full border-0 grayscale"
            title="Mapa de ubicaciones"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4">
              Ubicaciones
            </Badge>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Nuestras Sedes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dos sedes estratégicamente ubicadas para brindarte la mejor atención
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-medical hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-secondary flex items-center justify-center mb-4">
                  <MapPin className="h-7 w-7 text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl">Sede Challhuahuacho</CardTitle>
                <CardDescription>Av. Sulfubamba S/N, Challhuahuacho</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="font-medium">Lunes - Domingo</span>
                </div>
                <p className="text-sm text-muted-foreground pl-6">8:00 AM - 12:00 PM | 2:30 PM - 8:30 PM</p>
              </CardContent>
            </Card>

            <Card className="shadow-medical hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                  <MapPin className="h-7 w-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Sede Cusco</CardTitle>
                <CardDescription>Av. Túpac Amaru O-5, Wanchaq - Cusco</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="font-medium">Lunes - Sábado</span>
                </div>
                <p className="text-sm text-muted-foreground pl-6">7:00 AM - 12:00 PM | 2:30 PM - 7:00 PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Preguntas Frecuentes
            </Badge>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              ¿Tienes Dudas?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Encuentra respuestas a las preguntas más comunes
            </p>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto mb-12">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="shadow-card-custom hover:shadow-medical transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 text-lg px-8 py-6">
              <Link to="/preguntas-frecuentes">Ver Todas las Preguntas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={teamImage} 
          alt="Background" 
          className="w-full h-full object-cover opacity-20 scale-110 transition-transform duration-[2000ms] hover:scale-100" 
        />
        <div className="absolute inset-0 bg-gradient-hero/80" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">¿Necesitas una Consulta?</h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
              Agenda tu cita hoy mismo y recibe atención médica de calidad con profesionales expertos
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-glow hover:shadow-hover transition-all duration-300 hover:scale-105 text-lg px-8 py-6">
                <Link to="/contacto">Agendar Cita</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
                onClick={() => window.open('https://wa.me/51929312370', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
