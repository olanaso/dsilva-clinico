import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="D'Silva Policlínico" className="h-12 w-12" />
              <div>
                <h3 className="font-display font-bold text-lg">D'SILVA</h3>
                <p className="text-xs text-secondary">Policlínico</p>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Tu salud es nuestra prioridad. Atención médica especializada con tecnología de punta.
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
                  <a href="tel:+51987654321" className="hover:text-secondary transition-colors">
                    +51 987 654 321
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@dsilva.com" className="hover:text-secondary transition-colors">
                    info@dsilva.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Av. Principal 123, Lima, Perú</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Horario de Atención</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Lunes - Viernes</p>
                  <p className="opacity-90">8:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Sábados</p>
                  <p className="opacity-90">9:00 AM - 2:00 PM</p>
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

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} D'Silva Policlínico. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
