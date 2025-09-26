import { useState } from "react";
import { NewsCard, NewsArticle } from "./NewsCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, Search } from "lucide-react";

interface NewsGridProps {
  articles: NewsArticle[];
}

export const NewsGrid = ({ articles }: NewsGridProps) => {
  const [selectedCompany, setSelectedCompany] = useState<string>("All");

  const companies = ["All", ...Array.from(new Set(articles.map(article => article.company)))];

  const filteredArticles = selectedCompany === "All" 
    ? articles 
    : articles.filter(article => article.company === selectedCompany);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Latest News</h2>
            <p className="mt-2 text-muted-foreground">
              Stay updated with the latest developments from major public companies
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filter by:</span>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {companies.map((company) => (
            <Badge
              key={company}
              variant={selectedCompany === company ? "default" : "outline"}
              className={`cursor-pointer transition-colors ${
                selectedCompany === company
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-primary/10 hover:text-primary"
              }`}
              onClick={() => setSelectedCompany(company)}
            >
              {company}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((article) => (
          <NewsCard
            key={article.id}
            article={article}
            onClick={() => {
              // Future: Navigate to full article
              console.log("Opening article:", article.title);
            }}
          />
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12">
          <Search className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No articles found</h3>
          <p className="text-muted-foreground text-center">
            Try selecting a different company or check back later for new content.
          </p>
        </div>
      )}

      <div className="mt-12 text-center">
        <Button 
          variant="outline" 
          size="lg" 
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          Load More Articles
        </Button>
      </div>
    </section>
  );
};