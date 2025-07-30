import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to Lead in an AI-First World?
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90">
          Schedule your Free AI Strategy Session and see your exact intelligence score.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-md mx-auto">
          <Button 
            variant="secondary" 
            size="lg" 
            className="w-full sm:w-auto text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
          >
            Book Now
          </Button>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm opacity-75">
            info@myaibo.in<br />
            +91 9370 023466
          </p>
          <p className="text-xs mt-4 opacity-60">
            MyAibo • Building the future of AI, one autonomous agent at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;