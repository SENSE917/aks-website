import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link, useLocation } from "react-router-dom";
import logoSrc from "@/assets/FotoAKS.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <ImageWithFallback
              src={logoSrc}
              alt="Arda Karya Sinergy Logo"
              className="h-8 md:h-10 w-auto max-w-[160px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <Link 
              to="/" 
              className={`transition-colors text-sm tracking-wide uppercase ${
                isActive('/') ? 'text-[#3fbd9e]' : 'text-gray-600 hover:text-[#253c80]'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className={`transition-colors text-sm tracking-wide uppercase ${
                isActive('/blog') ? 'text-[#3fbd9e]' : 'text-gray-600 hover:text-[#253c80]'
              }`}
            >
              Articles
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors text-sm tracking-wide uppercase ${
                isActive('/services') ? 'text-[#3fbd9e]' : 'text-gray-600 hover:text-[#253c80]'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors text-sm tracking-wide uppercase ${
                isActive('/about') ? 'text-[#3fbd9e]' : 'text-gray-600 hover:text-[#253c80]'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors text-sm tracking-wide uppercase ${
                isActive('/contact') ? 'text-[#3fbd9e]' : 'text-gray-600 hover:text-[#253c80]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#253c80]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 flex flex-col gap-6">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className={`transition-colors text-sm tracking-wide uppercase ${
                isActive('/') ? 'text-[#3fbd9e]' : 'text-gray-600 hover:text-[#253c80]'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              onClick={() => setIsMenuOpen(false)}
              className={`transition-colors text-sm tracking-wide uppercase ${
                isActive('/blog') ? 'text-[#3fbd9e]' : 'text-gray-600 hover:text-[#253c80]'
              }`}
            >
              Articles
            </Link>
            <Link 
              to="/services" 
              onClick={() => setIsMenuOpen(false)}
              className={`transition-colors text-sm tracking-wide uppercase ${
                isActive('/services') ? 'text-[#3fbd9e]' : 'text-gray-600 hover:text-[#253c80]'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsMenuOpen(false)}
              className={`transition-colors text-sm tracking-wide uppercase ${
                isActive('/about') ? 'text-[#3fbd9e]' : 'text-gray-600 hover:text-[#253c80]'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className={`transition-colors text-sm tracking-wide uppercase ${
                isActive('/contact') ? 'text-[#3fbd9e]' : 'text-gray-600 hover:text-[#253c80]'
              }`}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}