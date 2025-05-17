import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Brain, Rocket, Bot, Lightbulb, Users, Globe, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <PageLayout>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 particle-background z-0"></div>
        <div className="blur-dot h-[600px] w-[600px] -top-20 -left-40"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center justify-center mb-8 glass-morphism px-5 py-2 rounded-full text-xs text-white/70">
              <Sparkles size={12} className="text-primary mr-2.5" />
              <span className="tracking-wider">OUR STORY</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-medium mb-8 leading-tight animate-fade-in">
              About <span className="text-gradient font-semibold">IdeaGenesis</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in text-balance leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Explore our platform dedicated to showcasing innovative AI startup concepts that address emerging market opportunities.
            </p>
          </div>
          
          {/* Mission and Vision */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
            <div className="space-y-6">
              <div className="h-12 w-12 rounded-full frost-panel flex items-center justify-center mb-6">
                <Lightbulb className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-3xl font-medium mb-6">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We're dedicated to showcasing the most promising AI-driven startup opportunities by curating innovative concepts that address real market needs. Our platform connects entrepreneurs with vetted, well-researched business ideas.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Each concept in our collection has been carefully analyzed against market trends, funding patterns, technological feasibility, and consumer demand to showcase viable business opportunities with genuine potential.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="h-12 w-12 rounded-full frost-panel flex items-center justify-center mb-6">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-3xl font-medium mb-6">Our Approach</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our collection goes beyond simple business suggestions. Each idea in our library undergoes comprehensive evaluation against key metrics including market opportunity, technical feasibility, innovation potential, and funding attractiveness.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We provide in-depth analysis and implementation insights for each concept, giving entrepreneurs not just what to build, but how to build it and who might be interested in using it.
              </p>
            </div>
          </div>
          
          {/* Technology Section */}
          <div className="max-w-6xl mx-auto frost-panel rounded-3xl p-16 mb-32 border border-white/5">
            <h2 className="text-3xl font-medium mb-16 text-center">Our Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="mx-auto w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-8 group">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm">
                    <Brain size={28} className="text-blue-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-medium mb-4">Neural Networks</h3>
                <p className="text-muted-foreground text-balance leading-relaxed">
                  We utilize advanced neural networks trained on vast datasets of successful startups and market trends to identify promising opportunities.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-8 group">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm">
                    <Bot size={28} className="text-indigo-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-medium mb-4">Language Processing</h3>
                <p className="text-muted-foreground text-balance leading-relaxed">
                  Sophisticated natural language processing enables our platform to understand market needs and articulate coherent business concepts.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-8 group">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-violet-500/20 to-violet-600/20 backdrop-blur-sm">
                    <Rocket size={28} className="text-violet-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-medium mb-4">Predictive Analytics</h3>
                <p className="text-muted-foreground text-balance leading-relaxed">
                  Our predictive models assess market potential and forecast growth trajectories for each business concept in our collection.
                </p>
              </div>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="max-w-4xl mx-auto mb-24">
            <div className="flex items-center justify-center mb-8">
              <div className="h-12 w-12 rounded-full frost-panel flex items-center justify-center">
                <Users className="h-5 w-5 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-medium mb-8 text-center">Our Team</h2>
            <p className="text-muted-foreground text-xl mb-8 text-center text-balance leading-relaxed">
              We're a diverse team of AI researchers, entrepreneurs, and business strategists passionate about fostering innovation in the technology startup ecosystem.
            </p>
            <p className="text-muted-foreground text-xl text-center text-balance leading-relaxed">
              With backgrounds spanning machine learning, venture capital, and successful startup exits, our experts bring a wealth of experience to the curation and analysis of business concepts.
            </p>
          </div>
          
          {/* CTA Section */}
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-medium mb-8">Ready to explore our idea collection?</h3>
            <Link to="/ideas">
              <Button className="glass-button rounded-full text-base px-8 py-6 font-medium group">
                <span className="mr-3">Browse Ideas</span>
                <div className="h-8 w-8 rounded-full glass-morphism flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4 text-white" />
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
