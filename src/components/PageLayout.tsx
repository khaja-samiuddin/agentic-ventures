import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden">
      <Navbar />
      <main className="flex-1 pt-16 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
