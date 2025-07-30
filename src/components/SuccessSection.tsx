import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
  {
    metric: "92%",
    label: "TradeLance Beauty",
    description: "Time struggling to selling - MyAibo resulted our organization time to a week engine within 30 days."
  },
  {
    metric: "50%",
    label: "iFarmedia SaaS", 
    description: "MyAibo-powered-proven campaigns cut spend while doubling qualified leads."
  },
  {
    metric: "4x",
    label: "Revia Hardware",
    description: "Thanks to our launch multi-tuned product gaps-towards our reach."
  }
];

const testimonials = [
  {
    quote: "Precision was so from anything for... MyAibo AI finds the excess to outcomes why your team brand.",
    author: "Jennifer, President G.V. Global"
  },
  {
    quote: "Unlike our previous because our companies ROI by 47% in two months.",
    author: "Head of Growth, Regional Factor.A"
  },
  {
    quote: "The result transparent AI teams we've worked with... no noise, not budget, and always innovating.",
    author: "CMO, Enterprise Bendis"
  }
];

const SuccessSection = () => {
  return (
    <section id="success" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Success Stories & Metrics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from companies that transformed with MyAibo
          </p>
        </div>
        
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((item, index) => (
            <Card key={index} className="text-center group hover:shadow-primary transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {item.metric}
                </CardTitle>
                <p className="text-primary font-semibold">
                  {item.label}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-12 text-foreground">
            What Our Clients Say
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-primary transition-all duration-300">
              <CardContent className="pt-6">
                <blockquote className="text-muted-foreground italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-primary font-semibold">
                  — {testimonial.author}
                </cite>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;