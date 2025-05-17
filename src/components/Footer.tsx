
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center mr-2">
                <span className="text-white font-bold">AI</span>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Startup Generator
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Unlock the future of AI startup ideas with our powerful generator.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-white transition-colors">About</Link></li>
              <li><Link to="/generator" className="text-muted-foreground hover:text-white transition-colors">Generator</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-muted-foreground hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} AI Startup Generator. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2 font-mono">
            Powered by AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
