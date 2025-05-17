
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-indigo-600/10 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>
      <Navbar />
      <main className="flex-1 pt-16 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
