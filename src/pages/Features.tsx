
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
            [Ilustración de Característica]
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
                Características Completas para Terapia Moderna
              </h1>
              <p className="text-xl text-therapy-deep-purple">
                terapIA proporciona todo lo que necesitas para gestionar sesiones de terapia de manera efectiva,
                desde grabación segura hasta análisis impulsados por IA.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <FeatureSection
            title="Grabación y Almacenamiento Seguro de Sesiones"
            description="Graba sesiones de terapia directamente o sube archivos existentes con total tranquilidad acerca de la seguridad y privacidad."
            features={[
              "Grabación de audio y video con encriptación de extremo a extremo",
              "Integración directa con Google Drive para almacenamiento seguro",
              "Organización automatizada con carpetas específicas para pacientes",
              "Controles de acceso detallados para la privacidad del paciente",
              "Soporte para múltiples formatos de archivo y ajustes de calidad"
            ]}
            imageSide="right"
          />
          
          <FeatureSection
            title="Transcripción y Análisis Impulsados por IA"
            description="Ahorra tiempo y obtén insights con nuestras herramientas avanzadas de IA que transcriben y analizan el contenido de las sesiones."
            features={[
              "Transcripción precisa de voz a texto usando la API de ElevenLabs",
              "Detección de emociones para seguir el sentimiento del paciente a lo largo del tiempo",
              "Extracción de información clave para eventos importantes y síntomas",
              "Modelado de temas para identificar patrones recurrentes en la terapia",
              "Seguimiento del progreso basado en indicadores emocionales"
            ]}
            imageSide="left"
          />
          
          <FeatureSection
            title="Mejora del Flujo de Trabajo del Terapeuta"
            description="Optimiza tu práctica con herramientas diseñadas específicamente para profesionales de la terapia."
            features={[
              "Notas de sesión completas con opciones de formato",
              "Etiquetado y categorización de sesiones para fácil referencia",
              "Integración de calendario para programación y recordatorios",
              "Creación de plantillas personalizadas para documentación estructurada de sesiones",
              "Acceso rápido al historial del paciente y sesiones anteriores"
            ]}
            imageSide="right"
          />
          
          <FeatureSection
            title="Portal y Participación del Paciente"
            description="Proporciona a los pacientes acceso seguro a sus recursos de terapia y fomenta la participación entre sesiones."
            features={[
              "Inicio de sesión y controles de acceso específicos para el paciente",
              "Notificaciones por correo electrónico cuando hay nuevas sesiones disponibles",
              "Diseño adaptable para acceso desde cualquier dispositivo",
              "Funciones opcionales de diario para el paciente entre sesiones",
              "Visualización del progreso y seguimiento del viaje terapéutico"
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
