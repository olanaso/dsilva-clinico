import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";

const PreguntasFrecuentes = () => {
  const faqs = [
    {
      category: "Servicios y Atención",
      questions: [
        {
          question: "¿Qué servicios médicos ofrecen?",
          answer: "Ofrecemos una amplia gama de servicios incluyendo Medicina General, Medicina Ocupacional, Odontología, Psicología, Oftalmología, Laboratorio Clínico, Rayos X, Ecografía, Electrocardiograma, Audiometría, Espirometría y Farmacia. Todos nuestros servicios están diseñados para brindar atención integral tanto a empresas como a pacientes particulares."
        },
        {
          question: "¿Cuál es el horario de atención?",
          answer: "En nuestra sede de Challhuahuacho atendemos de Lunes a Domingo de 8:00 AM a 12:00 PM y de 2:30 PM a 8:30 PM. En nuestra sede de Cusco el horario es de Lunes a Sábado de 7:00 AM a 12:00 PM y de 2:30 PM a 7:00 PM. Para emergencias y consultas, estamos disponibles vía WhatsApp al 929 312 370."
        },
        {
          question: "¿Necesito cita previa para ser atendido?",
          answer: "Para exámenes ocupacionales y procedimientos específicos recomendamos agendar cita previa. Sin embargo, también atendemos casos de emergencia sin cita. Puede agendar su cita llamando al +51 929 312 370 o a través de nuestro WhatsApp."
        }
      ]
    },
    {
      category: "Exámenes Médicos Ocupacionales",
      questions: [
        {
          question: "¿Qué son los exámenes médicos ocupacionales?",
          answer: "Los exámenes médicos ocupacionales son evaluaciones médicas requeridas por ley para evaluar la aptitud de los trabajadores según el puesto de trabajo. Incluyen examen médico general, análisis de laboratorio, evaluaciones específicas según el riesgo ocupacional, y permiten identificar condiciones de salud que puedan verse afectadas por las actividades laborales."
        },
        {
          question: "¿Qué tipos de exámenes ocupacionales realizan?",
          answer: "Realizamos exámenes pre-ocupacionales (antes de ingresar a trabajar), exámenes periódicos (durante el tiempo de trabajo), exámenes de retiro (al finalizar la relación laboral), y exámenes de reintegro (al regresar después de incapacidad prolongada). Cada tipo cumple con los requisitos del Ministerio de Trabajo y Ministerio de Salud."
        },
        {
          question: "¿Cuánto tiempo tarda la entrega de resultados?",
          answer: "Los resultados de exámenes ocupacionales generalmente están disponibles entre 24 a 48 horas hábiles. Los resultados pueden ser consultados en línea a través de nuestra plataforma de Resultados en Línea, o pueden ser recogidos en nuestras sedes. Para empresas con convenio, coordinamos la entrega según lo acordado."
        },
        {
          question: "¿Entregan certificado médico ocupacional?",
          answer: "Sí, entregamos el certificado médico ocupacional oficial que cumple con todas las normativas vigentes del Ministerio de Salud y Ministerio de Trabajo. Este documento es válido para presentar en cualquier empresa o institución que lo requiera."
        }
      ]
    },
    {
      category: "Convenios y Empresas",
      questions: [
        {
          question: "¿Realizan convenios con empresas?",
          answer: "Sí, ofrecemos convenios corporativos con precios preferenciales y servicios personalizados para empresas. Incluimos atención programada en nuestras instalaciones o servicio en el local de la empresa (servicio in-house), facturación especial, reportes mensuales, y un ejecutivo de cuenta dedicado. Contáctenos para solicitar una cotización personalizada."
        },
        {
          question: "¿Pueden realizar exámenes en las instalaciones de nuestra empresa?",
          answer: "Sí, ofrecemos el servicio de Vigilancia Médica con médico ocupacional y enfermera que se trasladan a las instalaciones de su empresa. Este servicio incluye todo el equipo necesario para realizar los exámenes ocupacionales requeridos, ideal para empresas con gran cantidad de personal o ubicadas en zonas alejadas."
        }
      ]
    },
    {
      category: "Pagos y Costos",
      questions: [
        {
          question: "¿Qué métodos de pago aceptan?",
          answer: "Aceptamos efectivo, tarjetas de débito y crédito (Visa, Mastercard, American Express), transferencias bancarias y pagos mediante Yape o Plin. Para empresas con convenio también ofrecemos facturación con crédito según acuerdo comercial."
        },
        {
          question: "¿Cuánto cuesta un examen médico ocupacional?",
          answer: "El costo varía según el tipo de examen y los análisis específicos requeridos por cada puesto de trabajo. Le recomendamos contactarnos al +51 929 312 370 o vía WhatsApp para solicitar una cotización detallada según sus necesidades específicas."
        },
        {
          question: "¿Trabajan con seguros médicos?",
          answer: "Trabajamos con diversos seguros médicos y empresas aseguradoras. Para confirmar si trabajamos con su seguro específico y los procedimientos de cobertura, por favor comuníquese con nosotros antes de su cita."
        }
      ]
    },
    {
      category: "Resultados y Certificados",
      questions: [
        {
          question: "¿Cómo puedo consultar mis resultados en línea?",
          answer: "Puede consultar sus resultados ingresando a nuestra plataforma de Resultados en Línea disponible en nuestra página web. Necesitará su número de documento de identidad y el código de acceso que se le proporcionó al realizar su examen. Si tiene problemas para acceder, contáctenos y le asistiremos."
        },
        {
          question: "¿Puedo recoger una copia física de mis resultados?",
          answer: "Sí, puede recoger sus resultados en formato físico en cualquiera de nuestras sedes durante el horario de atención. Solo necesita presentar su documento de identidad. También ofrecemos envío de resultados por correo electrónico o mensajería con costo adicional."
        }
      ]
    },
    {
      category: "Ubicaciones",
      questions: [
        {
          question: "¿Dónde están ubicadas sus sedes?",
          answer: "Contamos con dos sedes estratégicamente ubicadas: Sede Challhuahuacho en Av. Sulfubamba S/N, Challhuahuacho; y Sede Cusco en Av. Túpac Amaru O-5, Wanchaq - Cusco. Ambas sedes están equipadas con tecnología moderna y personal altamente capacitado para brindarle la mejor atención."
        },
        {
          question: "¿Cómo puedo llegar a sus instalaciones?",
          answer: "Nuestras sedes están ubicadas en zonas de fácil acceso. Para indicaciones específicas o coordinación de visitas, puede contactarnos al +51 929 312 370 o escribirnos a administracion@dsilvapoliclinico.com y con gusto le brindaremos las referencias necesarias."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Preguntas Frecuentes
            </h1>
            <p className="text-lg text-muted-foreground">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios, 
              exámenes médicos ocupacionales y atención
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="text-2xl">{category.category}</CardTitle>
                  <CardDescription>
                    Información sobre {category.category.toLowerCase()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`item-${categoryIndex}-${faqIndex}`}
                      >
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">¿No encontraste tu respuesta?</CardTitle>
                <CardDescription>
                  Estamos aquí para ayudarte. Contáctanos por cualquiera de estos medios
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button
                    variant="outline"
                    className="h-auto py-4 flex flex-col gap-2"
                    onClick={() => window.open('https://wa.me/51929312370', '_blank')}
                  >
                    <MessageCircle className="h-6 w-6 text-primary" />
                    <span className="font-semibold">WhatsApp</span>
                    <span className="text-xs text-muted-foreground">+51 929 312 370</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="h-auto py-4 flex flex-col gap-2"
                    onClick={() => window.location.href = 'tel:+51929312370'}
                  >
                    <Phone className="h-6 w-6 text-primary" />
                    <span className="font-semibold">Llámanos</span>
                    <span className="text-xs text-muted-foreground">+51 929 312 370</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="h-auto py-4 flex flex-col gap-2"
                    onClick={() => window.location.href = 'mailto:administracion@dsilvapoliclinico.com'}
                  >
                    <Mail className="h-6 w-6 text-primary" />
                    <span className="font-semibold">Email</span>
                    <span className="text-xs text-muted-foreground">administracion@dsilvapoliclinico.com</span>
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

export default PreguntasFrecuentes;
