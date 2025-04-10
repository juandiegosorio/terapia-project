
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-therapy-neutral rounded-3xl p-8 md:p-12 lg:p-16 text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to enhance your therapy practice?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Start streamlining your session management today with MindfulSession.
              Sign up now for a 14-day free trial, no credit card required.
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:flex md:flex-shrink-0 md:items-center">
            <Button className="w-full md:w-auto bg-therapy-deep-blue hover:bg-therapy-calm-blue px-8 py-6 text-lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
