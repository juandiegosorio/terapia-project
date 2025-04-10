
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-therapy-navy">Acerca de terapIA</h1>
          
          <div className="space-y-6 text-therapy-deep-purple">
            <p>
              terapIA fue fundada por un equipo de terapeutas y expertos en tecnología que reconocieron la necesidad de una 
              plataforma segura e inteligente que pudiera mejorar el proceso terapéutico mientras mantenía los más altos 
              estándares de privacidad y confidencialidad.
            </p>
            
            <p>
              Nuestra misión es proporcionar a los terapeutas herramientas poderosas que agilicen las tareas administrativas, 
              mejoren la gestión de sesiones y proporcionen valiosos insights, permitiéndoles centrarse más en lo que más 
              importa: el bienestar de sus pacientes.
            </p>
            
            <p>
              Entendemos la confianza sagrada entre terapeuta y paciente. Por eso, terapIA ha sido diseñada con la 
              seguridad y privacidad como principios fundamentales, no como reflexiones posteriores. Al aprovechar la 
              infraestructura de seguridad de Google Drive e implementar estrictos controles de acceso, garantizamos 
              que el contenido terapéutico sensible permanezca protegido.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-therapy-navy">Nuestros Valores</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-therapy-cream-pink p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-therapy-navy">Privacidad Primero</h3>
                <p>Creemos que las conversaciones terapéuticas merecen el más alto nivel de protección de privacidad.</p>
              </div>
              
              <div className="bg-therapy-cream-pink p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-therapy-navy">Innovación con Propósito</h3>
                <p>Desarrollamos tecnología que sirve a objetivos terapéuticos significativos, no solo por el bien de la innovación.</p>
              </div>
              
              <div className="bg-therapy-cream-pink p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-therapy-navy">Empoderamiento</h3>
                <p>Empoderamos a los terapeutas con herramientas que mejoran su práctica y a los pacientes con acceso transparente a su viaje terapéutico.</p>
              </div>
              
              <div className="bg-therapy-cream-pink p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-therapy-navy">IA Ética</h3>
                <p>Creemos que la IA debe aumentar la conexión humana en la terapia, no reemplazarla, y debe implementarse de manera responsable.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
