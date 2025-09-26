import { Calendar, TrendingUp, TrendingDown, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  company: string;
  ticker: string;
  image: string;
  author: string;
  publishedAt: string;
  category: string;
  trend: "up" | "down" | "neutral";
  readTime: string;
  fullArticle?: string;
}

interface NewsCardProps {
  article: NewsArticle;
  onClick?: () => void;
}

export const NewsCard = ({ article, onClick }: NewsCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(`/article/${article.id}`);
    }
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/article/${article.id}`);
  };
  const getTrendIcon = () => {
    if (article.trend === "up") {
      return <TrendingUp className="h-4 w-4 text-success" />;
    } else if (article.trend === "down") {
      return <TrendingDown className="h-4 w-4 text-destructive" />;
    }
    return null;
  };

  const getTrendColor = () => {
    if (article.trend === "up") return "text-success";
    if (article.trend === "down") return "text-destructive";
    return "text-muted-foreground";
  };

  return (
    <Card 
      className="group cursor-pointer overflow-hidden bg-gradient-card border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
      onClick={handleCardClick}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="news-card-image transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <CardContent className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="text-xs font-medium">
              {article.company}
            </Badge>
            <Badge variant="outline" className={`text-xs ${getTrendColor()}`}>
              {article.ticker}
              {getTrendIcon()}
            </Badge>
          </div>
          <Badge variant="outline" className="text-xs">
            {article.category}
          </Badge>
        </div>

        <h3 className="mb-3 line-clamp-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {article.title}
        </h3>

        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {article.excerpt}
        </p>

        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Eye className="h-3 w-3" />
            <span>{article.readTime}</span>
          </div>
        </div>

        <Button 
          variant="ghost" 
          className="mt-4 w-full text-primary hover:bg-primary/5 hover:text-primary"
          onClick={handleButtonClick}
        >
          Read Full Article
        </Button>
      </CardContent>
    </Card>
  );
};