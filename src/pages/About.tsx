
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Brain, Rocket, Bot } from 'lucide-react';

const About = () => {
  return (
    <PageLayout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                About Our Platform
              </span>
            </h1>
            <p className="text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Learn more about our AI-powered startup idea generator and how it helps entrepreneurs launch successful ventures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                We're on a mission to democratize innovation by putting powerful AI-driven ideation tools in the hands of entrepreneurs worldwide. By leveraging cutting-edge artificial intelligence, we help visionaries identify promising startup opportunities in the rapidly evolving tech landscape.
              </p>
              <p className="text-gray-300">
                Our platform doesn't just generate ideas—it analyzes market trends, funding patterns, technological breakthroughs, and consumer needs to create viable, actionable business concepts with real potential for success.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">How We're Different</h2>
              <p className="text-gray-300 mb-4">
                Unlike simple brainstorming tools, our AI goes beyond random suggestions. Each idea undergoes rigorous evaluation against key success metrics, including market potential, technical feasibility, innovation factor, and funding attractiveness.
              </p>
              <p className="text-gray-300">
                We provide comprehensive analysis and detailed implementation roadmaps, giving entrepreneurs not just what to build, but how to build it and who to sell it to.
              </p>
            </div>
          </div>
          
          <div className="glass-panel rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <Brain size={32} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Advanced Neural Networks</h3>
                <p className="text-gray-300">
                  Our platform utilizes state-of-the-art neural networks trained on vast datasets of successful startups and market trends.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <Bot size={32} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Natural Language Processing</h3>
                <p className="text-gray-300">
                  Advanced NLP capabilities allow our AI to understand market needs and formulate coherent business concepts.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <Rocket size={32} className="text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
                <p className="text-gray-300">
                  We employ predictive models to assess market potential and forecast growth opportunities for each generated idea.
                </p>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Team</h2>
            <p className="text-gray-300 mb-6 text-center">
              We're a team of AI researchers, entrepreneurs, and business strategists passionate about fostering innovation in the AI startup ecosystem.
            </p>
            <p className="text-gray-300 text-center">
              With backgrounds spanning machine learning, venture capital, and successful startup exits, our diverse team brings a wealth of experience to the development of our idea generation platform.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
