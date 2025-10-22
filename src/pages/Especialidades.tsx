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
      description: "Exámenes médicos ocupacionales con más de 13 años de experiencia.",
      fullDescription: "Evaluaciones médicas laborales, exámenes ocupacionales y programas de salud empresarial. Servicio ágil y seguro conforme a normativas de salud y seguridad laboral.",
      objectives: "Evaluar la aptitud del trabajador para el puesto de trabajo y prevenir enfermedades ocupacionales.",
      responsible: "Médico Ocupacional certificado",
    },
    {
      icon: Ear,
      title: "Audiometría",
      description: "Evaluación del nivel de audición mediante el uso de un audiómetro en cabina.",
      fullDescription: "Evaluación del nivel de audición mediante el uso de un audiómetro en cabina insonorizada.",
      objectives: "Detectar pérdida auditiva y prevenir afecciones ocupacionales por exposición al ruido.",
      responsible: "Lic. Enfermería, Técnico en Audiometría",
    },
    {
      icon: Activity,
      title: "Espirometría",
      description: "Prueba de función pulmonar que mide la capacidad respiratoria.",
      fullDescription: "Prueba de función pulmonar que mide la capacidad respiratoria mediante un espirómetro.",
      objectives: "Identificar enfermedades respiratorias como asma, Enfermedad Pulmonar Obstructiva Crónica o restricción ventilatoria.",
      responsible: "Lic. Enfermería, Técnico en Espirometría",
    },
    {
      icon: Heart,
      title: "Electrocardiograma",
      description: "Registro de la actividad eléctrica del corazón a través de electrodos.",
      fullDescription: "Registro de la actividad eléctrica del corazón a través de electrodos colocados en el pecho.",
      objectives: "Evaluar el estado del sistema cardiovascular y detectar arritmias o cardiopatías.",
      responsible: "Médico Cardiólogo",
    },
    {
      icon: Microscope,
      title: "Laboratorio Clínico Automatizado",
      description: "Análisis de muestras biológicas para diagnóstico clínico.",
      fullDescription: "Análisis de muestras biológicas (sangre, orina, heces) para diagnóstico clínico con equipamiento automatizado de última generación.",
      objectives: "Obtener resultados objetivos que permitan un diagnóstico médico adecuado y seguimiento terapéutico.",
      responsible: "Biólogo / Técnico Laboratorista",
    },
    {
      icon: Eye,
      title: "Oftalmología",
      description: "Evaluación y tratamiento de patologías oculares.",
      fullDescription: "Evaluación completa de la salud visual y tratamiento de patologías oculares con equipamiento especializado.",
      objectives: "Detectar y corregir problemas visuales como miopía, astigmatismo o cataratas.",
      responsible: "Médico Oftalmólogo",
    },
    {
      icon: Heart,
      title: "Odontología",
      description: "Atención de la salud bucal mediante prevención, diagnóstico y tratamiento.",
      fullDescription: "Atención integral de la salud bucal mediante prevención, diagnóstico y tratamiento odontológico.",
      objectives: "Mejorar la salud dental del paciente y prevenir enfermedades bucales.",
      responsible: "Cirujano Dentista",
    },
    {
      icon: Brain,
      title: "Psicología",
      description: "Evaluación y apoyo psicológico individual y grupal.",
      fullDescription: "Evaluación psicológica y apoyo terapéutico individual y grupal para el bienestar emocional.",
      objectives: "Promover la salud mental y el bienestar emocional del paciente.",
      responsible: "Psicólogo Clínico",
    },
    {
      icon: Stethoscope,
      title: "Medicina General",
      description: "Atención médica integral de primer contacto.",
      fullDescription: "Atención médica integral de primer contacto para toda la familia. Consultas preventivas y tratamiento de enfermedades comunes.",
      objectives: "Diagnosticar y tratar afecciones comunes, y derivar a especialidades si es necesario.",
      responsible: "Médico General",
    },
    {
      icon: Activity,
      title: "Rayos X Digital",
      description: "Estudio de imágenes del cuerpo mediante radiación ionizante.",
      fullDescription: "Estudio de imágenes radiográficas digitales del cuerpo para apoyo diagnóstico con baja radiación.",
      objectives: "Apoyar el diagnóstico clínico a través de imágenes radiográficas de alta resolución.",
      responsible: "Técnico en Radiología",
    },
    {
      icon: Activity,
      title: "Ecografía",
      description: "Estudio de órganos y tejidos mediante ultrasonido.",
      fullDescription: "Estudio de órganos internos y tejidos mediante ultrasonido de alta resolución.",
      objectives: "Diagnosticar afecciones internas en abdomen, pelvis, mama, entre otros.",
      responsible: "Médico Ecografista",
    },
    {
      icon: Pill,
      title: "Farmacia",
      description: "Dispensación de medicamentos de calidad.",
      fullDescription: "Dispensación de medicamentos de calidad con asesoría farmacéutica profesional.",
      objectives: "Proveer medicamentos seguros y brindar orientación farmacológica al paciente.",
      responsible: "Químico Farmacéutico",
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
