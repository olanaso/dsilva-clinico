import { useState } from "react";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";

const ResultadosOnline = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    local: "",
    usuario: "",
    contrasena: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.local || !formData.usuario || !formData.contrasena) {
      toast({
        title: "Error",
        description: "Por favor, complete todos los campos",
        variant: "destructive",
      });
      return;
    }

    // Aquí se implementaría la lógica de autenticación real
    toast({
      title: "Acceso denegado",
      description: "Credenciales inválidas. Por favor, verifique sus datos.",
      variant: "destructive",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-2xl">
        <CardContent className="p-8 md:p-12">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Policlínico D'Silva" className="h-16 w-16" />
              <div>
                <h1 className="font-display font-bold text-2xl text-primary">D'SILVA</h1>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Salud Ocupacional</p>
              </div>
            </div>
          </div>

          <div className="border-b border-border mb-6"></div>

          {/* Title */}
          <h2 className="text-center font-display text-2xl font-semibold mb-8">
            Panel de Control de Acceso
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="local" className="block text-sm font-medium mb-2">
                Local
              </label>
              <Select
                value={formData.local}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, local: value }))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccione un local" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="challhuahuacho">Challhuahuacho</SelectItem>
                  <SelectItem value="cusco">Cusco</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="usuario" className="block text-sm font-medium mb-2">
                Usuario
              </label>
              <Input
                id="usuario"
                name="usuario"
                type="text"
                placeholder="Ingrese Usuario"
                value={formData.usuario}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="contrasena" className="block text-sm font-medium mb-2">
                Contraseña
              </label>
              <Input
                id="contrasena"
                name="contrasena"
                type="password"
                placeholder="Ingrese Clave"
                value={formData.contrasena}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#00A3C8] hover:bg-[#008CAF] text-white font-medium py-6"
            >
              Login
            </Button>
          </form>

          {/* Footer */}
          <div className="border-t border-border mt-8 pt-6">
            <p className="text-center text-sm text-muted-foreground">
              <span className="text-[#00A3C8] font-medium">Policlínico D'Silva</span> Copyright {new Date().getFullYear()}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultadosOnline;
