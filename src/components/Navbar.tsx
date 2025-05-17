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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background border-b border-neutral-200 py-3 shadow-sm' : 'py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <div className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center mr-3">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <span className="text-xl font-medium text-foreground">
            Agentic Ventures
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-2">
            <Link 
              to="/" 
              className={`px-5 py-2 rounded-md transition-all duration-200 text-sm ${isActive('/') ? 'bg-neutral-100 text-foreground font-medium' : 'text-neutral-600 hover:text-foreground hover:bg-neutral-50'}`}
            >
              Home
            </Link>
          </div>
          
          <Link to="/ideas">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-md px-5 py-2 text-sm font-medium">
              Browse Ideas
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground hover:bg-neutral-100 rounded-md"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background animate-fade-in border-b border-neutral-200">
          <div className="container mx-auto px-6 py-5 flex flex-col space-y-3">
            <Link 
              to="/" 
              className={`transition-colors px-5 py-3 rounded-md ${isActive('/') ? 'bg-neutral-100 text-foreground' : 'text-neutral-600 hover:text-foreground hover:bg-neutral-50'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/ideas" 
              className="bg-primary hover:bg-primary/90 text-white rounded-md px-5 py-2.5 text-sm font-medium flex items-center justify-center mt-3 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Browse Ideas
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
