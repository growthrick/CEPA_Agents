import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    title: "Enterprise-Grade Experience",
    description: "Enterprise-grade AI solutions built for scale, security, and end-to-end business impact."
  },
  {
    title: "100% Client Satisfaction", 
    description: "Across 3T AI client portfolio"
  },
  {
    title: "Speed-to-Value",
    description: "Typical AI rollout takes 6-12 months, but MyAibo takes just six in four weeks."
  },
  {
    title: "Cultural Fluency",
    description: "Agents have insider industry wisdom to ensure fluent compliance and professional guidance around diverse cultures."
  },
  {
    title: "Transparent Pricing",
    description: "Global perspective - flexible subscription and tailored investment aligned with your system cycle."
  },
  {
    title: "Scalable Architecture", 
    description: "Built for growth and performance - scalable systems that evolve with your business needs."
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Why Leading Companies Choose MyAibo
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-primary transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/50">
              <CardHeader>
                <CardTitle className="text-primary text-lg font-bold">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;