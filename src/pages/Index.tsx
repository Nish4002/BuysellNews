import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { NewsGrid } from "@/components/NewsGrid";
import { newsArticles } from "@/data/newsData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <NewsGrid articles={newsArticles} />
      </main>
      
      <footer className="bg-gradient-subtle border-t border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-semibold text-foreground mb-4">BuySellNews</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your trusted source for comprehensive financial news and market analysis. 
                Stay informed with real-time updates on major public companies and market trends.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Earnings</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Technology</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Business</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Market Analysis</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2024 BuySellNews. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
