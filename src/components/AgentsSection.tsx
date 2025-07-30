import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const agents = [
  {
    name: "GetFast",
    description: "AI-Accelerated content generators turned for Article & English",
    details: "Perfect target accredation strategist 5x faster, GHL and Consultancy"
  },
  {
    name: "ConsumerCraft",
    description: "Creates dynamic customer personas & user-crowd maps",
    details: "Upload and turn product feedback & specs to positioning, Real-time Insights, 360° Customer View"
  },
  {
    name: "WorthBot",
    description: "Build Lifetime quick checks or revenues",
    details: "Reduce churn up to 5x from day to base, +20% FRR Store, +40% CLV"
  },
  {
    name: "TrendLens",
    description: "Stay live data-stack trends in real-time sets",
    details: "Stay live competitive before Competition even starts, Social monitoring, +2-5x Marketing"
  },
  {
    name: "DealGen",
    description: "Online AI strategy/data workflow insights, custom-written casual, ",
    details: "Use ML & automation marketing and, +20% Higher ROI, Auto Optimization"
  },
  {
    name: "CompetitShip",
    description: "AI-powered every move you \"cash tech",
    details: "Constantly file competitive wall products and efficiency, Predictive file insights, Game/Test"
  }
];

const AgentsSection = () => {
  return (
    <section id="agents" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Meet the Six MyAibo Agents
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Autonomous AI systems that transform your business operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <Card key={index} className="group hover:shadow-primary transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/50">
              <CardHeader>
                <CardTitle className="text-primary text-xl font-bold">
                  {agent.name}
                </CardTitle>
                <CardDescription className="text-base">
                  {agent.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {agent.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;