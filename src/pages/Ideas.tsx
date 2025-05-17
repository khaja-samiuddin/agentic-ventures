import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import IdeaCard, { IdeaType } from '@/components/IdeaCard';
import { Button } from '@/components/ui/button';
import { Search, Filter, Brain, Star, Zap, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const categoryFilters = [
  "All", "Healthcare", "Energy", "Education", 
  "Retail", "Agriculture", "Marketing", "Logistics",
  "Construction", "Finance"
];

const Ideas = () => {
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
    },
    {
      id: 11,
      title: "Eco-Friendly Packaging Designer",
      description: "AI platform that designs sustainable packaging solutions, optimizing for biodegradability and minimal environmental impact while maintaining product protection.",
      category: "Manufacturing",
      status: "passed",
      icon: "rocket"
    },
    {
      id: 12,
      title: "AI-Powered Legal Assistant",
      description: "Platform that helps legal professionals with contract analysis, precedent research, and document preparation, improving efficiency and accuracy.",
      category: "Legal",
      status: "passed",
      icon: "brain"
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
      <section className="py-24 pb-12 md:py-32 md:pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-medium mb-3 text-neutral-900">
              Browse Ideas
            </h1>
            <p className="text-lg text-neutral-500">
              Discover AI-generated startup concepts evaluated by our autonomous agent system
            </p>
          </div>
          
          {/* Search and Filter Bar */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden">
              {/* Search input */}
              <div className="p-6 border-b border-neutral-100">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Search className="h-4 w-4 text-neutral-400" />
                  </div>
                  <Input 
                    placeholder="Search ideas..." 
                    className="pl-10 bg-background h-12 border-input rounded-md w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              {/* Category filters */}
              <div className="px-6 py-4 bg-neutral-50">
                <div className="flex items-center flex-wrap gap-2">
                  <span className="text-xs font-medium text-neutral-500 mr-2">FILTER:</span>
                  {categoryFilters.map(category => (
                    <Badge 
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className={`py-1.5 cursor-pointer transition-all text-xs ${
                        selectedCategory === category 
                          ? 'bg-neutral-900 text-white hover:bg-neutral-800' 
                          : 'bg-white text-neutral-700 hover:bg-neutral-100 border-neutral-200'
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Results count */}
          <div className="max-w-7xl mx-auto mb-4 px-3">
            <p className="text-neutral-400 text-xs uppercase tracking-wide">
              {filteredIdeas.length} {filteredIdeas.length === 1 ? 'idea' : 'ideas'} {selectedCategory !== "All" ? `in ${selectedCategory}` : ''}
            </p>
          </div>
          
          {/* Ideas Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredIdeas.map((idea) => (
              <div key={idea.id} className="transition-all duration-300">
                <IdeaCard idea={idea} />
              </div>
            ))}
          </div>
          
          {/* No results message */}
          {filteredIdeas.length === 0 && (
            <div className="max-w-lg mx-auto mt-16 overflow-hidden bg-white rounded-lg border border-neutral-200 shadow-sm">
              <div className="p-10 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-100 mb-6">
                  <Search className="h-5 w-5 text-neutral-400" />
                </div>
                <h3 className="text-base font-medium text-neutral-900 mb-2">No results found</h3>
                <p className="text-neutral-500 text-sm mb-6">
                  Try adjusting your filters or using different search terms
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Ideas; 