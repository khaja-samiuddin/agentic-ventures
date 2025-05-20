import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import IdeaCard, { IdeaType } from '@/components/IdeaCard';
import { Button } from '@/components/ui/button';
import { Search, Filter, Brain, Star, Zap, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const categoryFilters = [
  "All", "Healthcare", "Energy", "Education", 
  "Retail", "Agriculture", "Marketing", "Logistics"
];

const Generator = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample data for demonstration
  const allIdeas: IdeaType[] = [
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
    },
    {
      id: 9,
      title: "Sustainable Construction Planner",
      description: "AI system that optimizes building design and material selection for maximum energy efficiency and minimal environmental impact.",
      category: "Construction",
      status: "passed",
      icon: "brain"
    },
    {
      id: 10,
      title: "Decentralized Finance Analytics",
      description: "Platform that uses AI to analyze cryptocurrency trends and optimize DeFi investment strategies, enhancing returns and reducing risk.",
      category: "Finance",
      status: "passed",
      icon: "star"
    }
  ];

  // Filter ideas based on selected category and search query
  const filteredIdeas = allIdeas.filter(idea => {
    const matchesCategory = selectedCategory === "All" || idea.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      idea.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      idea.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageLayout>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 particle-background z-0"></div>
        <div className="blur-dot h-[600px] w-[600px] -top-20 -right-40"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center justify-center mb-8 glass-morphism px-5 py-2 rounded-full text-xs text-white/70">
              <Sparkles size={12} className="text-primary mr-2.5" />
              <span className="tracking-wider">DISCOVER POSSIBILITIES</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-medium mb-8 leading-tight animate-fade-in">
              Explore <span className="text-gradient font-semibold">Innovative</span> Startup Ideas
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 animate-fade-in text-balance leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Browse our curated collection of AI-generated startup concepts across various industries and technological domains.
            </p>
          </div>
          
          {/* Search and Filter Bar */}
          <div className="max-w-4xl mx-auto mb-16 frost-panel rounded-2xl p-6 border border-white/5">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search ideas..." 
                  className="pl-10 bg-white/5 border-white/10 h-12 text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-3 flex-wrap">
                {categoryFilters.map(category => (
                  <Badge 
                    key={category}
                    className={`px-4 py-2.5 cursor-pointer transition-all text-sm ${
                      selectedCategory === category 
                        ? 'bg-primary/20 text-primary border-primary/30' 
                        : 'bg-white/5 text-white/70 hover:bg-white/10 border-white/10'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          {/* Results count */}
          <div className="max-w-7xl mx-auto mb-8">
            <p className="text-muted-foreground text-sm">
              Showing {filteredIdeas.length} ideas {selectedCategory !== "All" ? `in ${selectedCategory}` : ''}
            </p>
          </div>
          
          {/* Ideas Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIdeas.map((idea, index) => (
              <div key={idea.id} className="animate-scale-in" style={{ animationDelay: `${0.05 + index * 0.05}s` }}>
                <IdeaCard idea={idea} />
              </div>
            ))}
          </div>
          
          {/* No results message */}
          {filteredIdeas.length === 0 && (
            <div className="max-w-lg mx-auto text-center mt-12 py-16">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                <Search className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">No ideas found</h3>
              <p className="text-muted-foreground">
                We couldn't find any ideas matching your search criteria. Try adjusting your filters or search query.
              </p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Generator;
