import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, FileText } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Especialidades", path: "/especialidades" },
    { name: "Servicios", path: "/servicios" },
    { name: "Preguntas Frecuentes", path: "/preguntas-frecuentes" },
    { name: "Contacto", path: "/contacto" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-end items-center gap-6 text-sm">
          <a href="tel:+51987654321" className="flex items-center gap-2 hover:text-secondary transition-colors">
            <Phone className="h-4 w-4" />
            <span>+51 987 654 321</span>
          </a>
          <a href="mailto:info@dsilva.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
            <Mail className="h-4 w-4" />
            <span>info@dsilva.com</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="D'Silva Policlínico"
              className="h-14 w-14 transition-transform group-hover:scale-105 drop-shadow-lg"
            />
            <div>
              <h1 className="font-display font-bold text-xl text-foreground">D'SILVA</h1>
              <p className="text-xs text-accent font-semibold">Policlínico</p>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive(item.path)
                    ? "bg-secondary text-secondary-foreground shadow-glow"
                    : "text-foreground hover:text-secondary hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              variant="outline"
              className="ml-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
            >
              <Link to="/resultados-online" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Resultados en Línea
              </Link>
            </Button>
            <Button asChild className="ml-2 bg-gradient-hero hover:opacity-90 shadow-medical">
              <Link to="/contacto">Agendar Cita</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive(item.path) ? "bg-secondary text-secondary-foreground" : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild variant="outline" className="mt-2 border-secondary text-secondary">
                <Link
                  to="/resultados-online"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  Resultados en Línea
                </Link>
              </Button>
              <Button asChild className="mt-2 bg-gradient-hero">
                <Link to="/contacto" onClick={() => setIsOpen(false)}>
                  Agendar Cita
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
