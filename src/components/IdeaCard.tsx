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
        return <Brain className="h-5 w-5 text-primary" />;
      case 'rocket':
        return <Rocket className="h-5 w-5 text-primary" />;
      case 'bot':
        return <Bot className="h-5 w-5 text-primary" />;
      case 'star':
        return <Star className="h-5 w-5 text-primary" />;
      default:
        return <Brain className="h-5 w-5 text-primary" />;
    }
  };

  const getStatusColor = () => {
    return idea.status === 'passed' 
      ? 'bg-green-100 text-green-700 border-green-200' 
      : 'bg-red-100 text-red-700 border-red-200';
  };

  return (
    <Link to={`/idea/${idea.id}`} className="block h-full hoverable-card">
      <Card className="h-full border border-neutral-200 rounded-lg shadow-sm bg-background overflow-hidden">
        <CardContent className="p-7">
          <div className="flex justify-between items-start mb-5">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center">
                {getIcon()}
              </div>
              <Badge
                variant="outline"
                className={`${getStatusColor()} px-3 py-1`}
              >
                {idea.status === 'passed' ? 'Viable' : 'Research'}
              </Badge>
            </div>
            <Badge variant="secondary" className="bg-neutral-100 text-neutral-700 border-neutral-200 text-xs px-3 py-1">
              {idea.category}
            </Badge>
          </div>
          
          <h3 className="font-medium text-xl text-foreground mb-4 leading-snug">{idea.title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-3 mb-5 leading-relaxed">
            {idea.description}
          </p>
        </CardContent>
        
        <CardFooter className="px-7 py-4 border-t border-neutral-200 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2 pb-1 group">
            <span>View details</span>
            <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default IdeaCard;
