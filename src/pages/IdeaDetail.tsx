
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Brain, Rocket, Bot, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import PageLayout from '@/components/PageLayout';
import { IdeaType } from '@/components/IdeaCard';

const IdeaDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Sample data for demonstration - in a real app, you'd fetch this by ID
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
  
  const idea = ideas.find(idea => idea.id === Number(id));
  
  if (!idea) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6">Idea Not Found</h1>
            <p className="mb-8">The idea you're looking for doesn't exist.</p>
            <Link to="/generator">
              <Button>Back to Generator</Button>
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  const getIcon = () => {
    switch (idea.icon) {
      case 'brain':
        return <Brain className="h-12 w-12 text-purple-400" />;
      case 'rocket':
        return <Rocket className="h-12 w-12 text-blue-400" />;
      case 'bot':
        return <Bot className="h-12 w-12 text-green-400" />;
      case 'star':
        return <Star className="h-12 w-12 text-yellow-400" />;
      default:
        return <Brain className="h-12 w-12 text-purple-400" />;
    }
  };

  const longDescription = `This innovative AI startup concept addresses a significant market need in the ${idea.category} sector. 
  
  Using advanced machine learning algorithms and neural networks, this platform can process vast amounts of data to provide intelligent solutions that current market options lack.
  
  The business model relies on a subscription-based service with tiered pricing for different user segments. Initial target customers include medium to large enterprises seeking to optimize their operations and reduce costs.
  
  Current market analysis shows a potential addressable market of $2.5 billion, with an annual growth rate of 24%. Competition exists, but most solutions lack the comprehensive approach this concept provides.
  
  Implementation would require an initial team of 5-7 people, including AI specialists, domain experts, and business development professionals. Estimated time to minimum viable product is 8-12 months with initial funding needs of approximately $1.2 million.`;

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-8">
          <Link to="/generator" className="inline-flex items-center text-muted-foreground hover:text-white transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Ideas
          </Link>
        </div>
        
        <div className="glass-panel rounded-2xl p-6 md:p-10 mb-8 animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <div className="p-4 rounded-full bg-secondary flex-shrink-0">
              {getIcon()}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold">{idea.title}</h1>
                <Badge
                  variant="outline"
                  className={`
                    ${idea.status === 'passed' 
                      ? 'bg-idea-passed/10 text-idea-passed border-idea-passed/30' 
                      : 'bg-idea-failed/10 text-idea-failed border-idea-failed/30'}
                  `}
                >
                  {idea.status === 'passed' ? 'Passed' : 'Failed'}
                </Badge>
              </div>
              <Badge variant="secondary">{idea.category}</Badge>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Summary</h2>
            <p className="text-gray-300">{idea.description}</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Detailed Analysis</h2>
            <div className="whitespace-pre-line text-gray-300">
              {longDescription}
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Evaluation Status</h2>
            <div className={`p-4 rounded-lg ${
              idea.status === 'passed' 
                ? 'bg-idea-passed/10 border border-idea-passed/30' 
                : 'bg-idea-failed/10 border border-idea-failed/30'
            }`}>
              <p className="font-medium">
                {idea.status === 'passed' 
                  ? 'This idea has passed our evaluation criteria and is recommended for further development.'
                  : 'This idea has not met our evaluation criteria and may need refinement before proceeding.'}
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button className="btn-gradient">
            <Download size={16} className="mr-2" />
            Download Detailed PDF Report
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default IdeaDetail;
