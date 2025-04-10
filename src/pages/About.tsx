
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-therapy-navy">About MindfulSession</h1>
          
          <div className="space-y-6 text-therapy-deep-purple">
            <p>
              MindfulSession was founded by a team of therapists and technology experts who recognized the need for a secure, 
              intelligent platform that could enhance the therapeutic process while maintaining the highest standards of privacy 
              and confidentiality.
            </p>
            
            <p>
              Our mission is to provide therapists with powerful tools that streamline administrative tasks, enhance session 
              management, and provide valuable insights, allowing them to focus more on what matters most - their patients' wellbeing.
            </p>
            
            <p>
              We understand the sacred trust between therapist and patient. That's why MindfulSession has been designed with 
              security and privacy as foundational principles, not afterthoughts. By leveraging the security infrastructure of 
              Google Drive and implementing strict access controls, we ensure that sensitive therapeutic content remains protected.
            </p>
            
            <h2 className="text-2xl font-bold mt-10 mb-4 text-therapy-navy">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-therapy-cream-pink p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-therapy-navy">Privacy First</h3>
                <p>We believe that therapeutic conversations deserve the highest level of privacy protection.</p>
              </div>
              
              <div className="bg-therapy-cream-pink p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-therapy-navy">Innovation with Purpose</h3>
                <p>We develop technology that serves meaningful therapeutic goals, not just for innovation's sake.</p>
              </div>
              
              <div className="bg-therapy-cream-pink p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-therapy-navy">Empowerment</h3>
                <p>We empower therapists with tools that enhance their practice and patients with transparent access to their therapeutic journey.</p>
              </div>
              
              <div className="bg-therapy-cream-pink p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-therapy-navy">Ethical AI</h3>
                <p>We believe AI should augment human connection in therapy, not replace it, and should be deployed responsibly.</p>
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
