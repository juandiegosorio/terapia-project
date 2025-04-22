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
    <footer className="bg-therapy-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-semibold mb-4">JOY</h2>
            <p className="text-therapy-teal mb-4">
              Gestión segura de sesiones de terapia impulsada por IA para prácticas modernas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-therapy-teal hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-therapy-teal hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-therapy-teal hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-therapy-teal hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-therapy-teal hover:text-white transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/features" className="text-therapy-teal hover:text-white transition-colors">Características</Link>
              </li>
              <li>
                <Link to="/about" className="text-therapy-teal hover:text-white transition-colors">Nosotros</Link>
              </li>
              <li>
                <Link to="/contact" className="text-therapy-teal hover:text-white transition-colors">Contacto</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-therapy-teal hover:text-white transition-colors">Precios</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-therapy-teal hover:text-white transition-colors">Política de Privacidad</Link>
              </li>
              <li>
                <Link to="/terms" className="text-therapy-teal hover:text-white transition-colors">Términos de Servicio</Link>
              </li>
              <li>
                <Link to="/gdpr" className="text-therapy-teal hover:text-white transition-colors">Cumplimiento GDPR</Link>
              </li>
              <li>
                <Link to="/hipaa" className="text-therapy-teal hover:text-white transition-colors">Cumplimiento HIPAA</Link>
              </li>
              <li>
                <Link to="/security" className="text-therapy-teal hover:text-white transition-colors">Seguridad</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-therapy-green mt-0.5" />
                <span className="text-therapy-teal">soporte@terapia.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-therapy-green mt-0.5" />
                <span className="text-therapy-teal">+34 555 123 456</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-therapy-green mt-0.5" />
                <span className="text-therapy-teal">
                  Calle Terapia 123, Oficina 100<br />
                  Madrid, España 28001
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-therapy-teal mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-therapy-teal">
            &copy; {currentYear} JOY. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link to="/privacy" className="text-therapy-teal hover:text-white text-sm transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-therapy-teal hover:text-white text-sm transition-colors">
                  Términos
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-therapy-teal hover:text-white text-sm transition-colors">
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
