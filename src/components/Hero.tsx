import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary-glow rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl opacity-15 animate-pulse delay-1000"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-6">
            Find Your Strategy Resource Center
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
          MyAibo - Agentic AI Products That Accelerate Growth
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto">
          AI-Driven Marketing, Sales & Analytics - Tailored for the Fastest-Growing companies
        </p>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Six autonomous agents. Mission-to-deploy. Results you can measure.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Get Fast
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;