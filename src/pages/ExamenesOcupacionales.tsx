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
  Stethoscope,
  Microscope,
  Ear,
  Wind,
  Activity,
  Weight,
  Brain,
  Users,
  Pill,
  Glasses,
  Ambulance,
  Eye,
  Heart,
  Utensils,
  Car,
  Building2,
  MessageCircle,
  Shield,
  FileCheck
} from "lucide-react";
import medicinaOcupacionalImg from "@/assets/specialties/medicina-ocupacional.jpg";
import odontologiaImg from "@/assets/specialties/odontologia.jpg";
import laboratorioImg from "@/assets/specialties/laboratorio.jpg";
import audiometriaImg from "@/assets/specialties/audiometria.jpg";
import espirometriaImg from "@/assets/specialties/espirometria.jpg";
import electrocardiogramaImg from "@/assets/specialties/electrocardiograma.jpg";
import psicologiaImg from "@/assets/specialties/psicologia.jpg";
import medicinaGeneralImg from "@/assets/specialties/medicina-general.jpg";
import ecografiaImg from "@/assets/specialties/ecografia.jpg";
import rayosXImg from "@/assets/specialties/rayos-x.jpg";
import farmaciaImg from "@/assets/specialties/farmacia.jpg";
import oftalmologiaImg from "@/assets/specialties/oftalmologia.jpg";

const ExamenesOcupacionales = () => {
  const services = [
    {
      id: "examen-medico",
      title: "Examen Médico Ocupacional",
      icon: ClipboardCheck,
      description: "Evaluaciones médicas ocupacionales completas según la normativa vigente del Ministerio de Salud y Trabajo.",
      image: medicinaOcupacionalImg,
      color: "from-blue-500/10 to-blue-600/10",
      subServices: [
        { icon: UserCheck, name: "Examen de Ingreso", description: "Evaluación médica previa al inicio de actividades laborales" },
        { icon: Calendar, name: "Examen Anual o Periódico", description: "Control médico anual para seguimiento de la salud ocupacional" },
        { icon: UserX, name: "Examen de Retiro", description: "Evaluación al cese de la relación laboral" },
        { icon: Stethoscope, name: "Examen de Visita", description: "Evaluación médica para visitantes temporales" },
        { icon: RefreshCw, name: "Reincorporación Laboral", description: "Evaluación tras ausencia por incapacidad temporal" },
        { icon: Building2, name: "Cambio de Puesto Laboral", description: "Evaluación al cambiar de funciones o responsabilidades" },
        { icon: Car, name: "Conductores", description: "Examen específico para personal que conduce vehículos" },
        { icon: Utensils, name: "Manipulador de Alimentos", description: "Evaluación para personal que manipula alimentos" }
      ]
    },
    {
      id: "levantamiento",
      title: "Levantamiento de Observación",
      icon: FileCheck,
      description: "Servicios especializados para el levantamiento de observaciones detectadas en evaluaciones ocupacionales.",
      image: laboratorioImg,
      color: "from-green-500/10 to-green-600/10",
      subServices: [
        { icon: Stethoscope, name: "Odontología", description: "Tratamientos y evaluaciones odontológicas", image: odontologiaImg },
        { icon: Microscope, name: "Laboratorio Clínico", description: "Análisis clínicos y pruebas de laboratorio", image: laboratorioImg },
        { icon: Ear, name: "Audiometría", description: "Evaluación de la capacidad auditiva", image: audiometriaImg },
        { icon: Wind, name: "Espirometría", description: "Evaluación de la función pulmonar", image: espirometriaImg },
        { icon: Activity, name: "EKG (Electrocardiograma)", description: "Evaluación de la actividad cardíaca", image: electrocardiogramaImg },
        { icon: Weight, name: "Control de Peso", description: "Evaluación y seguimiento del peso corporal" },
        { icon: Brain, name: "Psicología", description: "Evaluación y apoyo psicológico", image: psicologiaImg }
      ],
      interconsulta: [
        { name: "Endocrinología", description: "Especialista en trastornos hormonales" },
        { name: "Hematología", description: "Especialista en enfermedades de la sangre" },
        { name: "Medicina Interna", description: "Diagnóstico integral de enfermedades internas" },
        { name: "Neumología", description: "Especialista en enfermedades respiratorias" },
        { name: "Otorrinolaringología", description: "Especialista en oído, nariz y garganta" },
        { name: "Nutrición", description: "Asesoría nutricional especializada" },
        { name: "Oftalmología", description: "Especialista en salud visual" },
        { name: "Cardiología", description: "Especialista en salud cardiovascular" }
      ]
    },
    {
      id: "asistencia",
      title: "Servicio de Asistencia",
      icon: Stethoscope,
      description: "Servicios de consulta médica y diagnóstico por imágenes para el cuidado integral de la salud.",
      image: medicinaGeneralImg,
      color: "from-purple-500/10 to-purple-600/10",
      subServices: [
        { icon: Stethoscope, name: "Consulta Médica", description: "Atención médica general", image: medicinaGeneralImg },
        { icon: Stethoscope, name: "Consulta Odontológica", description: "Atención odontológica especializada", image: odontologiaImg },
        { icon: Brain, name: "Consulta Psicológica", description: "Atención psicológica profesional", image: psicologiaImg },
        { icon: Activity, name: "Imagenología", description: "Servicios de diagnóstico por imágenes" },
        { icon: Activity, name: "Ecografía", description: "Estudios ecográficos", image: ecografiaImg },
        { icon: Activity, name: "Rayos X", description: "Radiografías digitales", image: rayosXImg }
      ]
    },
    {
      id: "vigilancia",
      title: "Vigilancia Ocupacional",
      icon: Shield,
      description: "Monitoreo continuo de la salud de los trabajadores expuestos a factores de riesgo ocupacional.",
      image: electrocardiogramaImg,
      color: "from-orange-500/10 to-orange-600/10",
      subServices: [
        { icon: Shield, name: "Monitoreo de Agentes Físicos", description: "Control de exposición a ruido, vibración, temperatura" },
        { icon: Shield, name: "Monitoreo de Agentes Químicos", description: "Control de exposición a sustancias químicas" },
        { icon: Shield, name: "Monitoreo de Agentes Biológicos", description: "Control de exposición a agentes biológicos" },
        { icon: Shield, name: "Evaluación Ergonómica", description: "Análisis de puestos de trabajo" }
      ]
    },
    {
      id: "ambulancia",
      title: "Servicio de Ambulancia",
      icon: Ambulance,
      description: "Servicio de traslado médico de emergencia equipado con personal capacitado y tecnología médica.",
      image: null,
      color: "from-red-500/10 to-red-600/10",
      subServices: [
        { icon: Ambulance, name: "Traslado de Emergencia", description: "Atención médica pre-hospitalaria y traslado urgente" },
        { icon: Ambulance, name: "Traslado Programado", description: "Traslado de pacientes para consultas o tratamientos" },
        { icon: Users, name: "Cobertura de Eventos", description: "Servicio de ambulancia para eventos corporativos" }
      ]
    },
    {
      id: "optica",
      title: "Óptica",
      icon: Glasses,
      description: "Servicios de optometría y venta de lentes oftálmicos de calidad.",
      image: oftalmologiaImg,
      color: "from-cyan-500/10 to-cyan-600/10",
      subServices: [
        { icon: Eye, name: "Evaluación Optométrica", description: "Examen completo de la vista" },
        { icon: Glasses, name: "Lentes Oftálmicos", description: "Venta de lentes con y sin medida" },
        { icon: Glasses, name: "Lentes de Contacto", description: "Adaptación y venta de lentes de contacto" },
        { icon: Eye, name: "Lentes de Seguridad", description: "Lentes de protección ocupacional" }
      ]
    },
    {
      id: "farmacia",
      title: "Farmacia",
      icon: Pill,
      description: "Dispensación de medicamentos y productos farmacéuticos con asesoría profesional.",
      image: farmaciaImg,
      color: "from-pink-500/10 to-pink-600/10",
      subServices: [
        { icon: Pill, name: "Medicamentos con Receta", description: "Dispensación de medicamentos bajo prescripción médica" },
        { icon: Pill, name: "Venta Libre", description: "Productos farmacéuticos de venta sin receta" },
        { icon: Heart, name: "Productos de Cuidado Personal", description: "Productos para el cuidado de la salud" },
        { icon: Pill, name: "Asesoría Farmacéutica", description: "Orientación profesional sobre medicamentos" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl font-bold mb-6 animate-fade-in">
              Nuestros Servicios
            </h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Soluciones completas en salud ocupacional y asistencial con los más altos estándares de calidad
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <div 
                  key={service.id} 
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Service Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                      <ServiceIcon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="font-display text-3xl font-bold">{service.title}</h2>
                      <p className="text-muted-foreground mt-1">{service.description}</p>
                    </div>
                  </div>

                  {/* Sub-services Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {service.subServices.map((sub, idx) => {
                      const SubIcon = sub.icon;
                      return (
                        <Card 
                          key={idx} 
                          className="hover:shadow-medical transition-all duration-300 group"
                        >
                          <CardHeader className="pb-3">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-lg bg-gradient-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <SubIcon className="h-5 w-5 text-secondary-foreground" />
                              </div>
                              <CardTitle className="text-base leading-tight">{sub.name}</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="text-sm leading-relaxed">
                              {sub.description}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>

                  {/* Interconsulta Section */}
                  {service.interconsulta && (
                    <div className="mt-8">
                      <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        Interconsultas Disponibles
                      </h3>
                      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {service.interconsulta.map((consult, idx) => (
                          <div 
                            key={idx} 
                            className="p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-center"
                          >
                            <h4 className="font-semibold text-sm mb-1">{consult.name}</h4>
                            <p className="text-xs text-muted-foreground">{consult.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Divider */}
                  {index < services.length - 1 && (
                    <div className="mt-12 border-t border-border" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-6">¿Por Qué Elegirnos?</h2>
            <p className="text-muted-foreground mb-12">
              Más de 13 años de experiencia en salud ocupacional y asistencial
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-xl bg-gradient-secondary flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-xl">Personal Certificado</h3>
                <p className="text-muted-foreground">
                  Médicos ocupacionales certificados por MINSA
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center mx-auto">
                  <Activity className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-xl">Equipamiento Moderno</h3>
                <p className="text-muted-foreground">
                  Tecnología de última generación para diagnósticos precisos
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-xl bg-gradient-secondary flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-xl">Atención Integral</h3>
                <p className="text-muted-foreground">
                  Servicios completos en dos sedes: Challhuahuacho y Cusco
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Button 
                size="lg"
                onClick={() => window.open('https://wa.me/51929312370', '_blank')}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Contáctanos ahora
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
