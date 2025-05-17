import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Brain, Rocket, Bot, Star, Check, X, Users, TrendingUp, BarChart4, Target, BriefcaseBusiness, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import PageLayout from '@/components/PageLayout';
import { IdeaType } from '@/components/IdeaCard';

const IdeaDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Sample data for demonstration - in a real app, you'd fetch this by ID
  const ideas: IdeaType[] = [
    {
      id: 1,
      title: "AI Medical Diagnostics Platform",
      description: "A platform using machine learning to analyze medical images and assist doctors in early disease detection, improving diagnostic accuracy by up to 40%.",
      category: "Healthcare",
      status: "passed",
      icon: "brain"
    },
    {
      id: 2,
      title: "Smart Energy Grid Optimizer",
      description: "AI system that optimizes energy distribution in power grids to reduce waste and lower costs, potentially saving up to 15% in energy expenses.",
      category: "Energy",
      status: "passed",
      icon: "bot"
    },
    {
      id: 3,
      title: "Personalized Education Platform",
      description: "Adaptive learning system that customizes educational content based on individual student performance, improving learning outcomes through personalization.",
      category: "Education",
      status: "failed", 
      icon: "rocket"
    },
    {
      id: 4,
      title: "Autonomous Retail Assistant",
      description: "AI-powered shopping assistant that helps customers find products and provides personalized recommendations, increasing conversion rates by 25%.",
      category: "Retail",
      status: "passed",
      icon: "star"
    },
    {
      id: 5,
      title: "Predictive Agriculture System",
      description: "Platform that uses AI to predict crop yields, pest outbreaks, and optimize farming practices, increasing farm efficiency and sustainability.",
      category: "Agriculture",
      status: "passed",
      icon: "brain"
    },
    {
      id: 6,
      title: "AI Content Creation Suite",
      description: "Tools that generate high-quality written content, images, and videos for marketing and content creation, saving time and enhancing creativity.",
      category: "Marketing",
      status: "failed",
      icon: "bot"
    },
    {
      id: 7,
      title: "Smart Supply Chain Manager",
      description: "AI system that optimizes logistics, inventory, and distribution to reduce costs and improve efficiency, minimizing waste and delays.",
      category: "Logistics",
      status: "passed",
      icon: "rocket"
    },
    {
      id: 8,
      title: "Virtual Mental Health Coach",
      description: "AI-powered platform providing personalized mental health support and therapy assistance, making wellness resources more accessible to all.",
      category: "Healthcare",
      status: "passed",
      icon: "star"
    }
  ];
  
  const idea = ideas.find(idea => idea.id === Number(id));
  
  if (!idea) {
    return (
      <PageLayout>
        <div className="container mx-auto px-6 py-32">
          <div className="max-w-2xl mx-auto text-center frost-panel rounded-3xl p-16">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-8">
              <X className="h-8 w-8 text-red-400" />
            </div>
            <h1 className="text-3xl font-medium mb-6">Idea Not Found</h1>
            <p className="text-muted-foreground text-lg mb-10">The startup idea you're looking for doesn't exist or may have been removed.</p>
            <Link to="/ideas">
              <Button className="glass-button rounded-full px-8 py-6 text-base font-medium group">
                <span className="mr-3">Back to Ideas</span>
                <ArrowLeft className="h-4 w-4 text-primary/90" />
              </Button>
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  const getIcon = () => {
    switch (idea.icon) {
      case 'brain':
        return <Brain className="h-10 w-10 text-blue-400" />;
      case 'rocket':
        return <Rocket className="h-10 w-10 text-violet-400" />;
      case 'bot':
        return <Bot className="h-10 w-10 text-indigo-400" />;
      case 'star':
        return <Star className="h-10 w-10 text-primary" />;
      default:
        return <Brain className="h-10 w-10 text-blue-400" />;
    }
  };

  const longDescription = `This innovative AI startup concept addresses a significant market need in the ${idea.category} sector. 
  
  Using advanced machine learning algorithms and neural networks, this platform can process vast amounts of data to provide intelligent solutions that current market options lack.
  
  The business model relies on a subscription-based service with tiered pricing for different user segments. Initial target customers include medium to large enterprises seeking to optimize their operations and reduce costs.
  
  Current market analysis shows a potential addressable market of $2.5 billion, with an annual growth rate of 24%. Competition exists, but most solutions lack the comprehensive approach this concept provides.
  
  Implementation would require an initial team of 5-7 people, including AI specialists, domain experts, and business development professionals. Estimated time to minimum viable product is 8-12 months with initial funding needs of approximately $1.2 million.`;

  return (
    <PageLayout>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 particle-background z-0"></div>
        <div className="blur-dot h-[600px] w-[600px] -top-20 -left-40"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-10">
            <Link to="/ideas" className="inline-flex items-center text-muted-foreground hover:text-white transition-colors glass-morphism px-5 py-2 rounded-full group">
              <ArrowLeft size={16} className="mr-3 group-hover:-translate-x-1 transition-transform" />
              Back to Ideas
            </Link>
          </div>
          
          {/* Idea Header */}
          <div className="frost-panel rounded-3xl p-10 md:p-16 mb-16 animate-fade-in border border-white/5">
            <div className="flex flex-col md:flex-row md:items-center gap-8 mb-12">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                {getIcon()}
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4 flex-wrap">
                  <h1 className="text-4xl md:text-5xl font-medium">{idea.title}</h1>
                  <Badge
                    variant="outline"
                    className={`px-4 py-1.5 text-sm ${
                      idea.status === 'passed' 
                        ? 'bg-green-500/10 text-green-400 border-green-500/30' 
                        : 'bg-red-500/10 text-red-400 border-red-500/30'
                    }`}
                  >
                    {idea.status === 'passed' ? 'Viable' : 'Research'}
                  </Badge>
                </div>
                <Badge variant="secondary" className="bg-white/5 text-white/80 border-white/10 px-4 py-1.5">{idea.category}</Badge>
              </div>
            </div>
            
            <div className="mb-16">
              <div className="inline-flex items-center mb-6 glass-morphism px-4 py-1.5 rounded-full text-xs text-white/70">
                <Sparkles size={12} className="text-primary mr-2" />
                <span className="tracking-wider">CONCEPT SUMMARY</span>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">{idea.description}</p>
            </div>
          </div>
          
          {/* Detailed Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div className="frost-panel rounded-3xl p-10 border border-white/5 hoverable-card">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Market Opportunity</h2>
              <p className="text-muted-foreground leading-relaxed">
                The addressable market for this concept is estimated at $2.5 billion, with an annual growth rate of 24%. Current solutions lack comprehensive features.
              </p>
            </div>
            
            <div className="frost-panel rounded-3xl p-10 border border-white/5 hoverable-card">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                <BriefcaseBusiness className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Business Model</h2>
              <p className="text-muted-foreground leading-relaxed">
                Subscription-based service with tiered pricing for different user segments. Initial target customers include medium to large enterprises.
              </p>
            </div>
            
            <div className="frost-panel rounded-3xl p-10 border border-white/5 hoverable-card">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Implementation</h2>
              <p className="text-muted-foreground leading-relaxed">
                Requires an initial team of 5-7 people. Estimated time to MVP: 8-12 months. Initial funding needs: approximately $1.2 million.
              </p>
            </div>
          </div>
          
          {/* Technology Details */}
          <div className="frost-panel rounded-3xl p-10 md:p-16 mb-16 animate-fade-in border border-white/5">
            <div className="inline-flex items-center mb-8 glass-morphism px-4 py-1.5 rounded-full text-xs text-white/70">
              <Brain size={12} className="text-primary mr-2" />
              <span className="tracking-wider">TECHNOLOGICAL APPROACH</span>
            </div>
            
            <h2 className="text-3xl font-medium mb-6">Implementation Overview</h2>
            
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                This concept leverages advanced machine learning algorithms and neural networks to process vast amounts of data and provide intelligent solutions in the {idea.category} sector.
              </p>
              <p>
                The core technology relies on a combination of supervised learning models and real-time data processing pipelines to deliver actionable insights to users.
              </p>
              <p>
                The platform's architecture is designed for scalability, with cloud-native components that can adapt to changing workloads and user requirements.
              </p>
            </div>
          </div>
          
          {/* Evaluation Status */}
          <div className="max-w-3xl mx-auto frost-panel rounded-3xl border overflow-hidden mb-16">
            <div className={`p-10 ${
              idea.status === 'passed' 
                ? 'bg-green-500/5 border-b border-green-500/20' 
                : 'bg-red-500/5 border-b border-red-500/20'
            }`}>
              <div className="flex items-center mb-6">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                  idea.status === 'passed' 
                    ? 'bg-green-500/10 text-green-400' 
                    : 'bg-red-500/10 text-red-400'
                }`}>
                  {idea.status === 'passed' ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                </div>
                <h2 className="text-2xl font-medium">
                  {idea.status === 'passed' 
                    ? 'This concept is viable for further development' 
                    : 'This concept requires further research'}
                </h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {idea.status === 'passed' 
                  ? "Our analysis indicates that this startup idea has strong market potential, technical feasibility, and business viability. It is ready for implementation planning."
                  : "While this concept shows promise, our analysis suggests additional research is needed in areas of market validation, technical implementation, or business model refinement."}
              </p>
            </div>
            
            <div className="p-10">
              <h3 className="text-xl font-medium mb-6">Key Evaluation Metrics</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Market Potential</span>
                    <span className={idea.status === 'passed' ? 'text-green-400' : 'text-yellow-400'}>
                      {idea.status === 'passed' ? 'High' : 'Medium'}
                    </span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${
                      idea.status === 'passed' 
                        ? 'bg-gradient-to-r from-green-500 to-green-400 w-4/5' 
                        : 'bg-gradient-to-r from-yellow-500 to-yellow-400 w-3/5'
                    }`}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Technical Feasibility</span>
                    <span className={idea.status === 'passed' ? 'text-green-400' : 'text-yellow-400'}>
                      {idea.status === 'passed' ? 'High' : 'Medium'}
                    </span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${
                      idea.status === 'passed' 
                        ? 'bg-gradient-to-r from-green-500 to-green-400 w-[85%]' 
                        : 'bg-gradient-to-r from-yellow-500 to-yellow-400 w-[60%]'
                    }`}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Funding Attractiveness</span>
                    <span className={idea.status === 'passed' ? 'text-green-400' : 'text-red-400'}>
                      {idea.status === 'passed' ? 'High' : 'Low'}
                    </span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${
                      idea.status === 'passed' 
                        ? 'bg-gradient-to-r from-green-500 to-green-400 w-[90%]' 
                        : 'bg-gradient-to-r from-red-500 to-red-400 w-[45%]'
                    }`}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Innovation Score</span>
                    <span className={idea.status === 'passed' ? 'text-green-400' : 'text-green-400'}>
                      {idea.status === 'passed' ? 'High' : 'High'}
                    </span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${
                      idea.status === 'passed' 
                        ? 'bg-gradient-to-r from-green-500 to-green-400 w-[85%]' 
                        : 'bg-gradient-to-r from-green-500 to-green-400 w-[80%]'
                    }`}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Download Button */}
          <div className="text-center">
            <Button className="glass-button rounded-full px-10 py-7 text-base font-medium group">
              <span className="mr-3">Download Detailed Report</span>
              <div className="h-8 w-8 rounded-full glass-morphism flex items-center justify-center">
                <Download className="h-4 w-4 text-white" />
              </div>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default IdeaDetail;
