
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook, Instagram, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-panel py-12 mt-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full futuristic-gradient flex items-center justify-center mr-2">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient neon-glow">
                Startup Generator
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Discover the future of entrepreneurship with our AI-powered startup idea generator.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">About</Link></li>
              <li><Link to="/generator" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Generator</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} AI Startup Generator. All rights reserved.
          </p>
          <p className="text-xs text-indigo-400/70 mt-2 font-mono flex items-center justify-center">
            <span className="mr-2 animate-pulse-glow">●</span> Powered by Artificial Intelligence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
