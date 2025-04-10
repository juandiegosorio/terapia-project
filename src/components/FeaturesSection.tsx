
import {
  BrainCircuit,
  Folder,
  Lock,
  MessageSquare,
  PenSquare,
  Upload,
  Video
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Grabación Segura de Sesiones",
    description: "Graba sesiones de audio o video directamente en la aplicación con encriptación de extremo a extremo.",
    icon: Video,
    color: "text-therapy-teal",
    bg: "bg-therapy-light-cream/70"
  },
  {
    title: "Transcripción con IA",
    description: "Transcripción automática de voz a texto utilizando la avanzada API de ElevenLabs.",
    icon: MessageSquare,
    color: "text-therapy-purple",
    bg: "bg-therapy-light-pink/70"
  },
  {
    title: "Gestión Fluida de Archivos",
    description: "Organiza sesiones de pacientes en Google Drive con estructuras de carpetas automatizadas.",
    icon: Folder,
    color: "text-therapy-gold",
    bg: "bg-therapy-cream/50"
  },
  {
    title: "Análisis Emocional",
    description: "Análisis impulsados por IA que detectan emociones y extraen información relevante del paciente.",
    icon: BrainCircuit,
    color: "text-therapy-magenta",
    bg: "bg-therapy-light-pink/50"
  },
  {
    title: "Notas del Terapeuta",
    description: "Añade notas personales a cada sesión para una atención integral al paciente.",
    icon: PenSquare,
    color: "text-therapy-navy",
    bg: "bg-therapy-cream-pink/70"
  },
  {
    title: "Control de Acceso Seguro",
    description: "Permisos detallados que garantizan que los pacientes solo vean sus propias sesiones.",
    icon: Lock,
    color: "text-therapy-dark-teal",
    bg: "bg-therapy-light-cream/70"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-therapy-dark-blue sm:text-4xl">
            Potentes Características para Terapia Moderna
          </h2>
          <p className="mt-4 text-lg text-therapy-deep-purple max-w-3xl mx-auto">
            Nuestra plataforma proporciona todo lo que los terapeutas necesitan para agilizar la gestión 
            de sesiones y mejorar la atención al paciente con análisis impulsados por IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className={`p-3 rounded-full w-fit ${feature.bg}`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl mt-4 text-therapy-navy">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-therapy-deep-purple">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
