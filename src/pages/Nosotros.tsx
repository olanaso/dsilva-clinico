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
                D'Silva Policlínico es un centro médico especializado que nace con el compromiso de brindar
                servicios de salud de la más alta calidad a toda la comunidad.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Contamos con un equipo multidisciplinario de profesionales médicos altamente capacitados,
                equipamiento de última generación y un enfoque integral en la atención al paciente.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestro objetivo es ser tu aliado en el cuidado de la salud, ofreciendo un servicio cálido,
                profesional y accesible para toda la familia.
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
                Brindar servicios de salud integrales y de calidad, con un enfoque humano y profesional,
                utilizando tecnología de vanguardia para mejorar la calidad de vida de nuestros pacientes y
                sus familias.
              </p>
            </div>
            <div className="bg-background p-8 rounded-2xl shadow-card-custom animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Nuestra Visión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconocidos como el policlínico líder en atención médica especializada, destacando por
                nuestra excelencia profesional, innovación tecnológica y compromiso con el bienestar integral
                de la comunidad.
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
