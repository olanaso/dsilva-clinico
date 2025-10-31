import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import Nosotros from "./pages/Nosotros";
import Especialidades from "./pages/Especialidades";
import ExamenesOcupacionales from "./pages/ExamenesOcupacionales";
import Contacto from "./pages/Contacto";
import Terminos from "./pages/Terminos";
import Privacidad from "./pages/Privacidad";
import ResultadosOnline from "./pages/ResultadosOnline";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <WhatsAppButton />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/especialidades" element={<Especialidades />} />
          <Route path="/examenes-ocupacionales" element={<ExamenesOcupacionales />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/resultados-online" element={<ResultadosOnline />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
