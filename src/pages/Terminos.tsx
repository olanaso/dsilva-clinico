import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terminos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl font-bold mb-6 animate-fade-in">
              Términos y Condiciones
            </h1>
            <p className="text-xl opacity-90 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Última actualización: {new Date().toLocaleDateString('es-PE')}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-medical">
              <CardContent className="prose prose-slate max-w-none pt-6">
                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4">1. Aceptación de Términos</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Al acceder y utilizar los servicios de Policlínico Ocupacional Challhuahuacho SAC, usted acepta 
                    estar sujeto a estos términos y condiciones de uso. Si no está de acuerdo con alguna parte de 
                    estos términos, no debe utilizar nuestros servicios.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4">2. Servicios Médicos</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Policlínico D'Silva ofrece servicios de salud ocupacional y atención médica ambulatoria. 
                    Nuestros servicios incluyen:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Exámenes médicos ocupacionales</li>
                    <li>Consultas médicas generales y especializadas</li>
                    <li>Servicios de laboratorio, radiología y otras pruebas diagnósticas</li>
                    <li>Servicios de farmacia y óptica</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4">3. Citas y Cancelaciones</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Las citas médicas deben ser programadas con anticipación. Las cancelaciones deben realizarse 
                    con al menos 24 horas de anticipación. El incumplimiento reiterado puede resultar en restricciones 
                    para programar futuras citas.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4">4. Responsabilidades del Paciente</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    El paciente se compromete a:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Proporcionar información médica veraz y completa</li>
                    <li>Seguir las indicaciones médicas prescritas</li>
                    <li>Respetar los horarios de atención establecidos</li>
                    <li>Cumplir con los pagos acordados por los servicios recibidos</li>
                    <li>Tratar con respeto al personal médico y administrativo</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4">5. Privacidad y Confidencialidad</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Toda información médica y personal será tratada con estricta confidencialidad de acuerdo con 
                    las leyes de protección de datos vigentes. Para más información, consulte nuestra Política de 
                    Privacidad.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4">6. Pagos y Facturación</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Los pagos por servicios médicos deben realizarse según las tarifas establecidas. Aceptamos 
                    diversos métodos de pago. Los servicios cubiertos por seguros o empresas requieren la 
                    presentación de la documentación correspondiente.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4">7. Limitación de Responsabilidad</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Policlínico D'Silva se compromete a proporcionar servicios médicos de calidad siguiendo los 
                    estándares profesionales establecidos. Sin embargo, no garantiza resultados específicos de 
                    tratamientos o diagnósticos, ya que estos pueden variar según cada caso individual.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4">8. Modificaciones</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. 
                    Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4">9. Contacto</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Para cualquier consulta sobre estos términos y condiciones, puede contactarnos:
                  </p>
                  <div className="mt-4 space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> administracion@dsilvapoliclinico.com</p>
                    <p><strong>Teléfono:</strong> +51 929 312 370</p>
                    <p><strong>Dirección Challhuahuacho:</strong> Av. Sulfubamba S/N, Challhuahuacho</p>
                    <p><strong>Dirección Cusco:</strong> Av. Túpac Amaru O-5, Wanchaq - Cusco</p>
                  </div>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terminos;
