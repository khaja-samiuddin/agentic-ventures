
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-3' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="h-10 w-10 rounded-full futuristic-gradient flex items-center justify-center mr-2">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gradient neon-glow">
            Startup Generator
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className={`transition-colors relative ${isActive('/') ? 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-indigo-500' : 'text-white/70 hover:text-white'}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`transition-colors relative ${isActive('/about') ? 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-indigo-500' : 'text-white/70 hover:text-white'}`}
          >
            About
          </Link>
          <Link 
            to="/generator" 
            className={`transition-colors relative ${isActive('/generator') ? 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-indigo-500' : 'text-white/70 hover:text-white'}`}
          >
            Generator
          </Link>
          <Link 
            to="/contact" 
            className={`transition-colors relative ${isActive('/contact') ? 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-indigo-500' : 'text-white/70 hover:text-white'}`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 glass-panel animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`transition-colors px-4 py-2 ${isActive('/') ? 'text-white bg-white/5 rounded-lg' : 'text-white/70 hover:text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors px-4 py-2 ${isActive('/about') ? 'text-white bg-white/5 rounded-lg' : 'text-white/70 hover:text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/generator" 
              className={`transition-colors px-4 py-2 ${isActive('/generator') ? 'text-white bg-white/5 rounded-lg' : 'text-white/70 hover:text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Generator
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors px-4 py-2 ${isActive('/contact') ? 'text-white bg-white/5 rounded-lg' : 'text-white/70 hover:text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
