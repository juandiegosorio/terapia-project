
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-therapy-light-blue py-16 sm:py-24">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-y-0 right-1/2 w-1/2 rounded-r-3xl bg-therapy-calm-blue blur-3xl" />
        <div className="absolute inset-y-0 left-1/2 w-1/2 rounded-l-3xl bg-therapy-tranquil-teal blur-3xl" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl animate-fade-in">
            Elevate your therapeutic practice with <span className="text-therapy-deep-blue">MindfulSession</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            A secure platform to store, manage, and analyze therapy sessions. 
            Enhance patient care with AI-driven insights and seamless session management.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button className="bg-therapy-deep-blue hover:bg-therapy-calm-blue px-8 py-6 text-lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-therapy-deep-blue text-therapy-deep-blue hover:bg-therapy-light-blue px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
