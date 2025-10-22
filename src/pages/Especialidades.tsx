import {
  Heart,
  Stethoscope,
  Eye,
  Microscope,
  Brain,
  Pill,
  Baby,
  Bone,
  Ear,
  Droplets,
  Activity,
  Syringe,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SpecialtyCard from "@/components/SpecialtyCard";

const Especialidades = () => {
  const specialties = [
    {
      icon: Syringe,
      title: "Medicina Ocupacional",
      description:
        "Exámenes médicos ocupacionales con más de 13 años de experiencia. Servicio ágil y seguro conforme a normativas de salud y seguridad laboral.",
    },
    {
      icon: Stethoscope,
      title: "Consulta Médica General",
      description:
        "Atención primaria integral para toda la familia. Consultas preventivas, diagnóstico y tratamiento de enfermedades comunes.",
    },
    {
      icon: Brain,
      title: "Psicología",
      description:
        "Atención psicológica profesional para el bienestar mental y emocional. Evaluaciones y terapias personalizadas.",
    },
    {
      icon: Heart,
      title: "Odontología",
      description:
        "Cuidado integral de la salud bucal. Tratamientos preventivos, restaurativos y estéticos con tecnología moderna.",
    },
    {
      icon: Microscope,
      title: "Laboratorio Clínico Automatizado",
      description:
        "Análisis clínicos completos con tecnología automatizada de última generación. Resultados rápidos, precisos y confiables.",
    },
    {
      icon: Activity,
      title: "Radiología Digital",
      description:
        "Estudios radiológicos con tecnología digital de alta resolución. Diagnóstico por imágenes preciso y seguro.",
    },
    {
      icon: Eye,
      title: "Óptica",
      description:
        "Evaluación visual completa y dispensación de lentes oftálmicos. Asesoría personalizada para el cuidado de tu visión.",
    },
    {
      icon: Pill,
      title: "Farmacia",
      description:
        "Dispensación de medicamentos de calidad. Asesoría farmacéutica profesional y seguimiento de tratamientos.",
    },
    {
      icon: Heart,
      title: "Cardiología",
      description:
        "Diagnóstico, tratamiento y prevención de enfermedades cardiovasculares. Electrocardiogramas y evaluaciones especializadas.",
    },
    {
      icon: Brain,
      title: "Neurología",
      description:
        "Evaluación y tratamiento de trastornos del sistema nervioso. Atención especializada con equipo calificado.",
    },
    {
      icon: Bone,
      title: "Traumatología",
      description:
        "Diagnóstico y tratamiento de lesiones del sistema musculoesquelético. Atención profesional y rehabilitación.",
    },
    {
      icon: Droplets,
      title: "Otras Especialidades Médicas",
      description:
        "Contamos con diversos especialistas médicos para atender todas tus necesidades de salud de manera integral.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl font-bold mb-6 animate-fade-in">
              Especialidades Médicas
            </h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Contamos con un equipo multidisciplinario de especialistas para atender todas tus necesidades de
              salud con profesionalismo y tecnología de punta
            </p>
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <SpecialtyCard {...specialty} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-6">¿Por Qué Elegirnos?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-xl bg-gradient-secondary flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-xl">Profesionales Experimentados</h3>
                <p className="text-muted-foreground">
                  Médicos especialistas con amplia trayectoria y formación continua
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center mx-auto">
                  <Activity className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-xl">Tecnología Avanzada</h3>
                <p className="text-muted-foreground">
                  Equipamiento médico de última generación para diagnósticos precisos
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-xl bg-gradient-secondary flex items-center justify-center mx-auto">
                  <Stethoscope className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-xl">Atención Integral</h3>
                <p className="text-muted-foreground">
                  Enfoque multidisciplinario para el cuidado completo de tu salud
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Especialidades;
