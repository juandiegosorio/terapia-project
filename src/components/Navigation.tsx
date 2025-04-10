
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-semibold text-therapy-navy">MindfulSession</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-therapy-deep-purple hover:text-therapy-navy px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/features" className="text-therapy-deep-purple hover:text-therapy-navy px-3 py-2 rounded-md text-sm font-medium">
                Features
              </Link>
              <Link to="/about" className="text-therapy-deep-purple hover:text-therapy-navy px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link to="/contact" className="text-therapy-deep-purple hover:text-therapy-navy px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              <Button variant="outline" className="border-therapy-teal text-therapy-teal hover:bg-therapy-light-cream">
                Sign In
              </Button>
              <Button className="bg-therapy-teal hover:bg-therapy-cyan text-white">
                Sign Up
              </Button>
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
      <div className={cn(
        "md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b border-gray-200">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-therapy-deep-purple hover:text-therapy-navy hover:bg-therapy-light-cream">
            Home
          </Link>
          <Link to="/features" className="block px-3 py-2 rounded-md text-base font-medium text-therapy-deep-purple hover:text-therapy-navy hover:bg-therapy-light-cream">
            Features
          </Link>
          <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-therapy-deep-purple hover:text-therapy-navy hover:bg-therapy-light-cream">
            About
          </Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-therapy-deep-purple hover:text-therapy-navy hover:bg-therapy-light-cream">
            Contact
          </Link>
          <div className="flex flex-col space-y-2 pt-2">
            <Button variant="outline" className="border-therapy-teal text-therapy-teal hover:bg-therapy-light-cream w-full justify-center">
              Sign In
            </Button>
            <Button className="bg-therapy-teal hover:bg-therapy-cyan text-white w-full justify-center">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
