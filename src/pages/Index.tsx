
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import PageLayout from '@/components/PageLayout';
import { Brain, Rocket, Bot } from 'lucide-react';

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              <span className="text-gradient">
                Unlock the Future of AI Startup Ideas
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Generate innovative, market-ready AI startup concepts using our advanced idea generator powered by cutting-edge artificial intelligence.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/generator">
                <Button className="btn-gradient text-lg px-8 py-6">
                  Generate Ideas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">How It Works</h2>
            <p className="text-gray-300">
              Discover unique, actionable AI startup ideas based on the latest trends, deep research, and innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center card-hover">
              <div className="mx-auto w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4">
                <Brain size={32} className="text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">AI-Powered</h3>
              <p className="text-gray-300">
                Our advanced AI analyzes market trends, funding patterns, and technological breakthroughs to generate viable startup ideas.
              </p>
            </div>
            
            <div className="glass-card p-8 text-center card-hover">
              <div className="mx-auto w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <Bot size={32} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Smart Generation</h3>
              <p className="text-gray-300">
                Each idea is carefully crafted to address real-world problems with innovative AI solutions and business models.
              </p>
            </div>
            
            <div className="glass-card p-8 text-center card-hover">
              <div className="mx-auto w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Rocket size={32} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Innovative Solutions</h3>
              <p className="text-gray-300">
                Get detailed insights, market analysis, and implementation strategies for each generated startup concept.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-panel rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gradient">
                Ready to Launch Your AI Startup?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Access our generator now and discover your next big AI venture.
              </p>
              <Link to="/generator">
                <Button className="btn-gradient text-lg px-8 py-6">
                  Start Generating
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
