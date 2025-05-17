import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Brain, Rocket, Bot, Star, Check, X, Calendar, Clock, Link2, DollarSign, ThumbsUp, ThumbsDown, Search, Scale, Lightbulb, FileText, Code, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import PageLayout from '@/components/PageLayout';
import { IdeaType } from '@/components/IdeaCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Extended idea type with Agentic Ventures data
interface DetailedIdeaType extends IdeaType {
  source: string;
  date: string;
  time: string;
  cost: string;
  scoutStatus: 'qualified' | 'failed';
  juryScore: number;
  architectPlan: boolean;
}

const IdeaDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [feedbackSubmitted, setFeedbackSubmitted] = useState<'positive' | 'negative' | null>(null);
  
  // Sample data for demonstration - in a real app, you'd fetch this by ID
  const ideas: DetailedIdeaType[] = [
    {
      id: 1,
      title: "AI Medical Diagnostics Platform",
      description: "A platform using machine learning to analyze medical images and assist doctors in early disease detection, improving diagnostic accuracy by up to 40%.",
      category: "Healthcare",
      status: "passed",
      icon: "brain",
      source: "Hacker News",
      date: "2023-07-15",
      time: "14:32 UTC",
      cost: "$0.42",
      scoutStatus: "qualified",
      juryScore: 8.7,
      architectPlan: true
    },
    {
      id: 2,
      title: "Smart Energy Grid Optimizer",
      description: "AI system that optimizes energy distribution in power grids to reduce waste and lower costs, potentially saving up to 15% in energy expenses.",
      category: "Energy",
      status: "passed",
      icon: "bot",
      source: "YC Startup Ideas",
      date: "2023-08-23",
      time: "09:15 UTC",
      cost: "$0.37",
      scoutStatus: "qualified",
      juryScore: 7.9,
      architectPlan: true
    },
    {
      id: 3,
      title: "Personalized Education Platform",
      description: "Adaptive learning system that customizes educational content based on individual student performance, improving learning outcomes through personalization.",
      category: "Education",
      status: "failed", 
      icon: "rocket",
      source: "r/startups",
      date: "2023-09-05",
      time: "16:48 UTC",
      cost: "$0.29",
      scoutStatus: "failed",
      juryScore: 5.2,
      architectPlan: false
    },
    {
      id: 4,
      title: "Autonomous Retail Assistant",
      description: "AI-powered shopping assistant that helps customers find products and provides personalized recommendations, increasing conversion rates by 25%.",
      category: "Retail",
      status: "passed",
      icon: "star",
      source: "TechCrunch",
      date: "2023-10-12",
      time: "11:27 UTC",
      cost: "$0.35",
      scoutStatus: "qualified",
      juryScore: 8.2,
      architectPlan: true
    }
  ];
  
  const idea = ideas.find(idea => idea.id === Number(id));
  
  if (!idea) {
    return (
      <PageLayout>
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-2xl mx-auto text-center bg-white p-12 rounded-lg border border-neutral-200 shadow-sm">
            <div className="w-20 h-20 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-8">
              <X className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-3xl font-medium mb-6 text-foreground">Idea Not Found</h1>
            <p className="text-muted-foreground text-lg mb-10">The startup idea you're looking for doesn't exist or may have been removed.</p>
            <Link to="/ideas">
              <Button className="bg-primary text-white rounded-md px-6 py-2 font-medium">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>Back to Ideas</span>
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
        return <Brain className="h-10 w-10 text-primary" />;
      case 'rocket':
        return <Rocket className="h-10 w-10 text-primary" />;
      case 'bot':
        return <Bot className="h-10 w-10 text-primary" />;
      case 'star':
        return <Star className="h-10 w-10 text-primary" />;
      default:
        return <Brain className="h-10 w-10 text-primary" />;
    }
  };

  // The mock detailed business plan text
  const rawData = `This innovative AI startup concept addresses a significant market need in the ${idea.category} sector.

Using advanced machine learning algorithms and neural networks, this platform can process vast amounts of data to provide intelligent solutions that current market options lack.

The business model relies on a subscription-based service with tiered pricing for different user segments. Initial target customers include medium to large enterprises seeking to optimize their operations and reduce costs.

Current market analysis shows a potential addressable market of $2.5 billion, with an annual growth rate of 24%. Competition exists, but most solutions lack the comprehensive approach this concept provides.

Implementation would require an initial team of 5-7 people, including AI specialists, domain experts, and business development professionals. Estimated time to minimum viable product is 8-12 months with initial funding needs of approximately $1.2 million.`;

  return (
    <PageLayout>
      <section className="py-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <Link to="/ideas" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors bg-neutral-100 px-4 py-2 rounded-md group text-sm">
              <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Ideas
            </Link>
          </div>
          
          {/* Main content container */}
          <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden mb-10">
            {/* Header with basic info */}
            <div className="p-8 border-b border-neutral-100">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-neutral-100 p-6 rounded-lg flex-shrink-0">
                  {getIcon()}
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h1 className="text-3xl font-medium text-foreground">{idea.title}</h1>
                    <Badge className={`px-3 py-1 ${
                      idea.status === 'passed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {idea.status === 'passed' ? 'Viable' : 'Research'}
                    </Badge>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">{idea.description}</p>
                  
                  {/* Metadata */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar size={16} className="mr-2" />
                      <span>{idea.date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock size={16} className="mr-2" />
                      <span>{idea.time}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Link2 size={16} className="mr-2" />
                      <span>{idea.source}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <DollarSign size={16} className="mr-2" />
                      <span>Generation cost: {idea.cost}</span>
                    </div>
                  </div>
                </div>
                
                {/* Feedback buttons */}
                <div className="flex-shrink-0 flex gap-2 mt-2 md:mt-0">
                  <Button 
                    variant={feedbackSubmitted === 'positive' ? 'default' : 'outline'} 
                    size="sm" 
                    className={`rounded-md ${feedbackSubmitted === 'positive' ? 'bg-green-600 hover:bg-green-700' : 'hover:bg-neutral-100'}`}
                    onClick={() => setFeedbackSubmitted('positive')}
                    disabled={feedbackSubmitted !== null && feedbackSubmitted !== 'positive'}
                  >
                    <ThumbsUp size={16} className="mr-1" />
                    <span>Helpful</span>
                  </Button>
                  <Button 
                    variant={feedbackSubmitted === 'negative' ? 'default' : 'outline'} 
                    size="sm" 
                    className={`rounded-md ${feedbackSubmitted === 'negative' ? 'bg-red-600 hover:bg-red-700' : 'hover:bg-neutral-100'}`}
                    onClick={() => setFeedbackSubmitted('negative')}
                    disabled={feedbackSubmitted !== null && feedbackSubmitted !== 'negative'}
                  >
                    <ThumbsDown size={16} className="mr-1" />
                    <span>Not helpful</span>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Agentic Ventures Workflow Section */}
            <div className="p-8">
              <h2 className="text-xl font-medium mb-8 text-foreground">Agentic Ventures Analysis Pipeline</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {/* Scout card */}
                <div className="bg-neutral-50 rounded-lg border border-neutral-200 p-6 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="bg-neutral-100 p-2 rounded-md mr-3">
                      <Search className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium">Scout</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    The Scout agent gathered this idea from {idea.source} and performed initial validation and research.
                  </p>
                  
                  <div className="mt-auto">
                    <div className={`flex items-center rounded-md p-2 ${
                      idea.scoutStatus === 'qualified' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {idea.scoutStatus === 'qualified' 
                        ? <Check className="h-4 w-4 mr-2" /> 
                        : <X className="h-4 w-4 mr-2" />}
                      <span className="text-sm font-medium">
                        {idea.scoutStatus === 'qualified' ? 'Qualified' : 'Failed'}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Jury card */}
                <div className="bg-neutral-50 rounded-lg border border-neutral-200 p-6 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="bg-neutral-100 p-2 rounded-md mr-3">
                      <Scale className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium">Jury</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    Our panel of 20 specialized micro-agents evaluated this idea on market size, problem severity, competition, and technical feasibility.
                  </p>
                  
                  <div className="mt-auto">
                    <div className={`flex items-center rounded-md p-2 ${
                      idea.juryScore >= 7 
                        ? 'bg-green-100 text-green-800' 
                        : idea.juryScore >= 5 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-red-100 text-red-800'
                    }`}>
                      <span className="text-sm font-medium">
                        Score: {idea.juryScore}/10
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Architect card */}
                <div className="bg-neutral-50 rounded-lg border border-neutral-200 p-6 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="bg-neutral-100 p-2 rounded-md mr-3">
                      <Lightbulb className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium">Architect</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {idea.architectPlan 
                      ? "The Architect agent has created a detailed founder playbook with problem definition, solution design, and market strategy." 
                      : "The Architect was not engaged for this idea due to insufficient scores in earlier stages."}
                  </p>
                  
                  <div className="mt-auto">
                    {idea.architectPlan ? (
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        <FileText className="h-4 w-4 mr-2" />
                        <span>View Founder Playbook</span>
                      </Button>
                    ) : (
                      <div className="flex items-center rounded-md p-2 bg-neutral-200 text-neutral-600">
                        <X className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">Not Available</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Data Tabs */}
              <div className="mt-8">
                <Tabs defaultValue="raw-data">
                  <TabsList className="grid w-full grid-cols-2 bg-neutral-100">
                    <TabsTrigger value="raw-data" className="data-tab">Raw Data</TabsTrigger>
                    <TabsTrigger value="founders-playbook" className="data-tab" disabled={!idea.architectPlan}>Founder's Playbook</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="raw-data" className="border border-neutral-200 rounded-md mt-4 p-6 bg-neutral-50">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-medium">Raw Idea Data</h3>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        <span>Download JSON</span>
                      </Button>
                    </div>
                    <div className="whitespace-pre-wrap text-sm text-muted-foreground font-mono bg-neutral-100 p-4 rounded-md">
                      {rawData}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="founders-playbook" className="border border-neutral-200 rounded-md mt-4 p-6 bg-neutral-50">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-medium">Founder's Playbook</h3>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          <span>Download PDF</span>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Code className="h-4 w-4 mr-2" />
                          <span>View Markdown</span>
                        </Button>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {idea.architectPlan ? (
                        <div className="space-y-4">
                          <div className="bg-white border border-neutral-200 rounded-md p-4 hover:shadow-sm transition-shadow">
                            <h4 className="font-medium text-foreground flex items-center">
                              <BookOpen className="h-4 w-4 mr-2 text-primary" />
                              Chapter 1: Problem Definition
                            </h4>
                            <p className="mt-2">A detailed analysis of the problem space, target customers, and current market gaps...</p>
                          </div>
                          
                          <div className="bg-white border border-neutral-200 rounded-md p-4 hover:shadow-sm transition-shadow">
                            <h4 className="font-medium text-foreground flex items-center">
                              <BookOpen className="h-4 w-4 mr-2 text-primary" />
                              Chapter 2: Solution Design
                            </h4>
                            <p className="mt-2">Technical architecture, key features, and implementation strategy...</p>
                          </div>
                          
                          <div className="bg-white border border-neutral-200 rounded-md p-4 hover:shadow-sm transition-shadow">
                            <h4 className="font-medium text-foreground flex items-center">
                              <BookOpen className="h-4 w-4 mr-2 text-primary" />
                              Chapter 3: Market Strategy
                            </h4>
                            <p className="mt-2">Go-to-market plan, customer acquisition strategy, and competitive positioning...</p>
                          </div>
                          
                          <div className="bg-white border border-neutral-200 rounded-md p-4 hover:shadow-sm transition-shadow">
                            <h4 className="font-medium text-foreground flex items-center">
                              <BookOpen className="h-4 w-4 mr-2 text-primary" />
                              Chapter 4: Business Model
                            </h4>
                            <p className="mt-2">Revenue streams, pricing strategy, and financial projections...</p>
                          </div>
                          
                          <div className="bg-white border border-neutral-200 rounded-md p-4 hover:shadow-sm transition-shadow">
                            <h4 className="font-medium text-foreground flex items-center">
                              <BookOpen className="h-4 w-4 mr-2 text-primary" />
                              Chapter 5: Resource Planning
                            </h4>
                            <p className="mt-2">Team composition, funding requirements, and development roadmap...</p>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <p>Founder's Playbook not available for this idea.</p>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default IdeaDetail;
