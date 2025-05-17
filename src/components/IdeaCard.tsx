
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Rocket, Bot, Star } from 'lucide-react';

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
        return <Brain className="h-8 w-8 text-purple-400" />;
      case 'rocket':
        return <Rocket className="h-8 w-8 text-blue-400" />;
      case 'bot':
        return <Bot className="h-8 w-8 text-green-400" />;
      case 'star':
        return <Star className="h-8 w-8 text-yellow-400" />;
      default:
        return <Brain className="h-8 w-8 text-purple-400" />;
    }
  };

  return (
    <Link to={`/idea/${idea.id}`}>
      <Card className="h-full card-hover neon-outline bg-card relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2">
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
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-2 rounded-full bg-secondary">
              {getIcon()}
            </div>
            <h3 className="font-bold text-xl">{idea.title}</h3>
            <p className="text-muted-foreground text-sm line-clamp-3">
              {idea.description}
            </p>
          </div>
        </CardContent>
        <CardFooter className="pt-2 pb-4 justify-center">
          <Badge variant="secondary" className="hover:bg-primary hover:text-white transition-colors">
            {idea.category}
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default IdeaCard;
