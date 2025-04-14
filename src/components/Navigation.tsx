import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LoginModal } from "./auth/LoginModal";
import { RegisterModal } from "./auth/RegisterModal";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [user, setUser] = useState<{ email: string; role: string } | null>(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = (email: string, password: string, role: string) => {
    setUser({ email, role });
    setIsLoginOpen(false);
    navigate(`/dashboard/${role}`);
  };

  const handleRegister = (email: string, password: string, role: string) => {
    setUser({ email, role });
    setIsRegisterOpen(false);
    navigate(`/dashboard/${role}`);
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-semibold text-therapy-navy">
                terapIA
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="text-therapy-deep-purple hover:text-therapy-navy px-3 py-2 rounded-md text-sm font-medium"
              >
                Inicio
              </Link>
              <Link
                to="/features"
                className="text-therapy-deep-purple hover:text-therapy-navy px-3 py-2 rounded-md text-sm font-medium"
              >
                Características
              </Link>
              <Link
                to="/about"
                className="text-therapy-deep-purple hover:text-therapy-navy px-3 py-2 rounded-md text-sm font-medium"
              >
                Nosotros
              </Link>
              <Link
                to="/contact"
                className="text-therapy-deep-purple hover:text-therapy-navy px-3 py-2 rounded-md text-sm font-medium"
              >
                Contacto
              </Link>
              
              {user ? (
                <>
                  <Button
                    variant="outline"
                    className="border-therapy-teal text-therapy-teal hover:bg-therapy-light-cream"
                    onClick={handleLogout}
                  >
                    Cerrar Sesión
                  </Button>
                  <Link
                    to={`/dashboard/${user.role}`}
                    className="bg-therapy-teal hover:bg-therapy-cyan text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Dashboard
                  </Link>
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    className="border-therapy-teal text-therapy-teal hover:bg-therapy-light-cream"
                    onClick={() => setIsLoginOpen(true)}
                  >
                    Iniciar Sesión
                  </Button>
                  <Button
                    className="bg-therapy-teal hover:bg-therapy-cyan text-white"
                    onClick={() => setIsRegisterOpen(true)}
                  >
                    Registrarse
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-therapy-deep-purple hover:text-therapy-navy focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b border-gray-200">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-therapy-deep-purple hover:text-therapy-navy hover:bg-therapy-light-cream">
            Inicio
          </Link>
          <Link to="/features" className="block px-3 py-2 rounded-md text-base font-medium text-therapy-deep-purple hover:text-therapy-navy hover:bg-therapy-light-cream">
            Características
          </Link>
          <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-therapy-deep-purple hover:text-therapy-navy hover:bg-therapy-light-cream">
            Nosotros
          </Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-therapy-deep-purple hover:text-therapy-navy hover:bg-therapy-light-cream">
            Contacto
          </Link>
          {user ? (
            <>
              <Button
                variant="outline"
                className="border-therapy-teal text-therapy-teal hover:bg-therapy-light-cream w-full justify-center"
                onClick={handleLogout}
              >
                Cerrar Sesión
              </Button>
              <Link
                to={`/dashboard/${user.role}`}
                className="block text-center bg-therapy-teal hover:bg-therapy-cyan text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </Link>
            </>
          ) : (
            <div className="flex flex-col space-y-2 pt-2">
              <Button
                variant="outline"
                className="border-therapy-teal text-therapy-teal hover:bg-therapy-light-cream w-full justify-center"
                onClick={() => setIsLoginOpen(true)}
              >
                Iniciar Sesión
              </Button>
              <Button
                className="bg-therapy-teal hover:bg-therapy-cyan text-white w-full justify-center"
                onClick={() => setIsRegisterOpen(true)}
              >
                Registrarse
              </Button>
            </div>
          )}
        </div>
      </div>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onRegister={handleRegister}
      />
    </nav>
  );
};

export default Navigation;
