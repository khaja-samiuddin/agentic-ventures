import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import PageLayout from '@/components/PageLayout';
import { Brain, Sparkles, ArrowRight, Rocket, Bot } from 'lucide-react';
import IdeaCard from '@/components/IdeaCard';
import { IdeaType } from '@/components/IdeaCard';

// Sample idea data - in a real app, this would come from an API
const sampleIdeas: IdeaType[] = [
  {
    id: 1,
    title: "AI-Powered Health Monitoring Platform",
    description: "A platform that uses computer vision and machine learning to monitor patients' vital signs remotely, alerting healthcare providers of potential issues before they become emergencies.",
    category: "Healthcare",
    status: "passed",
    icon: "brain"
  },
  {
    id: 2,
    title: "Sustainable Urban Farming Network",
    description: "Vertical farming units connected by IoT sensors that optimize growth conditions while minimizing resource usage. The system uses AI to predict crop yields and adjust growing parameters.",
    category: "AgTech",
    status: "passed",
    icon: "rocket"
  },
  {
    id: 3,
    title: "AR Educational Platform for STEM",
    description: "An augmented reality platform that transforms abstract STEM concepts into interactive 3D visualizations, making complex subjects more accessible to students of all learning styles.",
    category: "Education",
    status: "passed",
    icon: "bot"
  }
];

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-32">
        <div className="absolute inset-0 z-0 grid-pattern opacity-25"></div>
        <div className="blur-dot h-[600px] w-[600px] -top-20 -left-20"></div>
        <div className="blur-dot h-[600px] w-[600px] bottom-20 -right-20"></div>
        
        <div className="container mx-auto px-6 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center mb-8 glass-morphism px-5 py-2 rounded-full text-xs text-white/70">
              <Sparkles size={12} className="text-primary mr-2.5" />
              <span className="tracking-wider">AI-POWERED STARTUP IDEAS</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-medium mb-8 leading-tight animate-fade-in">
              Discover <span className="text-gradient font-semibold">Innovative</span> AI Startup Concepts
            </h1>
            
            <p className="text-xl text-muted-foreground mb-14 animate-fade-in text-balance leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Browse our curated collection of AI-generated startup ideas, carefully crafted 
              to address emerging market opportunities and technology trends.
            </p>
            
            <Link to="/ideas" className="inline-block">
              <Button className="glass-button rounded-full text-base px-8 py-7 font-medium group">
                <span className="mr-3">Browse Ideas</span>
                <div className="h-8 w-8 rounded-full glass-morphism flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4 text-white" />
                </div>
              </Button>
            </Link>
          </div>
          
          {/* Featured Ideas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 mb-16">
            {sampleIdeas.map(idea => (
              <IdeaCard key={idea.id} idea={idea} />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/about">
              <Button variant="outline" className="border-white/10 hover:bg-white/5 text-white/80 hover:text-white rounded-full px-8 py-4 text-sm">
                Learn More About Our Process <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How Ideas Are Generated Section */}
      <section className="py-36 relative">
        <div className="absolute inset-0 particle-background z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <div className="inline-flex items-center justify-center mb-8 glass-morphism px-5 py-2 rounded-full text-xs text-white/70">
              <Bot size={12} className="text-primary mr-2.5" />
              <span className="tracking-wider">OUR PROCESS</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-medium mb-8">
              How We Create <span className="text-gradient font-semibold">Revolutionary</span> Ideas
            </h2>
            
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              Our AI engine analyzes trends, technologies, and market gaps to generate innovative startup concepts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="frost-panel p-10 hoverable-card rounded-2xl border-white/5">
              <div className="mx-auto w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-8 group">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm">
                  <Brain size={28} className="text-blue-400" />
                </div>
              </div>
              <h3 className="text-2xl font-medium mb-4 text-white text-center">Neural Analysis</h3>
              <p className="text-muted-foreground text-center text-balance leading-relaxed">
                Our advanced AI analyzes market trends, funding data, and technological breakthroughs to identify opportunities.
              </p>
            </div>
            
            <div className="frost-panel p-10 hoverable-card rounded-2xl border-white/5">
              <div className="mx-auto w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-8 group">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm">
                  <Bot size={28} className="text-indigo-400" />
                </div>
              </div>
              <h3 className="text-2xl font-medium mb-4 text-white text-center">Concept Generation</h3>
              <p className="text-muted-foreground text-center text-balance leading-relaxed">
                State-of-the-art language models craft detailed business concepts with scalable implementation strategies.
              </p>
            </div>
            
            <div className="frost-panel p-10 hoverable-card rounded-2xl border-white/5">
              <div className="mx-auto w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-8 group">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-violet-500/20 to-violet-600/20 backdrop-blur-sm">
                  <Rocket size={28} className="text-violet-400" />
                </div>
              </div>
              <h3 className="text-2xl font-medium mb-4 text-white text-center">Expert Validation</h3>
              <p className="text-muted-foreground text-center text-balance leading-relaxed">
                Our team of industry experts reviews and refines each concept to ensure viability in the market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-36 relative mb-16">
        <div className="container mx-auto px-6 z-10">
          <div className="max-w-4xl mx-auto frost-panel rounded-3xl p-12 md:p-16 relative overflow-hidden border-white/10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -ml-20 -mb-20"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center mb-8 glass-morphism px-5 py-2 rounded-full text-xs text-white/70">
                <Sparkles size={12} className="text-primary mr-2.5" />
                <span className="tracking-wider">EXPLORE OUR COLLECTION</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-medium mb-8">
                Find <span className="text-gradient font-semibold">Inspiration</span> in Our Idea Library
              </h2>
              
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance leading-relaxed">
                Browse our complete catalog of AI-generated concepts tailored to various 
                industries and technological domains.
              </p>
              
              <Link to="/ideas">
                <Button className="glass-button rounded-full px-10 py-7 text-base font-medium group">
                  <span className="mr-3">Browse All Ideas</span>
                  <div className="h-8 w-8 rounded-full glass-morphism flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
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
