import { Link } from "react-router-dom";
import { Heart, Stethoscope, Eye, Microscope, Brain, Pill, CheckCircle, Clock, Shield, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SpecialtyCard from "@/components/SpecialtyCard";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const specialties = [
    {
      icon: Heart,
      title: "Cardiología",
      description: "Diagnóstico y tratamiento de enfermedades cardiovasculares con tecnología avanzada.",
    },
    {
      icon: Stethoscope,
      title: "Medicina General",
      description: "Atención integral para toda la familia con médicos altamente calificados.",
    },
    {
      icon: Eye,
      title: "Oftalmología",
      description: "Cuidado especializado de la salud visual y tratamiento de enfermedades oculares.",
    },
    {
      icon: Microscope,
      title: "Laboratorio Clínico",
      description: "Análisis clínicos precisos con tecnología de última generación.",
    },
    {
      icon: Brain,
      title: "Neurología",
      description: "Evaluación y tratamiento de trastornos del sistema nervioso.",
    },
    {
      icon: Pill,
      title: "Farmacia",
      description: "Medicamentos de calidad y asesoría farmacéutica profesional.",
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

      {/* Specialties Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Excelencia Médica</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Nuestras Especialidades Médicas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Contamos con un equipo multidisciplinario de especialistas para atender todas tus necesidades de salud
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {specialties.map((specialty, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <SpecialtyCard {...specialty} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90 shadow-medical hover:shadow-hover transition-all duration-300 hover:scale-105 text-lg px-8 py-6">
              <Link to="/especialidades">Ver Todas las Especialidades</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">¿Necesitas una Consulta?</h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
              Agenda tu cita hoy mismo y recibe atención médica de calidad con profesionales expertos
            </p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-glow hover:shadow-hover transition-all duration-300 hover:scale-105 text-lg px-8 py-6">
              <Link to="/contacto">Contactar Ahora</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
