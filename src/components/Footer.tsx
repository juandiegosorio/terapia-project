
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-therapy-dark-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-semibold mb-4">MindfulSession</h2>
            <p className="text-therapy-light-pink mb-4">
              Secure, AI-powered therapy session management for modern practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-therapy-light-pink hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-therapy-light-pink hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-therapy-light-pink hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-therapy-light-pink hover:text-white transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-therapy-light-pink hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/features" className="text-therapy-light-pink hover:text-white transition">Features</Link>
              </li>
              <li>
                <Link to="/about" className="text-therapy-light-pink hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-therapy-light-pink hover:text-white transition">Contact</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-therapy-light-pink hover:text-white transition">Pricing</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-therapy-light-pink hover:text-white transition">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-therapy-light-pink hover:text-white transition">Terms of Service</Link>
              </li>
              <li>
                <Link to="/gdpr" className="text-therapy-light-pink hover:text-white transition">GDPR Compliance</Link>
              </li>
              <li>
                <Link to="/hipaa" className="text-therapy-light-pink hover:text-white transition">HIPAA Compliance</Link>
              </li>
              <li>
                <Link to="/security" className="text-therapy-light-pink hover:text-white transition">Security</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-therapy-cyan mt-0.5" />
                <span className="text-therapy-light-pink">support@mindfulsession.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-therapy-cyan mt-0.5" />
                <span className="text-therapy-light-pink">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-therapy-cyan mt-0.5" />
                <span className="text-therapy-light-pink">
                  123 Therapy Street, Suite 100<br />
                  San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-therapy-navy mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-therapy-light-pink">
            &copy; {currentYear} MindfulSession. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link to="/privacy" className="text-therapy-light-pink hover:text-white text-sm transition">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-therapy-light-pink hover:text-white text-sm transition">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-therapy-light-pink hover:text-white text-sm transition">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
