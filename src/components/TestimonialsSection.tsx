
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    content: "MindfulSession has transformed my practice. The AI insights help me identify patterns I might have missed, and my patients appreciate having access to their session recordings.",
    author: "Dr. Sarah Johnson",
    title: "Clinical Psychologist",
    image: "/placeholder.svg"
  },
  {
    content: "As a therapist with a busy practice, the automatic transcription feature alone has saved me hours each week. The secure Google Drive integration gives me peace of mind about data security.",
    author: "Dr. Michael Chen",
    title: "Cognitive Behavioral Therapist",
    image: "/placeholder.svg"
  },
  {
    content: "My patients love getting notifications when new sessions are available. The emotion analysis has been surprisingly accurate and helps guide my approach to subsequent sessions.",
    author: "Emily Rodriguez, LMFT",
    title: "Family Therapist",
    image: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-therapy-dark-blue via-therapy-navy to-therapy-purple text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Therapists
          </h2>
          <p className="mt-4 text-lg opacity-90 max-w-3xl mx-auto">
            See what professionals are saying about MindfulSession
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-colors duration-300">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 opacity-50 mb-4" />
                <p className="mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden bg-therapy-cyan/30 flex items-center justify-center mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="opacity-75 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
