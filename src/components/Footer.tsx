import myaiboLogo from "@/assets/myaibo-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img src={myaiboLogo} alt="MyAibo" className="h-8 w-auto mb-4 brightness-0 invert" />
            <p className="text-background/80 mb-4 max-w-md">
              Building the future of AI, one autonomous agent at a time. Transform your business with agentic AI products that accelerate growth.
            </p>
            <div className="text-sm text-background/60">
              <p>info@myaibo.in</p>
              <p>+91 9370 023466</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">AI Agents</h4>
            <ul className="space-y-2 text-background/80 text-sm">
              <li>GetFast</li>
              <li>ConsumerCraft</li>
              <li>WorthBot</li>
              <li>TrendLens</li>
              <li>DealGen</li>
              <li>CompetitShip</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-background/80 text-sm">
              <li><a href="#methodology" className="hover:text-background transition-colors">Methodology</a></li>
              <li><a href="#success" className="hover:text-background transition-colors">Success Stories</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60 text-sm">
          <p>MyAibo - Building the future of AI, one autonomous agent at a time.</p>
        </div>
      </div>
      
      {/* Purple section at bottom */}
      <div className="bg-primary py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white text-sm">&copy; 2024 MyAibo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;