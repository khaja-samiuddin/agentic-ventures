import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="frost-panel border-t border-white/5 py-16 mt-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-3 backdrop-blur-md">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xl font-medium subtle-text-gradient">
                IdeaGenesis
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs text-balance leading-relaxed">
              Our AI platform analyzes market trends to generate innovative startup concepts with detailed business models.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-sm text-white/80 mb-6 modern-border pb-3">Navigation</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-white transition-all duration-200 text-sm flex items-center">
                  <div className="h-0.5 w-3 bg-primary/30 rounded-full mr-3"></div>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-white transition-all duration-200 text-sm flex items-center">
                  <div className="h-0.5 w-3 bg-primary/30 rounded-full mr-3"></div>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-white transition-all duration-200 text-sm flex items-center">
                  <div className="h-0.5 w-3 bg-primary/30 rounded-full mr-3"></div>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/ideas" className="text-muted-foreground hover:text-white transition-all duration-200 text-sm flex items-center">
                  <div className="h-0.5 w-3 bg-primary/30 rounded-full mr-3"></div>
                  Browse Ideas
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm text-white/80 mb-6 modern-border pb-3">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-white transition-all duration-200 text-sm flex items-center">
                  <div className="h-0.5 w-3 bg-primary/30 rounded-full mr-3"></div>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-white transition-all duration-200 text-sm flex items-center">
                  <div className="h-0.5 w-3 bg-primary/30 rounded-full mr-3"></div>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm text-white/80 mb-6 modern-border pb-3">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass-morphism rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/20 transition-all duration-300">
                <Twitter size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass-morphism rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/20 transition-all duration-300">
                <Linkedin size={16} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass-morphism rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/20 transition-all duration-300">
                <Github size={16} />
              </a>
              <a href="mailto:hello@ideagenesis.ai" className="w-10 h-10 glass-morphism rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/20 transition-all duration-300">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} IdeaGenesis AI. All rights reserved.
          </p>
          <div className="mt-6 md:mt-0 flex items-center glass-morphism px-4 py-2 rounded-full">
            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-subtle mr-2.5"></div>
            <p className="text-xs text-muted-foreground">
              <span className="text-primary">AI</span>-Powered Innovation Platform
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
