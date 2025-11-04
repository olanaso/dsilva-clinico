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
import OccupationalMedicineCard from "@/components/OccupationalMedicineCard";
import { Input } from "@/components/ui/input";

// Import specialty images
import medicinaOcupacionalImg from "@/assets/specialties/medicina-ocupacional.jpg";
import audiometriaImg from "@/assets/specialties/audiometria.jpg";
import espirometriaImg from "@/assets/specialties/espirometria.jpg";
import electrocardiogramaImg from "@/assets/specialties/electrocardiograma.jpg";
import laboratorioImg from "@/assets/specialties/laboratorio.jpg";
import oftalmologiaImg from "@/assets/specialties/oftalmologia.jpg";
import odontologiaImg from "@/assets/specialties/odontologia.jpg";
import psicologiaImg from "@/assets/specialties/psicologia.jpg";
import medicinaGeneralImg from "@/assets/specialties/medicina-general.jpg";
import rayosXImg from "@/assets/specialties/rayos-x.jpg";
import ecografiaImg from "@/assets/specialties/ecografia.jpg";
import farmaciaImg from "@/assets/specialties/farmacia.jpg";

const Especialidades = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Medicina Ocupacional con sub-especialidades
  const occupationalMedicine = {
    icon: Syringe,
    title: "Medicina Ocupacional",
    description: "Evaluaciones médicas laborales integrales con más de 13 años de experiencia, incluyendo exámenes especializados en audiometría, espirometría y electrocardiograma.",
    fullDescription: "Nuestro servicio de Medicina Ocupacional ofrece evaluaciones médicas laborales completas, exámenes ocupacionales y programas de salud empresarial. Con más de 13 años de experiencia, brindamos un servicio ágil y seguro conforme a las normativas de salud y seguridad laboral vigentes. Contamos con tecnología de última generación y un equipo multidisciplinario de especialistas que garantizan diagnósticos precisos y confiables.",
    objectives: "Evaluar la aptitud del trabajador para el puesto de trabajo, prevenir enfermedades ocupacionales, y garantizar ambientes laborales seguros mediante exámenes especializados de salud ocupacional.",
    responsible: "Médico Ocupacional certificado y equipo multidisciplinario",
    organs: ["cuerpo completo", "sistema general", "salud laboral", "medicina del trabajo"],
    image: medicinaOcupacionalImg,
    subSpecialties: [
      {
        icon: Ear,
        title: "Audiometría",
        specialty: "Otorrinolaringología",
        description: "Evaluación completa del nivel de audición mediante el uso de un audiómetro digital en cabina insonorizada. Este estudio es fundamental para detectar pérdidas auditivas relacionadas con la exposición ocupacional al ruido y prevenir daños permanentes en el sistema auditivo.",
        objectives: "Detectar tempranamente pérdida auditiva, prevenir afecciones ocupacionales por exposición al ruido, evaluar la capacidad auditiva del trabajador y cumplir con las normativas de vigilancia médica ocupacional.",
        responsible: "Lic. Enfermería especializado en Audiometría / Técnico en Audiometría certificado",
        image: audiometriaImg,
      },
      {
        icon: Activity,
        title: "Espirometría",
        specialty: "Neumología",
        description: "Prueba de función pulmonar que mide la capacidad respiratoria mediante un espirómetro de última generación. Permite evaluar el funcionamiento de los pulmones y detectar enfermedades respiratorias ocupacionales de forma temprana.",
        objectives: "Identificar enfermedades respiratorias como asma, Enfermedad Pulmonar Obstructiva Crónica (EPOC), restricción ventilatoria, evaluar el impacto de exposición a polvos y gases ocupacionales, y monitorear la salud respiratoria de los trabajadores.",
        responsible: "Lic. Enfermería especializado en Espirometría / Técnico en Espirometría certificado",
        image: espirometriaImg,
      },
      {
        icon: Heart,
        title: "Electrocardiograma",
        specialty: "Cardiología",
        description: "Registro preciso de la actividad eléctrica del corazón a través de electrodos colocados estratégicamente en el pecho. Este estudio es esencial para evaluar la salud cardiovascular del trabajador y detectar anomalías cardíacas que puedan representar un riesgo laboral.",
        objectives: "Evaluar el estado del sistema cardiovascular, detectar arritmias, cardiopatías, isquemias o alteraciones del ritmo cardíaco, y determinar la aptitud cardiovascular para labores que demandan esfuerzo físico.",
        responsible: "Médico Cardiólogo / Médico certificado en interpretación de ECG",
        image: electrocardiogramaImg,
      },
    ],
  };

  const specialties = [
    {
      icon: Microscope,
      title: "Laboratorio Clínico Automatizado",
      description: "Análisis de muestras biológicas para diagnóstico clínico.",
      fullDescription: "Análisis de muestras biológicas (sangre, orina, heces) para diagnóstico clínico con equipamiento automatizado de última generación.",
      objectives: "Obtener resultados objetivos que permitan un diagnóstico médico adecuado y seguimiento terapéutico.",
      responsible: "Biólogo / Técnico Laboratorista",
      organs: ["sangre", "orina", "sistema urinario", "riñones", "hígado", "análisis general"],
      image: laboratorioImg,
    },
    {
      icon: Eye,
      title: "Oftalmología",
      description: "Evaluación y tratamiento de patologías oculares.",
      fullDescription: "Evaluación completa de la salud visual y tratamiento de patologías oculares con equipamiento especializado.",
      objectives: "Detectar y corregir problemas visuales como miopía, astigmatismo o cataratas.",
      responsible: "Médico Oftalmólogo",
      organs: ["ojos", "sistema visual", "vista", "retina", "córnea"],
      image: oftalmologiaImg,
    },
    {
      icon: Heart,
      title: "Odontología",
      description: "Atención de la salud bucal mediante prevención, diagnóstico y tratamiento.",
      fullDescription: "Atención integral de la salud bucal mediante prevención, diagnóstico y tratamiento odontológico.",
      objectives: "Mejorar la salud dental del paciente y prevenir enfermedades bucales.",
      responsible: "Cirujano Dentista",
      organs: ["dientes", "boca", "encías", "mandíbula", "sistema dental"],
      image: odontologiaImg,
    },
    {
      icon: Brain,
      title: "Psicología",
      description: "Evaluación y apoyo psicológico individual y grupal.",
      fullDescription: "Evaluación psicológica y apoyo terapéutico individual y grupal para el bienestar emocional.",
      objectives: "Promover la salud mental y el bienestar emocional del paciente.",
      responsible: "Psicólogo Clínico",
      organs: ["cerebro", "mente", "sistema nervioso", "salud mental", "emociones"],
      image: psicologiaImg,
    },
    {
      icon: Stethoscope,
      title: "Medicina General",
      description: "Atención médica integral de primer contacto.",
      fullDescription: "Atención médica integral de primer contacto para toda la familia. Consultas preventivas y tratamiento de enfermedades comunes.",
      objectives: "Diagnosticar y tratar afecciones comunes, y derivar a especialidades si es necesario.",
      responsible: "Médico General",
      organs: ["cuerpo completo", "todo el cuerpo", "sistema general"],
      image: medicinaGeneralImg,
    },
    {
      icon: Activity,
      title: "Rayos X Digital",
      description: "Estudio de imágenes del cuerpo mediante radiación ionizante.",
      fullDescription: "Estudio de imágenes radiográficas digitales del cuerpo para apoyo diagnóstico con baja radiación.",
      objectives: "Apoyar el diagnóstico clínico a través de imágenes radiográficas de alta resolución.",
      responsible: "Técnico en Radiología",
      organs: ["huesos", "sistema óseo", "esqueleto", "columna", "articulaciones", "tórax"],
      image: rayosXImg,
    },
    {
      icon: Activity,
      title: "Ecografía",
      description: "Estudio de órganos y tejidos mediante ultrasonido.",
      fullDescription: "Estudio de órganos internos y tejidos mediante ultrasonido de alta resolución.",
      objectives: "Diagnosticar afecciones internas en abdomen, pelvis, mama, entre otros.",
      responsible: "Médico Ecografista",
      organs: ["abdomen", "pelvis", "útero", "ovarios", "hígado", "riñones", "vesícula", "mama", "tiroides", "próstata"],
      image: ecografiaImg,
    },
    {
      icon: Pill,
      title: "Farmacia",
      description: "Dispensación de medicamentos de calidad.",
      fullDescription: "Dispensación de medicamentos de calidad con asesoría farmacéutica profesional.",
      objectives: "Proveer medicamentos seguros y brindar orientación farmacológica al paciente.",
      responsible: "Químico Farmacéutico",
      organs: ["medicamentos", "tratamiento general"],
      image: farmaciaImg,
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

  // Filtrar Medicina Ocupacional
  const occupationalMedicineMatches = () => {
    if (!searchTerm) return true;
    const search = searchTerm.toLowerCase();
    
    // Buscar en la especialidad principal
    const mainMatch = (
      occupationalMedicine.title.toLowerCase().includes(search) ||
      occupationalMedicine.description.toLowerCase().includes(search) ||
      occupationalMedicine.fullDescription.toLowerCase().includes(search) ||
      occupationalMedicine.objectives.toLowerCase().includes(search) ||
      occupationalMedicine.organs.some(organ => organ.toLowerCase().includes(search))
    );
    
    // Buscar en las sub-especialidades
    const subMatch = occupationalMedicine.subSpecialties.some(sub =>
      sub.title.toLowerCase().includes(search) ||
      sub.specialty.toLowerCase().includes(search) ||
      sub.description.toLowerCase().includes(search) ||
      sub.objectives.toLowerCase().includes(search)
    );
    
    return mainMatch || subMatch;
  };

  const showOccupationalMedicine = occupationalMedicineMatches();
  const totalResults = filteredSpecialties.length + (showOccupationalMedicine ? 1 : 0);

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
                {totalResults} {totalResults === 1 ? 'resultado encontrado' : 'resultados encontrados'}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {totalResults === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No se encontraron especialidades que coincidan con tu búsqueda
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Medicina Ocupacional Card */}
              {showOccupationalMedicine && (
                <div className="animate-fade-in">
                  <OccupationalMedicineCard {...occupationalMedicine} />
                </div>
              )}
              
              {/* Other Specialties */}
              {filteredSpecialties.map((specialty, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${(index + 1) * 50}ms` }}>
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
