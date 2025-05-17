
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="h-10 w-10 rounded-full futuristic-gradient flex items-center justify-center mr-2">
            <span className="text-white font-bold">AI</span>
          </div>
          <span className="text-xl font-bold text-gradient">
            Startup Generator
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="text-white/80 hover:text-white transition-colors">About</Link>
          <Link to="/generator" className="text-white/80 hover:text-white transition-colors">Generator</Link>
          <Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
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
              className="text-white/80 hover:text-white transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white/80 hover:text-white transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/generator" 
              className="text-white/80 hover:text-white transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Generator
            </Link>
            <Link 
              to="/contact" 
              className="text-white/80 hover:text-white transition-colors px-4 py-2"
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
