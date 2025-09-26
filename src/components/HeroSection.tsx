import { TrendingUp, Globe, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Financial markets"
          className="h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[500px] items-center">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-primary">Real-time Market Intelligence</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Stay Ahead of 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Market Moves</span>
            </h1>

            <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
              Get comprehensive news, analysis, and insights on major public companies. 
              Make informed investment decisions with our real-time financial reporting.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                Start Reading News
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View Market Data
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="flex items-center space-x-3">
                <Globe className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">500+ Companies</p>
                  <p className="text-sm text-muted-foreground">Comprehensive Coverage</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <BarChart3 className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Real-time Updates</p>
                  <p className="text-sm text-muted-foreground">Market Intelligence</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Expert Analysis</p>
                  <p className="text-sm text-muted-foreground">Professional Insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};