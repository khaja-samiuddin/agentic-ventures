import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Rocket, Bot, Star, ArrowRight } from 'lucide-react';

export interface IdeaType {
  id: number;
  title: string;
  description: string;
  category: string;
  status: 'passed' | 'failed';
  icon: 'brain' | 'rocket' | 'bot' | 'star';
}

interface IdeaCardProps {
  idea: IdeaType;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ idea }) => {
  const getIcon = () => {
    switch (idea.icon) {
      case 'brain':
        return <Brain className="h-5 w-5 text-blue-400" />;
      case 'rocket':
        return <Rocket className="h-5 w-5 text-indigo-400" />;
      case 'bot':
        return <Bot className="h-5 w-5 text-violet-400" />;
      case 'star':
        return <Star className="h-5 w-5 text-primary" />;
      default:
        return <Brain className="h-5 w-5 text-blue-400" />;
    }
  };

  const getStatusColor = () => {
    return idea.status === 'passed' 
      ? 'bg-green-500/10 text-green-400 border-green-500/20' 
      : 'bg-red-500/10 text-red-400 border-red-500/20';
  };

  return (
    <Link to={`/idea/${idea.id}`} className="block h-full hoverable-card">
      <Card className="h-full glass-card overflow-hidden border-white/5 bg-white/[0.02] relative">
        <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 opacity-70"></div>
        <CardContent className="p-7">
          <div className="flex justify-between items-start mb-5">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                {getIcon()}
              </div>
              <Badge
                variant="outline"
                className={`${getStatusColor()} px-3 py-1`}
              >
                {idea.status === 'passed' ? 'Viable' : 'Research'}
              </Badge>
            </div>
            <Badge variant="secondary" className="bg-white/5 text-white/80 hover:bg-white/10 transition-colors border-white/10 text-xs px-3 py-1">
              {idea.category}
            </Badge>
          </div>
          
          <h3 className="font-medium text-xl text-white mb-4 text-balance leading-snug">{idea.title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-3 mb-5 leading-relaxed">
            {idea.description}
          </p>
        </CardContent>
        
        <CardFooter className="px-7 py-4 border-t border-white/5 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2 modern-border pb-1 group">
            <span>View details</span>
            <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default IdeaCard;
