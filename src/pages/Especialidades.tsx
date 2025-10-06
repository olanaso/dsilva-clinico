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
      icon: Heart,
      title: "Cardiología",
      description:
        "Diagnóstico, tratamiento y prevención de enfermedades cardiovasculares. Electrocardiogramas, ecocardiografías y pruebas de esfuerzo.",
    },
    {
      icon: Stethoscope,
      title: "Medicina General",
      description:
        "Atención primaria integral para toda la familia. Consultas preventivas, diagnóstico y tratamiento de enfermedades comunes.",
    },
    {
      icon: Eye,
      title: "Oftalmología",
      description:
        "Cuidado completo de la salud visual. Exámenes de la vista, cirugías láser, tratamiento de cataratas y glaucoma.",
    },
    {
      icon: Microscope,
      title: "Laboratorio Clínico",
      description:
        "Análisis clínicos completos con tecnología avanzada. Resultados rápidos y precisos para apoyar diagnósticos médicos.",
    },
    {
      icon: Brain,
      title: "Neurología",
      description:
        "Evaluación y tratamiento de trastornos del sistema nervioso. Migrañas, epilepsia, Alzheimer y otras condiciones neurológicas.",
    },
    {
      icon: Pill,
      title: "Farmacia",
      description:
        "Dispensación de medicamentos de calidad. Asesoría farmacéutica profesional y seguimiento de tratamientos.",
    },
    {
      icon: Baby,
      title: "Pediatría",
      description:
        "Atención especializada para niños desde el nacimiento hasta la adolescencia. Control de crecimiento y vacunación.",
    },
    {
      icon: Bone,
      title: "Traumatología",
      description:
        "Diagnóstico y tratamiento de lesiones del sistema musculoesquelético. Fracturas, esguinces y rehabilitación.",
    },
    {
      icon: Ear,
      title: "Otorrinolaringología",
      description:
        "Tratamiento de enfermedades de oído, nariz y garganta. Audiometrías, cirugías y tratamiento de alergias.",
    },
    {
      icon: Droplets,
      title: "Endocrinología",
      description:
        "Especialización en trastornos hormonales y metabólicos. Diabetes, tiroides y obesidad.",
    },
    {
      icon: Activity,
      title: "Gastroenterología",
      description:
        "Diagnóstico y tratamiento de enfermedades del sistema digestivo. Endoscopias, colonoscopias y más.",
    },
    {
      icon: Syringe,
      title: "Medicina Ocupacional",
      description:
        "Evaluaciones médicas laborales, exámenes ocupacionales y programas de salud empresarial.",
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
