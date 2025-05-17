import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/70 border-b border-white/5 py-3 backdrop-blur-xl shadow-sm' : 'py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-3 backdrop-blur-md transition-all duration-300 group-hover:border-primary/30 group-hover:bg-white/10">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <span className="text-xl font-medium subtle-text-gradient">
            IdeaGenesis
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-2 frost-panel p-1.5 rounded-full">
            <Link 
              to="/" 
              className={`px-5 py-2 rounded-full transition-all duration-200 text-sm ${isActive('/') ? 'bg-white/10 text-white shadow-sm' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-5 py-2 rounded-full transition-all duration-200 text-sm ${isActive('/about') ? 'bg-white/10 text-white shadow-sm' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`px-5 py-2 rounded-full transition-all duration-200 text-sm ${isActive('/contact') ? 'bg-white/10 text-white shadow-sm' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
            >
              Contact
            </Link>
          </div>
          
          <Link to="/ideas" className="glass-button rounded-full px-5 py-2.5 text-sm font-medium flex items-center">
            <span className="mr-2">Browse Ideas</span>
            <div className="h-6 w-6 rounded-full glass-morphism flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></div>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:bg-white/5 rounded-full"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background/80 backdrop-blur-xl animate-fade-in border-b border-white/5">
          <div className="container mx-auto px-6 py-5 flex flex-col space-y-3">
            <Link 
              to="/" 
              className={`transition-colors px-5 py-3 rounded-md ${isActive('/') ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors px-5 py-3 rounded-md ${isActive('/about') ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors px-5 py-3 rounded-md ${isActive('/contact') ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/ideas" 
              className="glass-button rounded-full px-5 py-2.5 text-sm font-medium flex items-center justify-center mt-3 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="mr-2">Browse Ideas</span>
              <div className="h-6 w-6 rounded-full glass-morphism flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
