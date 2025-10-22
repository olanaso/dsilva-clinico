import { Award, Users, Target, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import teamImage from "@/assets/team-image.jpg";

const Nosotros = () => {
  const values = [
    {
      icon: Heart,
      title: "Compromiso",
      description: "Dedicados a brindar la mejor atención médica con calidez humana",
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Profesionales altamente capacitados y tecnología de vanguardia",
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Colaboración multidisciplinaria para tu bienestar integral",
    },
    {
      icon: Target,
      title: "Innovación",
      description: "Actualización constante en tratamientos y procedimientos médicos",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl font-bold mb-6 animate-fade-in">Sobre D'Silva Policlínico</h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Tu salud es nuestra prioridad. Conoce nuestra historia y compromiso con tu bienestar
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-display text-4xl font-bold">Quiénes Somos</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Policlínico D'SILVA es una institución de salud con <strong>más de 13 años de experiencia</strong> al 
                servicio de la salud ocupacional y ambulatoria, trabajando con importantes empresas del país como 
                MMG Las Bambas, Graña y Montero, Concar, Mota-Engil, Adecco Perú, Manpower, EPSA y Minera Antares, 
                entre otras.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nos especializamos en la realización de <strong>exámenes médicos ocupacionales</strong>, brindando un 
                servicio ágil, seguro y conforme a los más altos estándares exigidos por las normativas de salud y 
                seguridad laboral. A lo largo de estos años, hemos construido una sólida reputación como aliados 
                estratégicos en la protección de la salud de los trabajadores.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Además, ofrecemos atenciones médicas ambulatorias a la comunidad en general, con servicios de consulta 
                médica general, psicología, odontología, especialidades médicas, farmacia, laboratorio clínico 
                automatizado, radiología digital y óptica.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Contamos con una moderna infraestructura, equipos de última tecnología y un equipo humano calificado 
                y comprometido, que garantiza una atención cálida, personalizada y eficaz.
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <img
                src={teamImage}
                alt="Equipo Médico D'Silva"
                className="rounded-2xl shadow-medical w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-background p-8 rounded-2xl shadow-card-custom animate-fade-in">
              <div className="w-16 h-16 rounded-xl bg-gradient-secondary flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Nuestra Misión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Contribuir al bienestar físico y mental de nuestros pacientes, ofreciendo servicios de salud 
                ocupacional y atención médica integral con calidad, ética profesional y tecnología de vanguardia.
              </p>
            </div>
            <div className="bg-background p-8 rounded-2xl shadow-card-custom animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Nuestra Visión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser un centro médico líder en salud ocupacional y ambulatoria en la región, reconocido por su 
                excelencia en el servicio, innovación y compromiso con la salud de las personas y el desarrollo 
                de las empresas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Nuestros Valores</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo diario
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-xl shadow-card-custom hover:shadow-medical transition-all text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-secondary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;
