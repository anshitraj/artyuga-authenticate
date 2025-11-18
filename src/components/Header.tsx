import { Link } from "react-router-dom";
import { Palette } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center glow-purple transition-all group-hover:scale-110">
              <Palette className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-glow">Artyuga Marketplace</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Browse Art
            </Link>
            <a 
              href="#about" 
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
