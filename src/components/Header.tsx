import { Button } from "@/components/ui/button";
import myaiboLogo from "@/assets/myaibo-logo.png";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={myaiboLogo} alt="MyAibo" className="h-12 w-auto" />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#agents" className="text-foreground hover:text-primary transition-colors font-bold">
            AI Agents
          </a>
          <a href="#methodology" className="text-foreground hover:text-primary transition-colors font-bold">
            Methodology
          </a>
          <a href="#success" className="text-foreground hover:text-primary transition-colors font-bold">
            Success Stories
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors font-bold">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Get Started
          </Button>
          <Button variant="hero" size="sm">
            Book Free Strategy Session
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;