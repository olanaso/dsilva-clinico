import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SpecialtyCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

const SpecialtyCard = ({ icon: Icon, title, description, link = "/contacto" }: SpecialtyCardProps) => {
  return (
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
        <Button asChild variant="ghost" className="group/btn p-0 h-auto font-semibold text-secondary hover:text-secondary hover:bg-transparent">
          <Link to={link}>
            Ver más
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default SpecialtyCard;
