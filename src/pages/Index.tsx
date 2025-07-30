import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AgentsSection from "@/components/AgentsSection";
import MethodologySection from "@/components/MethodologySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import SuccessSection from "@/components/SuccessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AgentsSection />
      <WhyChooseSection />
      <MethodologySection />
      <SuccessSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
