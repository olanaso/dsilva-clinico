import { Link } from "react-router-dom";
import { Heart, Stethoscope, Eye, Microscope, Brain, Pill, CheckCircle, Clock, Shield } from "lucide-react";
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
      <section className="relative min-h-[600px] flex items-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Tu Salud, Nuestra Prioridad
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Centro médico especializado con atención integral. Brindamos servicios de salud de calidad con
              profesionales expertos y tecnología de punta.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-glow">
                <Link to="/contacto">Agendar Cita</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 backdrop-blur">
                <Link to="/especialidades">Ver Especialidades</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-background rounded-xl shadow-card-custom hover:shadow-medical transition-all animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Nuestras Especialidades Médicas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Contamos con un equipo multidisciplinario de especialistas para atender todas tus necesidades de salud
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {specialties.map((specialty, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <SpecialtyCard {...specialty} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90 shadow-medical">
              <Link to="/especialidades">Ver Todas las Especialidades</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">¿Necesitas una Consulta?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Agenda tu cita hoy mismo y recibe atención médica de calidad
          </p>
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-glow">
            <Link to="/contacto">Contactar Ahora</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
