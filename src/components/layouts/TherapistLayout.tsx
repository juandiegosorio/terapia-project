import { useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { 
  Users, 
  FileText, 
  MessageSquare, 
  Search, 
  LogOut, 
  User as UserIcon
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

const TherapistLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    navigate("/");
  };

  const navLinks = [
    { 
      title: "Mis pacientes", 
      path: "/dashboard/terapeuta/pacientes", 
      icon: <Users className="h-5 w-5 mr-2" /> 
    },
    { 
      title: "Nueva Sesión", 
      path: "/dashboard/terapeuta/nueva-sesion", 
      icon: <FileText className="h-5 w-5 mr-2" /> 
    },
    { 
      title: "Consultar IA", 
      path: "/dashboard/terapeuta/consultar-ia", 
      icon: <MessageSquare className="h-5 w-5 mr-2" /> 
    },
    { 
      title: "Banco de ejercicios", 
      path: "/dashboard/terapeuta/banco-ejercicios", 
      icon: <Search className="h-5 w-5 mr-2" /> 
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-30 w-full bg-therapy-blue text-white">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-semibold text-white">
                JOY
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "flex items-center text-sm font-medium transition-colors hover:text-therapy-teal",
                    location.pathname === link.path || 
                    (link.path.includes("pacientes") && location.pathname === "/dashboard/terapeuta") 
                      ? "text-white" 
                      : "text-white/80"
                  )}
                >
                  {link.icon}
                  {link.title}
                </Link>
              ))}
            </nav>

            <div className="flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="outline-none">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" alt="Perfil" />
                      <AvatarFallback className="bg-therapy-yellow text-therapy-blue">TR</AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-therapy-green">
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard/terapeuta/perfil" className="flex items-center cursor-pointer">
                      <UserIcon className="mr-2 h-4 w-4" />
                      <span>Ver perfil</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-therapy-blue/30" />
                  <DropdownMenuItem onClick={handleLogout} className="flex items-center cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Cerrar Sesión</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-therapy-blue"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
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
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "flex items-center px-3 py-2 rounded-md text-base font-medium",
                  location.pathname === link.path 
                    ? "text-therapy-blue font-semibold" 
                    : "text-gray-600 hover:text-therapy-blue"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
                {link.title}
              </Link>
            ))}
            <Link
              to="/dashboard/terapeuta/perfil"
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-therapy-blue hover:text-therapy-purple hover:bg-therapy-yellow"
              onClick={() => setIsMenuOpen(false)}
            >
              <UserIcon className="h-5 w-5 mr-2" />
              Ver perfil
            </Link>
            <button
              onClick={handleLogout}
              className="flex w-full items-center px-3 py-2 rounded-md text-base font-medium text-therapy-blue hover:text-therapy-purple hover:bg-therapy-yellow"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Cerrar Sesión
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6 bg-therapy-teal/10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default TherapistLayout;
