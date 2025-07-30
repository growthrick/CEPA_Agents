import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/lovable-uploads/8657148a-df54-4e3f-ba2b-572992cb0ef8.png" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-background/40"></div>
      </div>
      
      {/* Tech grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-glow rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Content overlay rectangle */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className="bg-background/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-primary/20 text-white rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
              Find Your Strategy Resource Center
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              MyAibo
            </span>
            <br />
            <span className="text-white">
              Agentic AI Products That Accelerate Growth
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-4xl mx-auto">
            AI-Driven Marketing, Sales & Analytics - Tailored for the Fastest-Growing companies
          </p>
          
          <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto">
            Six autonomous agents. Mission-to-deploy. Results you can measure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary-glow">
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;