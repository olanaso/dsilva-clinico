import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface SpecialtyCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  fullDescription?: string;
  objectives?: string;
  responsible?: string;
}

const SpecialtyCard = ({ 
  icon: Icon, 
  title, 
  description, 
  fullDescription, 
  objectives, 
  responsible 
}: SpecialtyCardProps) => {
  return (
    <Dialog>
      <Card className="group relative h-full bg-gradient-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 overflow-hidden border-border hover:border-secondary/50">
        <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        <CardHeader className="space-y-4 relative z-10">
          <div className="w-16 h-16 rounded-xl bg-gradient-secondary flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
            <Icon className="h-8 w-8 text-secondary-foreground" />
          </div>
          <CardTitle className="font-display text-2xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 relative z-10">
          <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
              Ver más información
            </Button>
          </DialogTrigger>
        </CardContent>
      </Card>

      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="w-16 h-16 rounded-xl bg-gradient-secondary flex items-center justify-center mb-4 shadow-glow">
            <Icon className="h-8 w-8 text-secondary-foreground" />
          </div>
          <DialogTitle className="text-3xl font-display">{title}</DialogTitle>
          <DialogDescription className="text-base pt-2 leading-relaxed">
            {fullDescription || description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          {objectives && (
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                Objetivos
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-4">{objectives}</p>
            </div>
          )}

          {responsible && (
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                Personal Responsable
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-4">{responsible}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SpecialtyCard;
