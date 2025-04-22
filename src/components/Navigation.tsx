import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LoginModal } from "./auth/LoginModal";
import { RegisterModal } from "./auth/RegisterModal";
import { toast } from "@/components/ui/use-toast";

export const Navigation = () => {
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
    
    if (role === "terapeuta") {
      navigate("/dashboard/terapeuta/pacientes");
    } else {
      navigate("/dashboard/paciente");
    }
  };

  const handleRegister = (email: string, password: string, role: string) => {
    setUser({ email, role });
    setIsRegisterOpen(false);
    
    if (role === "terapeuta") {
      navigate("/dashboard/terapeuta/pacientes");
    } else {
      navigate("/dashboard/paciente");
    }
    
    toast({
      title: "Registro exitoso",
      description: `Te has registrado como ${role}`,
    });
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/");
    
    toast({
      title: "Sesión cerrada",
      description: "Has cerrado sesión correctamente",
    });
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-therapy-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-semibold text-white">
                JOY
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="text-white hover:text-therapy-teal px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Inicio
              </Link>
              <Link
                to="/features"
                className="text-white hover:text-therapy-teal px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Características
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-therapy-teal px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Nosotros
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-therapy-teal px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contacto
              </Link>
              
              {user ? (
                <>
                  <Button
                    variant="outline"
                    className="border-therapy-teal text-therapy-teal hover:bg-therapy-teal hover:text-white"
                    onClick={handleLogout}
                  >
                    Cerrar Sesión
                  </Button>
                  <Link
                    to={user.role === "terapeuta" ? "/dashboard/terapeuta/pacientes" : "/dashboard/paciente"}
                    className="bg-therapy-purple hover:bg-therapy-orange text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Dashboard
                  </Link>
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    className="border-therapy-teal text-therapy-teal bg-white/10 hover:bg-therapy-teal hover:text-white transition-colors"
                    onClick={() => setIsLoginOpen(true)}
                  >
                    Iniciar Sesión
                  </Button>
                  <Button
                    className="bg-therapy-purple hover:bg-therapy-orange text-white"
                    onClick={() => setIsRegisterOpen(true)}
                  >
                    Registrarse
                  </Button>
                </>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-white hover:text-therapy-teal focus:outline-none transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-therapy-blue border-b border-therapy-teal">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-therapy-teal hover:bg-therapy-blue/80 transition-colors">
            Inicio
          </Link>
          <Link to="/features" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-therapy-teal hover:bg-therapy-blue/80 transition-colors">
            Características
          </Link>
          <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-therapy-teal hover:bg-therapy-blue/80 transition-colors">
            Nosotros
          </Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-therapy-teal hover:bg-therapy-blue/80 transition-colors">
            Contacto
          </Link>
          {user ? (
            <>
              <Button
                variant="outline"
                className="border-therapy-teal text-therapy-teal hover:bg-therapy-teal hover:text-white w-full justify-center transition-colors"
                onClick={handleLogout}
              >
                Cerrar Sesión
              </Button>
              <Link
                to={user.role === "terapeuta" ? "/dashboard/terapeuta/pacientes" : "/dashboard/paciente"}
                className="block text-center bg-therapy-purple hover:bg-therapy-orange text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Dashboard
              </Link>
            </>
          ) : (
            <div className="flex flex-col space-y-2 pt-2">
              <Button
                variant="outline"
                className="border-therapy-teal text-therapy-teal bg-white/10 hover:bg-therapy-teal hover:text-white transition-colors"
                onClick={() => setIsLoginOpen(true)}
              >
                Iniciar Sesión
              </Button>
              <Button
                className="bg-therapy-purple hover:bg-therapy-orange text-white w-full justify-center transition-colors"
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
