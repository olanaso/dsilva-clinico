import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import LocationMap from "@/components/LocationMap";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es obligatorio").max(100, "El nombre debe tener menos de 100 caracteres"),
  email: z.string().trim().email("Email inválido").max(255, "El email debe tener menos de 255 caracteres"),
  phone: z.string().trim().min(1, "El teléfono es obligatorio").max(20, "El teléfono debe tener menos de 20 caracteres"),
  message: z.string().trim().min(1, "El mensaje es obligatorio").max(1000, "El mensaje debe tener menos de 1000 caracteres"),
  acceptTerms: z.boolean().refine(val => val === true, "Debes aceptar los términos y condiciones"),
});

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    acceptTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar con zod
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0].toString()] = error.message;
        }
      });
      setErrors(fieldErrors);
      toast({
        title: "Error en el formulario",
        description: "Por favor, corrige los errores antes de enviar.",
        variant: "destructive",
      });
      return;
    }
    
    setErrors({});
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ name: "", email: "", phone: "", message: "", acceptTerms: false });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      acceptTerms: checked,
    }));
    // Limpiar error del checkbox cuando se marca
    if (errors.acceptTerms) {
      setErrors((prev) => ({ ...prev, acceptTerms: "" }));
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+51 929 312 370"],
      action: "tel:+51929312370",
    },
    {
      icon: Mail,
      title: "Correo Electrónico",
      details: ["administracion@dsilvapoliclinico.com"],
      action: "mailto:administracion@dsilvapoliclinico.com",
    },
    {
      icon: MapPin,
      title: "Dirección Challhuahuacho",
      details: ["Av. Sulfubamba S/N", "Challhuahuacho"],
      action: "#",
    },
    {
      icon: MapPin,
      title: "Dirección Cusco",
      details: ["Av. Túpac Amaru O-5", "Wanchaq - Cusco"],
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

          {/* Horarios */}
          <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="shadow-card-custom">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center mb-3">
                  <Clock className="h-6 w-6 text-secondary-foreground" />
                </div>
                <CardTitle className="text-lg">Horarios Challhuahuacho</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm font-medium mb-1">Lunes - Domingo</p>
                <p className="text-muted-foreground text-sm">8:00 AM - 12:00 PM</p>
                <p className="text-muted-foreground text-sm">2:30 PM - 8:30 PM</p>
              </CardContent>
            </Card>
            <Card className="shadow-card-custom">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center mb-3">
                  <Clock className="h-6 w-6 text-secondary-foreground" />
                </div>
                <CardTitle className="text-lg">Horarios Cusco</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm font-medium mb-1">Lunes - Sábado</p>
                <p className="text-muted-foreground text-sm">7:00 AM - 12:00 PM</p>
                <p className="text-muted-foreground text-sm">2:30 PM - 7:00 PM</p>
              </CardContent>
            </Card>
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
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">{errors.name}</p>
                    )}
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
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email}</p>
                    )}
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
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                    )}
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
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message}</p>
                    )}
                  </div>
                  
                  {/* Términos y Condiciones */}
                  <div className="flex items-start space-x-3 pt-2">
                    <Checkbox
                      id="acceptTerms"
                      checked={formData.acceptTerms}
                      onCheckedChange={handleCheckboxChange}
                      className={errors.acceptTerms ? "border-destructive" : ""}
                    />
                    <label
                      htmlFor="acceptTerms"
                      className="text-sm leading-relaxed cursor-pointer"
                    >
                      Acepto los{" "}
                      <Link
                        to="/terminos"
                        className="text-primary hover:underline font-medium"
                        target="_blank"
                      >
                        Términos y Condiciones
                      </Link>{" "}
                      y la{" "}
                      <Link
                        to="/privacidad"
                        className="text-primary hover:underline font-medium"
                        target="_blank"
                      >
                        Política de Privacidad
                      </Link>{" "}
                      *
                    </label>
                  </div>
                  {errors.acceptTerms && (
                    <p className="text-sm text-destructive">{errors.acceptTerms}</p>
                  )}
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-hero hover:opacity-90 shadow-medical"
                    disabled={!formData.acceptTerms}
                  >
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
                  Haz clic en el mapa para abrir la ubicación en Google Maps
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-display font-semibold text-lg mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Sede Challhuahuacho
                  </h4>
                  <LocationMap
                    latitude={-14.2847}
                    longitude={-72.8389}
                    locationName="Sede Challhuahuacho"
                    address="Av. Sulfubamba S/N, Challhuahuacho"
                  />
                  <p className="text-sm text-muted-foreground mt-2">Av. Sulfubamba S/N, Challhuahuacho</p>
                </div>
                
                <div>
                  <h4 className="font-display font-semibold text-lg mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Sede Cusco
                  </h4>
                  <LocationMap
                    latitude={-13.5200}
                    longitude={-71.9678}
                    locationName="Sede Cusco"
                    address="Av. Túpac Amaru O-5, Wanchaq - Cusco"
                  />
                  <p className="text-sm text-muted-foreground mt-2">Av. Túpac Amaru O-5, Wanchaq - Cusco</p>
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
