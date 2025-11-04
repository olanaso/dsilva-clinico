import { LucideIcon, Ear, Activity, Heart, ChevronDown } from "lucide-react";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface SubSpecialty {
  icon: LucideIcon;
  title: string;
  specialty: string;
  description: string;
  objectives: string;
  responsible: string;
  image: string;
}

interface OccupationalMedicineCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  fullDescription: string;
  objectives: string;
  responsible: string;
  image: string;
  subSpecialties: SubSpecialty[];
}

const OccupationalMedicineCard = ({ 
  icon: Icon, 
  title, 
  description, 
  fullDescription, 
  objectives, 
  responsible,
  image,
  subSpecialties
}: OccupationalMedicineCardProps) => {
  return (
    <Dialog>
      <Card className="group relative h-full bg-gradient-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 overflow-hidden border-border hover:border-secondary/50">
        <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-secondary flex items-center justify-center shadow-glow">
            <Icon className="h-6 w-6 text-secondary-foreground" />
          </div>
          <Badge className="absolute top-4 right-4 bg-secondary/90 backdrop-blur">
            {subSpecialties.length} Especialidades
          </Badge>
        </div>
        
        <CardHeader className="space-y-4 relative z-10">
          <CardTitle className="font-display text-2xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 relative z-10">
          <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
          
          {/* Preview of sub-specialties */}
          <div className="space-y-2 pt-2">
            <p className="text-sm font-semibold text-muted-foreground">Incluye:</p>
            <div className="flex flex-wrap gap-2">
              {subSpecialties.map((sub, idx) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  {sub.title}
                </Badge>
              ))}
            </div>
          </div>
          
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
              Ver todas las especialidades
            </Button>
          </DialogTrigger>
        </CardContent>
      </Card>

      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="relative h-64 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-lg">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
          <div className="w-16 h-16 rounded-xl bg-gradient-secondary flex items-center justify-center mb-4 shadow-glow">
            <Icon className="h-8 w-8 text-secondary-foreground" />
          </div>
          <DialogTitle className="text-3xl font-display">{title}</DialogTitle>
          <DialogDescription className="text-base pt-2 leading-relaxed">
            {fullDescription}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              Objetivos
            </h3>
            <p className="text-muted-foreground leading-relaxed pl-4">{objectives}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              Personal Responsable
            </h3>
            <p className="text-muted-foreground leading-relaxed pl-4">{responsible}</p>
          </div>

          {/* Sub-specialties Section */}
          <div className="space-y-4 pt-4 border-t">
            <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Especialidades Incluidas
            </h3>
            
            <Accordion type="single" collapsible className="w-full">
              {subSpecialties.map((sub, idx) => {
                const SubIcon = sub.icon;
                return (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0">
                          <SubIcon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold text-lg">{sub.title}</p>
                          <Badge variant="secondary" className="mt-1">
                            {sub.specialty}
                          </Badge>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-14 space-y-4 pt-2">
                        <div className="relative h-48 overflow-hidden rounded-lg">
                          <img 
                            src={sub.image} 
                            alt={sub.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">Descripción</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {sub.description}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">Objetivos</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {sub.objectives}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">Personal Responsable</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {sub.responsible}
                            </p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OccupationalMedicineCard;
