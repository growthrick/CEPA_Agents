const steps = [
  {
    step: "01",
    title: "Discovery",
    description: "Comprehensive strategy setting outline to AI market penetration"
  },
  {
    step: "02", 
    title: "Blueprint",
    description: "Scalable architecture mapped to your tech stack and customary needs"
  },
  {
    step: "03",
    title: "Build", 
    description: "Agile sprint with weekly feedback loops to ensure rapid and high-parameter delivery"
  },
  {
    step: "04",
    title: "Launch & Learn",
    description: "Seamless deployment with alternate training for continued gains"
  }
];

const MethodologySection = () => {
  return (
    <section id="methodology" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Proven 4-Step Methodology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic approach to AI transformation that delivers measurable results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:shadow-glow transition-all duration-300">
                  {step.step}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary-glow transform -translate-x-10"></div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;