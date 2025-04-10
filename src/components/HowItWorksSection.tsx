
import { CheckCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  {
    number: "01",
    title: "Grabar o Subir",
    description: "Graba sesiones de terapia directamente o sube archivos existentes de forma segura a la plataforma."
  },
  {
    number: "02",
    title: "Procesamiento Automático",
    description: "Nuestro sistema transcribe audio a texto y ejecuta análisis de IA para detectar emociones y extraer información clave."
  },
  {
    number: "03",
    title: "Añadir Notas",
    description: "Los terapeutas pueden añadir notas personales y observaciones a cada sesión para una atención integral."
  },
  {
    number: "04",
    title: "Almacenamiento Seguro",
    description: "Todos los datos de la sesión se almacenan de forma segura en tu Google Drive con controles de acceso adecuados."
  },
  {
    number: "05",
    title: "Acceso del Paciente",
    description: "Los pacientes reciben notificaciones y pueden acceder de forma segura solo a sus propias sesiones."
  }
];

const benefits = [
  "Experiencia mejorada del paciente con acceso transparente a las sesiones",
  "Ahorro de tiempo a través de transcripción y análisis automáticos",
  "Mejores insights terapéuticos con detección de emociones",
  "Almacenamiento seguro de datos integrado con Google Drive",
  "Flujo de trabajo optimizado para gestión de pacientes",
  "Mejor continuidad de la atención entre sesiones"
];

const HowItWorksSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 bg-therapy-cream-pink" id="how-it-works">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-therapy-dark-blue sm:text-4xl">
            Cómo Funciona terapIA
          </h2>
          <p className="mt-4 text-lg text-therapy-deep-purple max-w-3xl mx-auto">
            Nuestro flujo de trabajo optimizado facilita la gestión de sesiones de terapia
            manteniendo los más altos estándares de privacidad y seguridad.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - hide on mobile */}
          {!isMobile && (
            <div className="absolute left-1/2 h-full w-0.5 bg-therapy-teal/30 transform -translate-x-1/2"></div>
          )}
          
          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {isMobile ? (
                  // Mobile layout
                  <div className="flex flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-therapy-teal text-white flex items-center justify-center font-bold z-10 mr-3">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-therapy-navy">{step.title}</h3>
                    </div>
                    <p className="text-therapy-deep-purple pl-11">{step.description}</p>
                  </div>
                ) : (
                  // Desktop layout
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
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-therapy-dark-blue mb-8">
            Beneficios de Usar terapIA
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
