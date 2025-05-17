import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import PageLayout from '@/components/PageLayout';
import { Brain, Sparkles, ArrowRight, Rocket, Bot, FileText, Github, Search, Scale, Lightbulb } from 'lucide-react';

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center mb-6 bg-neutral-100 px-4 py-1.5 rounded-full text-xs text-neutral-600">
              <Sparkles size={12} className="text-primary mr-2" />
              <span className="tracking-wider">AI-POWERED STARTUP IDEAS</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-medium mb-6 leading-tight animate-fade-in">
              Discover <span className="text-primary font-semibold">Innovative</span> AI Startup Concepts
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Browse our curated collection of AI-generated startup ideas, carefully crafted 
              to address emerging market opportunities and technology trends.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#" className="w-full sm:w-auto">
                <Button className="bg-primary text-white px-6 py-2 font-medium rounded-md group w-full sm:w-auto">
                  <FileText className="h-4 w-4 mr-2" />
                  <span>Read Paper</span>
                </Button>
              </a>
              
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="outline" className="border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-800 px-6 py-2 font-medium rounded-md group w-full sm:w-auto">
                  <Github className="h-4 w-4 mr-2" />
                  <span>Github Repository</span>
                </Button>
              </a>
              
              <Link to="/ideas" className="w-full sm:w-auto">
                <Button variant="outline" className="border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-800 px-6 py-2 font-medium rounded-md group w-full sm:w-auto">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Browse Ideas</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How Agentic Ventures Works Section */}
      <section className="py-24 pb-12 bg-neutral-50 relative">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6 bg-white px-4 py-1.5 rounded-full text-xs text-neutral-600">
              <Bot size={12} className="text-primary mr-2" />
              <span className="tracking-wider">OUR APPROACH</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              How <span className="text-primary font-semibold">Agentic Ventures</span> Works
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              An innovative, fully autonomous system designed to discover, evaluate, and build startup ideas at scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
              <div className="mx-auto w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-6">
                <Search size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-foreground text-center">Scout</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our Scout agent continuously searches and gathers startup ideas from a variety of sources—from Hacker News to industry feeds. It uses a dynamic, hunger-driven planner to prioritize promising topics and generate concise idea summaries.
              </p>
              <div className="mt-6 pt-6 border-t border-neutral-100">
                <h4 className="font-medium text-sm mb-3 text-foreground">Key Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neutral-100 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-sm text-neutral-600">Intelligent idea discovery</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neutral-100 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-sm text-neutral-600">Hunger-driven planning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neutral-100 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-sm text-neutral-600">Initial research and enrichment</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
              <div className="mx-auto w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-6">
                <Scale size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-foreground text-center">Jury</h3>
              <p className="text-muted-foreground leading-relaxed">
                Each idea passes through the Jury, a panel of 20 specialized micro-agents that independently analyze different facets of the idea—market size, problem severity, competition, technical feasibility, and more—using up-to-date data.
              </p>
              <div className="mt-6 pt-6 border-t border-neutral-100">
                <h4 className="font-medium text-sm mb-3 text-foreground">Key Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neutral-100 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-sm text-neutral-600">Rigorous multi-agent evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neutral-100 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-sm text-neutral-600">Specialized micro-agents</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neutral-100 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-sm text-neutral-600">Transparent quantitative scoring</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
              <div className="mx-auto w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-6">
                <Lightbulb size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-foreground text-center">Architect</h3>
              <p className="text-muted-foreground leading-relaxed">
                For ideas that pass the Jury, the Architect agent systematically constructs a detailed founder playbook by generating chapters on problem definition, solution design, market strategy, business modeling, and resource planning.
              </p>
              <div className="mt-6 pt-6 border-t border-neutral-100">
                <h4 className="font-medium text-sm mb-3 text-foreground">Key Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neutral-100 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-sm text-neutral-600">Comprehensive startup blueprinting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neutral-100 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-sm text-neutral-600">Deep research with citations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-neutral-100 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-sm text-neutral-600">Actionable founder playbooks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
