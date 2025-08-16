import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="bg-white backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {!isHomePage && (
              <Link to="/">
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
            )}
            <Link to="/">
              <h1 className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity cursor-pointer">
                Tuittor
              </h1>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/about"
              className="text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium"
            >
              About
            </Link>
            <Link
              to="/privacy"
              className="text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation (hidden by default) */}
        <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
          <nav className="flex flex-col gap-3 pt-4">
            <Link
              to="/about"
              className="text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium"
            >
              About
            </Link>
            <Link
              to="/privacy"
              className="text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
