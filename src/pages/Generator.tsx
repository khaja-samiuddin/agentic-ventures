
import React from 'react';
import PageLayout from '@/components/PageLayout';
import IdeaCard, { IdeaType } from '@/components/IdeaCard';
import { Button } from '@/components/ui/button';

const Generator = () => {
  // Sample data for demonstration
  const ideas: IdeaType[] = [
    {
      id: 1,
      title: "AI Medical Diagnostics",
      description: "A platform using machine learning to analyze medical images and assist doctors in early disease detection.",
      category: "Healthcare",
      status: "passed",
      icon: "brain"
    },
    {
      id: 2,
      title: "Smart Energy Grid Optimizer",
      description: "AI system that optimizes energy distribution in power grids to reduce waste and lower costs.",
      category: "Energy",
      status: "passed",
      icon: "bot"
    },
    {
      id: 3,
      title: "Personalized Education AI",
      description: "Adaptive learning system that customizes educational content based on individual student performance.",
      category: "Education",
      status: "failed",
      icon: "rocket"
    },
    {
      id: 4,
      title: "Autonomous Retail Assistant",
      description: "AI-powered shopping assistant that helps customers find products and provides personalized recommendations.",
      category: "Retail",
      status: "passed",
      icon: "star"
    },
    {
      id: 5,
      title: "Predictive Agriculture System",
      description: "Platform that uses AI to predict crop yields, pest outbreaks, and optimize farming practices.",
      category: "Agriculture",
      status: "passed",
      icon: "brain"
    },
    {
      id: 6,
      title: "AI Content Creation Suite",
      description: "Tools that generate high-quality written content, images, and videos for marketing and content creation.",
      category: "Marketing",
      status: "failed",
      icon: "bot"
    },
    {
      id: 7,
      title: "Smart Supply Chain Manager",
      description: "AI system that optimizes logistics, inventory, and distribution to reduce costs and improve efficiency.",
      category: "Logistics",
      status: "passed",
      icon: "rocket"
    },
    {
      id: 8,
      title: "Virtual Mental Health Coach",
      description: "AI-powered platform providing personalized mental health support and therapy assistance.",
      category: "Healthcare",
      status: "passed",
      icon: "star"
    }
  ];

  return (
    <PageLayout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
              <span className="text-gradient">
                AI Startup Ideas Generator
              </span>
            </h1>
            <p className="text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Browse through our AI-generated startup ideas or generate new ones tailored to your interests.
            </p>
            <Button className="btn-gradient mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Generate New Ideas
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ideas.map((idea) => (
              <div key={idea.id} className="animate-scale-in">
                <IdeaCard idea={idea} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Generator;
