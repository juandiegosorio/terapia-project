
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-therapy-navy text-center">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-therapy-navy">Get in Touch</h2>
              <p className="mb-8 text-therapy-deep-purple">
                We'd love to hear from you. Whether you have questions about our platform, need assistance,
                or want to provide feedback, our team is here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 text-therapy-teal" />
                  <div>
                    <h3 className="font-semibold text-therapy-navy">Email</h3>
                    <p className="text-therapy-deep-purple">support@mindfulsession.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 text-therapy-teal" />
                  <div>
                    <h3 className="font-semibold text-therapy-navy">Phone</h3>
                    <p className="text-therapy-deep-purple">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 text-therapy-teal" />
                  <div>
                    <h3 className="font-semibold text-therapy-navy">Office</h3>
                    <p className="text-therapy-deep-purple">
                      123 Therapy Street, Suite 100<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-therapy-cream-pink p-8 rounded-xl">
              {isSubmitted ? (
                <div className="text-center py-10">
                  <h3 className="text-2xl font-bold text-therapy-navy mb-3">Thank You!</h3>
                  <p className="text-therapy-deep-purple">
                    Your message has been received. We'll get back to you as soon as possible.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)} 
                    className="mt-6 bg-therapy-teal hover:bg-therapy-cyan text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-therapy-navy">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 bg-white border-therapy-teal focus:ring-therapy-cyan"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-therapy-navy">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 bg-white border-therapy-teal focus:ring-therapy-cyan"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-therapy-navy">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1 bg-white border-therapy-teal focus:ring-therapy-cyan"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-therapy-navy">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full rounded-md border border-therapy-teal bg-white px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-therapy-cyan"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-therapy-teal hover:bg-therapy-cyan text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
