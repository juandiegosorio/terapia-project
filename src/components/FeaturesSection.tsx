
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
    title: "Secure Session Recording",
    description: "Record audio or video sessions directly within the app with end-to-end encryption.",
    icon: Video,
    color: "text-therapy-teal",
    bg: "bg-therapy-light-cream/70"
  },
  {
    title: "AI-Powered Transcription",
    description: "Automatic speech-to-text transcription using ElevenLabs advanced API.",
    icon: MessageSquare,
    color: "text-therapy-purple",
    bg: "bg-therapy-light-pink/70"
  },
  {
    title: "Seamless File Management",
    description: "Organize patient sessions in Google Drive with automated folder structures.",
    icon: Folder,
    color: "text-therapy-gold",
    bg: "bg-therapy-cream/50"
  },
  {
    title: "Emotional Analysis",
    description: "AI-driven insights detect emotions and extract relevant patient information.",
    icon: BrainCircuit,
    color: "text-therapy-magenta",
    bg: "bg-therapy-light-pink/50"
  },
  {
    title: "Therapist Notes",
    description: "Add personal notes to each session for comprehensive patient care.",
    icon: PenSquare,
    color: "text-therapy-navy",
    bg: "bg-therapy-cream-pink/70"
  },
  {
    title: "Secure Access Control",
    description: "Fine-grained permissions ensure patients only see their own sessions.",
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
            Powerful Features for Modern Therapy
          </h2>
          <p className="mt-4 text-lg text-therapy-deep-purple max-w-3xl mx-auto">
            Our platform provides everything therapists need to streamline session management 
            and enhance patient care with AI-powered insights.
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
