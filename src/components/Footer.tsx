import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text mb-2">Tuittor</h3>
            <p className="text-gray-400">Learn Smarter. Live.</p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-8 text-sm">
            <Link to="/about" className="text-gray-400 hover:text-primary transition-colors duration-300">
              About
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-primary transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>

        <div className="border-t border-border/30 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            © 2025 Tuittor. All rights reserved. Made with 
            <Heart className="w-4 h-4 text-red-500 animate-pulse" /> 
            for learners everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;