import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge variant="secondary" className="mb-6 text-base px-4 py-1.5">
              Servicios Integrales de Salud
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Nuestros Servicios
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-primary-foreground/90 max-w-3xl mx-auto">
              Soluciones completas en salud ocupacional y asistencial con los más altos estándares de calidad
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.open('https://wa.me/51929312370', '_blank')}
                className="gap-2 hover-scale shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                Solicitar Información
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 border-white/30 hover:bg-white/20 text-primary-foreground hover-scale"
                onClick={() => window.location.href = '/contacto'}
              >
                Agendar Cita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <Card 
                  key={service.id} 
                  className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Image Section */}
                    {service.image && (
                      <div className="relative h-64 md:h-auto overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r ${service.color}`} />
                      </div>
                    )}
                    
                    {/* Content Section */}
                    <div className={service.image ? "md:col-span-2" : "md:col-span-3"}>
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-4">
                          <div className={`p-4 bg-gradient-to-br ${service.color} rounded-2xl`}>
                            <ServiceIcon className="h-10 w-10 text-primary" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-2xl md:text-3xl mb-3">
                              {service.title}
                            </CardTitle>
                            <CardDescription className="text-base">
                              {service.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        {/* Sub-services */}
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="subservices">
                            <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                              Ver servicios incluidos ({service.subServices.length})
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                {service.subServices.map((sub, idx) => {
                                  const SubIcon = sub.icon;
                                  return (
                                    <div 
                                      key={idx} 
                                      className="flex gap-3 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors group"
                                    >
                                      <div className="flex-shrink-0">
                                        <SubIcon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                                      </div>
                                      <div>
                                        <h4 className="font-semibold text-sm mb-1">{sub.name}</h4>
                                        <p className="text-xs text-muted-foreground">{sub.description}</p>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                          
                          {/* Interconsulta Section for Levantamiento */}
                          {service.interconsulta && (
                            <AccordionItem value="interconsulta">
                              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                                Interconsultas disponibles ({service.interconsulta.length})
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-4">
                                  {service.interconsulta.map((consult, idx) => (
                                    <div 
                                      key={idx} 
                                      className="p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors text-center group"
                                    >
                                      <Users className="h-5 w-5 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                                      <h4 className="font-semibold text-sm mb-1">{consult.name}</h4>
                                      <p className="text-xs text-muted-foreground">{consult.description}</p>
                                    </div>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          )}
                        </Accordion>
                        
                        {/* CTA Button */}
                        <div className="mt-6 pt-6 border-t">
                          <Button 
                            size="lg"
                            className="w-full sm:w-auto"
                            onClick={() => window.open('https://wa.me/51929312370', '_blank')}
                          >
                            <MessageCircle className="h-5 w-5 mr-2" />
                            Solicitar Información
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 border-2 border-primary/20 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
              <CardHeader className="text-center relative z-10 pt-12">
                <Badge variant="secondary" className="mb-4 mx-auto">
                  Atención Profesional
                </Badge>
                <CardTitle className="text-3xl md:text-4xl mb-4">
                  ¿Por qué elegirnos?
                </CardTitle>
                <CardDescription className="text-lg">
                  Más de 10 años de experiencia en salud ocupacional
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 pb-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex gap-4 group hover-scale">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <div className="h-3 w-3 rounded-full bg-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Personal Certificado</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Médicos ocupacionales certificados por MINSA
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 group hover-scale">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <div className="h-3 w-3 rounded-full bg-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Equipamiento Moderno</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Tecnología de última generación
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 group hover-scale">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <div className="h-3 w-3 rounded-full bg-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Resultados Rápidos</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Entrega de certificados en 24-48 horas hábiles
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex gap-4 group hover-scale">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <div className="h-3 w-3 rounded-full bg-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Dos Sedes Disponibles</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Atención en Challhuahuacho y Cusco
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 group hover-scale">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <div className="h-3 w-3 rounded-full bg-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Convenios Corporativos</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Precios especiales para empresas y organizaciones
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 group hover-scale">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <div className="h-3 w-3 rounded-full bg-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Servicio In-House</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Atención en las instalaciones de su empresa
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex justify-center">
                  <Button 
                    size="lg"
                    onClick={() => window.open('https://wa.me/51929312370', '_blank')}
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Contáctanos ahora
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExamenesOcupacionales;
