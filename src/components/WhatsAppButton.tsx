import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "51929312370"; // Formato internacional sin + ni espacios
  const message = encodeURIComponent("Hola, me gustaría obtener información sobre sus servicios médicos.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <Button
        size="lg"
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-110 p-0"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-background border border-border rounded-lg px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        <p className="text-sm font-medium">¿Necesitas ayuda?</p>
        <p className="text-xs text-muted-foreground">Chatea con nosotros</p>
      </div>
      
      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
    </a>
  );
};

export default WhatsAppButton;
