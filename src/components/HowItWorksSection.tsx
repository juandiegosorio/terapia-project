
import { CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Record or Upload",
    description: "Record therapy sessions directly or upload existing files securely to the platform."
  },
  {
    number: "02",
    title: "Automatic Processing",
    description: "Our system transcribes audio to text and runs AI analysis to detect emotions and extract key information."
  },
  {
    number: "03",
    title: "Add Notes",
    description: "Therapists can add personal notes and observations to each session for comprehensive care."
  },
  {
    number: "04",
    title: "Secure Storage",
    description: "All session data is securely stored in your Google Drive with proper access controls."
  },
  {
    number: "05",
    title: "Patient Access",
    description: "Patients receive notifications and can securely access only their own sessions."
  }
];

const benefits = [
  "Enhanced patient experience with transparent session access",
  "Time savings through automatic transcription and analysis",
  "Improved therapeutic insights with emotion detection",
  "Secure data storage integrated with Google Drive",
  "Streamlined patient management workflow",
  "Better continuity of care between sessions"
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-therapy-cream-pink" id="how-it-works">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-therapy-dark-blue sm:text-4xl">
            How MindfulSession Works
          </h2>
          <p className="mt-4 text-lg text-therapy-deep-purple max-w-3xl mx-auto">
            Our streamlined workflow makes it easy to manage therapy sessions 
            while maintaining the highest standards of privacy and security.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-therapy-teal/30 transform -translate-x-1/2"></div>
          
          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row items-start md:items-center">
                  <div className="flex-1 md:text-right md:pr-8 pb-4 md:pb-0 order-2 md:order-1">
                    {index % 2 === 0 ? (
                      <div className="md:ml-auto">
                        <h3 className="text-xl font-bold text-therapy-navy">{step.title}</h3>
                        <p className="mt-2 text-therapy-deep-purple">{step.description}</p>
                      </div>
                    ) : null}
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-therapy-teal text-white flex items-center justify-center font-bold z-10">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="flex-1 md:pl-8 pl-12 order-1 md:order-2">
                    {index % 2 === 1 ? (
                      <div>
                        <h3 className="text-xl font-bold text-therapy-navy">{step.title}</h3>
                        <p className="mt-2 text-therapy-deep-purple">{step.description}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-therapy-dark-blue mb-8">
            Benefits of Using MindfulSession
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-therapy-gold flex-shrink-0 mt-0.5" />
                <p className="text-therapy-deep-purple">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
