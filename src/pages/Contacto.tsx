import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+51 987 654 321", "+51 987 654 322"],
      action: "tel:+51987654321",
    },
    {
      icon: Mail,
      title: "Correo Electrónico",
      details: ["info@dsilva.com", "citas@dsilva.com"],
      action: "mailto:info@dsilva.com",
    },
    {
      icon: MapPin,
      title: "Dirección",
      details: ["Av. Principal 123", "Lima, Perú"],
      action: "#",
    },
    {
      icon: Clock,
      title: "Horario",
      details: ["Lun - Vie: 8:00 AM - 8:00 PM", "Sáb: 9:00 AM - 2:00 PM"],
      action: "#",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl font-bold mb-6 animate-fade-in">Contacto</h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Estamos aquí para atenderte. Contáctanos para agendar tu cita o resolver tus dudas
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="shadow-card-custom hover:shadow-medical transition-all animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center mb-3">
                    <info.icon className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <Card className="shadow-medical">
              <CardHeader>
                <CardTitle className="font-display text-2xl">Envíanos un Mensaje</CardTitle>
                <CardDescription>
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Nombre Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Juan Pérez"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Correo Electrónico *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="juan@ejemplo.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                      Teléfono *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+51 987 654 321"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Mensaje *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe tu consulta o solicitud..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-hero hover:opacity-90 shadow-medical">
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map */}
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-2xl font-bold mb-4">Ubicación</h3>
                <p className="text-muted-foreground mb-6">
                  Visítanos en nuestra moderna instalación, diseñada para brindarte comodidad y la mejor
                  atención médica.
                </p>
              </div>
              <div className="bg-muted rounded-xl overflow-hidden shadow-card-custom h-[400px] flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-16 w-16 text-secondary mx-auto mb-4" />
                  <h4 className="font-display font-semibold text-lg mb-2">D'Silva Policlínico</h4>
                  <p className="text-muted-foreground">Av. Principal 123</p>
                  <p className="text-muted-foreground">Lima, Perú</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;
