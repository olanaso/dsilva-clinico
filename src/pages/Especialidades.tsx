import { useState } from "react";
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
  Search,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SpecialtyCard from "@/components/SpecialtyCard";
import { Input } from "@/components/ui/input";

const Especialidades = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const specialties = [
    {
      icon: Syringe,
      title: "Medicina Ocupacional",
      description: "Exámenes médicos ocupacionales con más de 13 años de experiencia.",
      fullDescription: "Evaluaciones médicas laborales, exámenes ocupacionales y programas de salud empresarial. Servicio ágil y seguro conforme a normativas de salud y seguridad laboral.",
      objectives: "Evaluar la aptitud del trabajador para el puesto de trabajo y prevenir enfermedades ocupacionales.",
      responsible: "Médico Ocupacional certificado",
      organs: ["cuerpo completo", "sistema general"],
    },
    {
      icon: Ear,
      title: "Audiometría",
      description: "Evaluación del nivel de audición mediante el uso de un audiómetro en cabina.",
      fullDescription: "Evaluación del nivel de audición mediante el uso de un audiómetro en cabina insonorizada.",
      objectives: "Detectar pérdida auditiva y prevenir afecciones ocupacionales por exposición al ruido.",
      responsible: "Lic. Enfermería, Técnico en Audiometría",
      organs: ["oídos", "oído", "sistema auditivo"],
    },
    {
      icon: Activity,
      title: "Espirometría",
      description: "Prueba de función pulmonar que mide la capacidad respiratoria.",
      fullDescription: "Prueba de función pulmonar que mide la capacidad respiratoria mediante un espirómetro.",
      objectives: "Identificar enfermedades respiratorias como asma, Enfermedad Pulmonar Obstructiva Crónica o restricción ventilatoria.",
      responsible: "Lic. Enfermería, Técnico en Espirometría",
      organs: ["pulmones", "sistema respiratorio", "vías respiratorias", "bronquios"],
    },
    {
      icon: Heart,
      title: "Electrocardiograma",
      description: "Registro de la actividad eléctrica del corazón a través de electrodos.",
      fullDescription: "Registro de la actividad eléctrica del corazón a través de electrodos colocados en el pecho.",
      objectives: "Evaluar el estado del sistema cardiovascular y detectar arritmias o cardiopatías.",
      responsible: "Médico Cardiólogo",
      organs: ["corazón", "sistema cardiovascular", "arterias", "venas"],
    },
    {
      icon: Microscope,
      title: "Laboratorio Clínico Automatizado",
      description: "Análisis de muestras biológicas para diagnóstico clínico.",
      fullDescription: "Análisis de muestras biológicas (sangre, orina, heces) para diagnóstico clínico con equipamiento automatizado de última generación.",
      objectives: "Obtener resultados objetivos que permitan un diagnóstico médico adecuado y seguimiento terapéutico.",
      responsible: "Biólogo / Técnico Laboratorista",
      organs: ["sangre", "orina", "sistema urinario", "riñones", "hígado", "análisis general"],
    },
    {
      icon: Eye,
      title: "Oftalmología",
      description: "Evaluación y tratamiento de patologías oculares.",
      fullDescription: "Evaluación completa de la salud visual y tratamiento de patologías oculares con equipamiento especializado.",
      objectives: "Detectar y corregir problemas visuales como miopía, astigmatismo o cataratas.",
      responsible: "Médico Oftalmólogo",
      organs: ["ojos", "sistema visual", "vista", "retina", "córnea"],
    },
    {
      icon: Heart,
      title: "Odontología",
      description: "Atención de la salud bucal mediante prevención, diagnóstico y tratamiento.",
      fullDescription: "Atención integral de la salud bucal mediante prevención, diagnóstico y tratamiento odontológico.",
      objectives: "Mejorar la salud dental del paciente y prevenir enfermedades bucales.",
      responsible: "Cirujano Dentista",
      organs: ["dientes", "boca", "encías", "mandíbula", "sistema dental"],
    },
    {
      icon: Brain,
      title: "Psicología",
      description: "Evaluación y apoyo psicológico individual y grupal.",
      fullDescription: "Evaluación psicológica y apoyo terapéutico individual y grupal para el bienestar emocional.",
      objectives: "Promover la salud mental y el bienestar emocional del paciente.",
      responsible: "Psicólogo Clínico",
      organs: ["cerebro", "mente", "sistema nervioso", "salud mental", "emociones"],
    },
    {
      icon: Stethoscope,
      title: "Medicina General",
      description: "Atención médica integral de primer contacto.",
      fullDescription: "Atención médica integral de primer contacto para toda la familia. Consultas preventivas y tratamiento de enfermedades comunes.",
      objectives: "Diagnosticar y tratar afecciones comunes, y derivar a especialidades si es necesario.",
      responsible: "Médico General",
      organs: ["cuerpo completo", "todo el cuerpo", "sistema general"],
    },
    {
      icon: Activity,
      title: "Rayos X Digital",
      description: "Estudio de imágenes del cuerpo mediante radiación ionizante.",
      fullDescription: "Estudio de imágenes radiográficas digitales del cuerpo para apoyo diagnóstico con baja radiación.",
      objectives: "Apoyar el diagnóstico clínico a través de imágenes radiográficas de alta resolución.",
      responsible: "Técnico en Radiología",
      organs: ["huesos", "sistema óseo", "esqueleto", "columna", "articulaciones", "tórax"],
    },
    {
      icon: Activity,
      title: "Ecografía",
      description: "Estudio de órganos y tejidos mediante ultrasonido.",
      fullDescription: "Estudio de órganos internos y tejidos mediante ultrasonido de alta resolución.",
      objectives: "Diagnosticar afecciones internas en abdomen, pelvis, mama, entre otros.",
      responsible: "Médico Ecografista",
      organs: ["abdomen", "pelvis", "útero", "ovarios", "hígado", "riñones", "vesícula", "mama", "tiroides", "próstata"],
    },
    {
      icon: Pill,
      title: "Farmacia",
      description: "Dispensación de medicamentos de calidad.",
      fullDescription: "Dispensación de medicamentos de calidad con asesoría farmacéutica profesional.",
      objectives: "Proveer medicamentos seguros y brindar orientación farmacológica al paciente.",
      responsible: "Químico Farmacéutico",
      organs: ["medicamentos", "tratamiento general"],
    },
  ];

  // Filtrar especialidades basado en el término de búsqueda
  const filteredSpecialties = specialties.filter((specialty) => {
    const search = searchTerm.toLowerCase();
    return (
      specialty.title.toLowerCase().includes(search) ||
      specialty.description.toLowerCase().includes(search) ||
      specialty.fullDescription.toLowerCase().includes(search) ||
      specialty.objectives.toLowerCase().includes(search) ||
      specialty.organs.some(organ => organ.toLowerCase().includes(search))
    );
  });

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

      {/* Buscador */}
      <section className="py-8 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar por especialidad, órgano, enfermedad o síntoma..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
            {searchTerm && (
              <p className="text-sm text-muted-foreground mt-2">
                {filteredSpecialties.length} {filteredSpecialties.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredSpecialties.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No se encontraron especialidades que coincidan con tu búsqueda
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSpecialties.map((specialty, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <SpecialtyCard {...specialty} />
              </div>
            ))}
            </div>
          )}
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
