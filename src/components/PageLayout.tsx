import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Ambient background effects */}
        <div className="absolute -top-60 -left-60 w-[500px] h-[500px] bg-indigo-500/5 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute top-1/4 right-1/3 w-[300px] h-[300px] bg-blue-500/5 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '12s', animationDelay: '1s' }}></div>
        <div className="absolute -bottom-60 -right-60 w-[500px] h-[500px] bg-violet-500/5 rounded-full filter blur-3xl opacity-15 animate-pulse" style={{ animationDuration: '15s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        
        {/* Noise texture */}
        <div className="absolute inset-0 noise-pattern"></div>
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
