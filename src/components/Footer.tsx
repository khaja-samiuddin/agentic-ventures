import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 py-8 mt-0 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Agentic Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
