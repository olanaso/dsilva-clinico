import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Privacidad = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl font-bold mb-6 animate-fade-in">
              Política de Privacidad
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
                  <h2 className="font-display text-2xl font-bold mb-4">1. Introducción</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    En Policlínico Ocupacional Challhuahuacho SAC (Policlínico D'Silva), nos comprometemos a proteger 
                    la privacidad y confidencialidad de la información personal y médica de nuestros pacientes. Esta 
                    política explica cómo recopilamos, utilizamos, almacenamos y protegemos su información.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4">2. Información que Recopilamos</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Recopilamos la siguiente información:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li><strong>Datos personales:</strong> Nombre completo, fecha de nacimiento, DNI, dirección, teléfono, email</li>
                    <li><strong>Información médica:</strong> Historial clínico, diagnósticos, tratamientos, resultados de exámenes</li>
                    <li><strong>Información laboral:</strong> Empresa, puesto de trabajo, exposición a riesgos ocupacionales</li>
                    <li><strong>Datos de facturación:</strong> Información necesaria para procesar pagos y facturación</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4">3. Uso de la Información</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Utilizamos su información para:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Proporcionar servicios médicos de calidad</li>
                    <li>Mantener registros médicos actualizados</li>
                    <li>Cumplir con requisitos legales y regulatorios</li>
                    <li>Comunicarnos con usted sobre citas, resultados y seguimientos</li>
                    <li>Procesar pagos y emitir facturas</li>
                    <li>Mejorar nuestros servicios</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4">4. Protección de Datos Médicos</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Cumplimos estrictamente con la Ley de Protección de Datos Personales (Ley N° 29733) y su 
                    reglamento. Toda información médica es tratada como confidencial y está protegida por el 
                    secreto profesional médico. Solo el personal autorizado tiene acceso a esta información.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4">5. Compartir Información</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Podemos compartir su información solo en las siguientes circunstancias:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Con su consentimiento explícito</li>
                    <li>Con empresas que contratan nuestros servicios ocupacionales (información limitada)</li>
                    <li>Con autoridades sanitarias cuando sea requerido por ley</li>
                    <li>Con profesionales médicos externos en caso de referencias o interconsultas (con su autorización)</li>
                    <li>Con compañías de seguros, solo la información necesaria para procesamiento de reclamos</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4">6. Seguridad de la Información</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Implementamos medidas de seguridad físicas, técnicas y administrativas para proteger su 
                    información:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Acceso restringido a áreas de almacenamiento de información</li>
                    <li>Sistemas informáticos protegidos con contraseñas y encriptación</li>
                    <li>Capacitación continua del personal en protección de datos</li>
                    <li>Respaldos periódicos de información</li>
                    <li>Protocolos de destrucción segura de documentos</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4">7. Sus Derechos</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Usted tiene derecho a:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Acceder a su información personal y médica</li>
                    <li>Solicitar corrección de datos inexactos</li>
                    <li>Solicitar la eliminación de datos (con excepciones legales)</li>
                    <li>Oponerse al tratamiento de sus datos en ciertos casos</li>
                    <li>Solicitar la portabilidad de sus datos</li>
                    <li>Retirar su consentimiento en cualquier momento</li>
                    <li>Recibir una copia de su historial médico</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4">8. Retención de Datos</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Mantenemos su información médica de acuerdo con los requisitos legales establecidos por las 
                    autoridades sanitarias peruanas. Los historiales clínicos se conservan por un mínimo de 5 años 
                    desde la última atención, o según lo requiera la ley.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4">9. Cookies y Tecnologías Web</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Nuestro sitio web puede utilizar cookies para mejorar su experiencia de navegación. Las cookies 
                    son archivos pequeños que se almacenan en su dispositivo y nos ayudan a analizar el tráfico web 
                    y personalizar el contenido. Puede configurar su navegador para rechazar cookies.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4">10. Menores de Edad</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Para pacientes menores de 18 años, requerimos el consentimiento de un padre o tutor legal 
                    para el tratamiento de datos personales y la prestación de servicios médicos, excepto en 
                    situaciones de emergencia.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4">11. Cambios a esta Política</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Nos reservamos el derecho de actualizar esta política de privacidad. Los cambios importantes 
                    serán comunicados a través de nuestro sitio web y, cuando sea apropiado, por otros medios de 
                    comunicación.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4">12. Contacto</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Para ejercer sus derechos o realizar consultas sobre esta política de privacidad, puede 
                    contactarnos:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Email:</strong> administracion@dsilvapoliclinico.com</p>
                    <p><strong>Teléfono:</strong> +51 929 312 370</p>
                    <p><strong>Dirección Challhuahuacho:</strong> Av. Sulfubamba S/N, Challhuahuacho</p>
                    <p><strong>Dirección Cusco:</strong> Av. Túpac Amaru O-5, Wanchaq - Cusco</p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4">13. Autoridad de Protección de Datos</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Si considera que sus derechos de protección de datos han sido vulnerados, puede presentar una 
                    queja ante la Autoridad Nacional de Protección de Datos Personales del Ministerio de Justicia 
                    y Derechos Humanos del Perú.
                  </p>
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

export default Privacidad;
