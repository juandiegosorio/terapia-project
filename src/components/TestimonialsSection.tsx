
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    content: "terapIA ha transformado mi práctica. Los análisis de IA me ayudan a identificar patrones que podría haber pasado por alto, y mis pacientes aprecian tener acceso a las grabaciones de sus sesiones.",
    author: "Dra. Sara Jiménez",
    title: "Psicóloga Clínica",
    image: "/placeholder.svg"
  },
  {
    content: "Como terapeuta con una práctica ocupada, la función de transcripción automática por sí sola me ha ahorrado horas cada semana. La integración segura con Google Drive me da tranquilidad sobre la seguridad de los datos.",
    author: "Dr. Miguel Chen",
    title: "Terapeuta Cognitivo Conductual",
    image: "/placeholder.svg"
  },
  {
    content: "A mis pacientes les encanta recibir notificaciones cuando hay nuevas sesiones disponibles. El análisis de emociones ha sido sorprendentemente preciso y ayuda a guiar mi enfoque en las sesiones subsiguientes.",
    author: "Elena Rodríguez, LMFT",
    title: "Terapeuta Familiar",
    image: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-therapy-blue via-therapy-teal to-therapy-purple text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Confiado por Terapeutas
          </h2>
          <p className="mt-4 text-lg opacity-90 max-w-3xl mx-auto">
            Mira lo que los profesionales están diciendo sobre terapIA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-br from-therapy-blue/80 to-therapy-purple/50 border-none text-white">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 opacity-50 mb-4" />
                <p className="mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden bg-therapy-teal/30 flex items-center justify-center mr-4">
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
