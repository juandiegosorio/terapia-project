import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-[radial-gradient(circle_at_40%_50%,_#ff0000_0%,_#ff00ff_30%,_#9966ff_50%,_#0000ff_70%,_#99ccff_90%,_#cccccc_100%)] py-16 sm:py-24">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl animate-fade-in">
            Eleva tu práctica terapéutica con <span className="text-therapy-yellow">JOY</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-white animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Una plataforma segura para almacenar, gestionar y analizar sesiones de terapia.
            Mejora la atención al paciente con análisis impulsados por IA y gestión fluida de sesiones.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button className="bg-therapy-yellow hover:bg-therapy-orange text-therapy-blue hover:text-white px-8 py-6 text-lg transition-colors">
              Comenzar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-therapy-lightBlue text-therapy-lightBlue hover:bg-therapy-violet px-8 py-6 text-lg">
              Saber Más
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
