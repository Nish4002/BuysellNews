import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Calendar, Eye, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { newsArticles } from "@/data/newsData";
import { NewsArticle } from "@/components/NewsCard";

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const article = newsArticles.find((article: NewsArticle) => article.id === id);

  // Scroll to top when component mounts or article changes
  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo(0, 0);
    // Then smooth scroll for better UX
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 10);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

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

  const formatArticleContent = (content: string) => {
    // Split content by double newlines to create paragraphs
    const paragraphs = content.split('\n\n');
    
    return paragraphs.map((paragraph, index) => {
      // Check if paragraph starts with ## for headings
      if (paragraph.startsWith('## ')) {
        const heading = paragraph.replace('## ', '');
        return (
          <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
            {heading}
          </h2>
        );
      }
      
      // Check if paragraph starts with ### for subheadings
      if (paragraph.startsWith('### ')) {
        const subheading = paragraph.replace('### ', '');
        return (
          <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">
            {subheading}
          </h3>
        );
      }
      
      // Regular paragraph
      return (
        <p key={index} className="text-muted-foreground leading-7 mb-4">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Button 
            onClick={() => navigate("/")} 
            variant="ghost" 
            className="mb-4 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News
          </Button>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Badge variant="secondary" className="text-sm font-medium">
              {article.company}
            </Badge>
            <Badge variant="outline" className={`text-sm ${getTrendColor()}`}>
              {article.ticker}
              {getTrendIcon()}
            </Badge>
            <Badge variant="outline" className="text-sm">
              {article.category}
            </Badge>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="article-featured-image"
            />
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          {article.fullArticle ? (
            formatArticleContent(article.fullArticle)
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Full article content is not available for this article.
              </p>
            </div>
          )}
        </div>

        {/* Article Footer */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {new Date(article.publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="text-sm">
                {article.company} ({article.ticker})
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
