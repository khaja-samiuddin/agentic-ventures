
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
        return <Brain className="h-8 w-8 text-indigo-400" />;
      case 'rocket':
        return <Rocket className="h-8 w-8 text-blue-400" />;
      case 'bot':
        return <Bot className="h-8 w-8 text-purple-400" />;
      case 'star':
        return <Star className="h-8 w-8 text-sky-400" />;
      default:
        return <Brain className="h-8 w-8 text-indigo-400" />;
    }
  };

  const getStatusColor = () => {
    return idea.status === 'passed' 
      ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30' 
      : 'bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-400 border-red-500/30';
  };

  return (
    <Link to={`/idea/${idea.id}`}>
      <div className="animated-border h-full">
        <div className="h-full glass-card card-hover relative overflow-hidden p-6 backdrop-blur-xl bg-white/5 border-none">
          <div className="absolute top-0 right-0 p-2">
            <Badge
              variant="outline"
              className={getStatusColor()}
            >
              {idea.status === 'passed' ? 'Passed' : 'Failed'}
            </Badge>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full futuristic-gradient flex items-center justify-center">
              {getIcon()}
            </div>
            <h3 className="font-bold text-xl text-white neon-glow">{idea.title}</h3>
            <p className="text-gray-300 text-sm line-clamp-3">
              {idea.description}
            </p>
          </div>
          <div className="pt-4 pb-2 flex justify-center">
            <Badge variant="secondary" className="backdrop-blur-md bg-white/10 text-white hover:bg-white/20 transition-colors">
              {idea.category}
            </Badge>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default IdeaCard;
