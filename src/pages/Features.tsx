
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

const FeatureSection = ({ title, description, features, imageSide = "right" }: { 
  title: string; 
  description: string; 
  features: string[];
  imageSide?: "left" | "right";
}) => {
  return (
    <div className="py-16 border-b border-gray-100">
      <div className={`flex flex-col ${imageSide === "left" ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12`}>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-therapy-navy">{title}</h2>
          <p className="text-therapy-deep-purple mb-8">{description}</p>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-therapy-gold flex-shrink-0 mt-0.5 mr-3" />
                <span className="text-therapy-deep-purple">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-therapy-cream-pink h-64 rounded-xl flex items-center justify-center text-therapy-navy">
            [Feature Illustration]
          </div>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <div className="bg-therapy-cream-pink py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-therapy-navy">
                Comprehensive Features for Modern Therapy
              </h1>
              <p className="text-xl text-therapy-deep-purple">
                MindfulSession provides everything you need to manage therapy sessions effectively,
                from secure recording to AI-powered insights.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <FeatureSection
            title="Secure Session Recording & Storage"
            description="Record therapy sessions directly or upload existing files with complete peace of mind about security and privacy."
            features={[
              "End-to-end encrypted audio and video recording",
              "Direct integration with Google Drive for secure storage",
              "Automated organization with patient-specific folders",
              "Fine-grained access controls for patient privacy",
              "Support for multiple file formats and quality settings"
            ]}
            imageSide="right"
          />
          
          <FeatureSection
            title="AI-Powered Transcription & Analysis"
            description="Save time and gain insights with our advanced AI tools that transcribe and analyze session content."
            features={[
              "Accurate speech-to-text transcription using ElevenLabs API",
              "Emotion detection to track patient sentiment over time",
              "Key information extraction for important events and symptoms",
              "Topic modeling to identify recurring themes in therapy",
              "Progress tracking based on emotional indicators"
            ]}
            imageSide="left"
          />
          
          <FeatureSection
            title="Therapist Workflow Enhancement"
            description="Streamline your practice with tools designed specifically for therapy professionals."
            features={[
              "Comprehensive session notes with formatting options",
              "Session tagging and categorization for easy reference",
              "Calendar integration for scheduling and reminders",
              "Custom template creation for structured session documentation",
              "Quick access to patient history and previous sessions"
            ]}
            imageSide="right"
          />
          
          <FeatureSection
            title="Patient Portal & Engagement"
            description="Provide patients with secure access to their therapy resources and foster engagement between sessions."
            features={[
              "Secure patient-specific login and access controls",
              "Email notifications when new sessions are available",
              "Mobile-responsive design for access on any device",
              "Optional patient journaling features between sessions",
              "Progress visualization and therapy journey tracking"
            ]}
            imageSide="left"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
