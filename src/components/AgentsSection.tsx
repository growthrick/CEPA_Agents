import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Brain, Users, TrendingUp, Eye, Zap, Shield } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const agents = [
  {
    name: "GetFast",
    description: "AI-Accelerated content generators for high-impact marketing content",
    icon: Brain,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "ConsumerCraft",
    description: "Creates dynamic customer personas and comprehensive user journey maps",
    icon: Users,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "WorthBot",
    description: "Advanced lifetime value calculations and revenue optimization",
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    name: "TrendLens",
    description: "Real-time market trend analysis and competitive intelligence",
    icon: Eye,
    gradient: "from-orange-500 to-red-500"
  },
  {
    name: "DealGen",
    description: "AI-powered sales strategy and workflow optimization",
    icon: Zap,
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    name: "CompetitShip",
    description: "Comprehensive competitive analysis and market positioning",
    icon: Shield,
    gradient: "from-indigo-500 to-purple-500"
  }
];

const AgentsSection = () => {
  return (
    <section id="agents" className="py-20 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Background tech pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-primary-glow rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-primary rounded-full blur-3xl opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Meet the Six MyAibo Agents
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Autonomous AI systems that transform your business operations
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {agents.map((agent, index) => {
              const IconComponent = agent.icon;
              return (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-glow transition-all duration-500 hover:scale-105 border-border/30 hover:border-primary/50 bg-card/80 backdrop-blur-sm relative overflow-hidden">
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-4 mb-2">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${agent.gradient} shadow-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-primary text-xl font-bold group-hover:text-primary-glow transition-colors duration-300">
                          {agent.name}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {agent.description}
                      </CardDescription>
                    </CardHeader>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm text-primary font-medium">Auto-scrolling showcase</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;