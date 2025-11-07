import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";
import dnaHelix from "@/assets/dna-helix.svg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* DNA Helix Decoration - Left Side */}
      <div className="absolute left-0 top-0 h-full w-32 opacity-10 pointer-events-none">
        <img 
          src={dnaHelix} 
          alt="" 
          className="h-full w-full object-cover object-center animate-pulse"
          style={{ animationDuration: '4s' }}
        />
      </div>
      
      {/* DNA Helix Decoration - Right Side */}
      <div className="absolute right-0 top-0 h-full w-32 opacity-10 pointer-events-none transform scale-x-[-1]">
        <img 
          src={dnaHelix} 
          alt="" 
          className="h-full w-full object-cover object-center animate-pulse"
          style={{ animationDuration: '4s', animationDelay: '2s' }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Policlínico Ocupacional Challhuahuacho" className="h-14 w-14 drop-shadow-lg" />
              <div>
                <h3 className="font-display font-bold text-lg">D'SILVA</h3>
                <p className="text-xs text-secondary">Policlínico Ocupacional</p>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Policlínico Ocupacional Challhuahuacho SAC - Tu salud es nuestra prioridad.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-secondary transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/especialidades" className="hover:text-secondary transition-colors">
                  Especialidades
                </Link>
              </li>
              <li>
                <Link to="/examenes-ocupacionales" className="hover:text-secondary transition-colors">
                  Exámenes Ocupacionales
                </Link>
              </li>
              <li>
                <Link to="/preguntas-frecuentes" className="hover:text-secondary transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-secondary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+51929312370" className="hover:text-secondary transition-colors">
                    +51 929 312 370
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div className="break-all">
                  <a href="mailto:administracion@dsilvapoliclinico.com" className="hover:text-secondary transition-colors">
                    administracion@dsilvapoliclinico.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Challhuahuacho:</p>
                  <span>Av. Sulfubamba S/N, Challhuahuacho</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Cusco:</p>
                  <span>Av. Túpac Amaru O-5, Wanchaq - Cusco</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Horario de Atención</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium text-secondary mb-2">Challhuahuacho:</p>
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Lunes - Domingo</p>
                    <p className="opacity-90">8:00 AM - 12:00 PM</p>
                    <p className="opacity-90">2:30 PM - 8:30 PM</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-medium text-secondary mb-2">Cusco:</p>
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Lunes - Sábado</p>
                    <p className="opacity-90">7:00 AM - 12:00 PM</p>
                    <p className="opacity-90">2:30 PM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-2">
            <Link to="/terminos" className="hover:text-secondary transition-colors">
              Términos y Condiciones
            </Link>
            <span className="hidden md:inline opacity-60">|</span>
            <Link to="/privacidad" className="hover:text-secondary transition-colors">
              Política de Privacidad
            </Link>
          </div>
          <p className="opacity-80">
            &copy; {new Date().getFullYear()} Policlínico Ocupacional Challhuahuacho SAC. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
