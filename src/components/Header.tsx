import { Button } from "@/components/ui/button";
import { ArrowLeft, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="bg-white backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {!isHomePage && (
                <div className="hidden sm:block">
                  <Link to="/">
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                  </Button>
                </Link>
                </div>
                
              )}
              <Link to="/">
                <h1 className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity cursor-pointer">
                  Tuittor
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
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
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={toggleMobileMenu}
                className="p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-600" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Side Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeMobileMenu}
          />
          
          {/* Side Menu */}
          <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <Link to="/" onClick={closeMobileMenu}>
                  <h1 className="text-2xl font-bold gradient-text">Tuittor</h1>
                </Link>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={closeMobileMenu}
                  className="p-2"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-6">
                <div className="space-y-6">
                  <Link
                    to="/about"
                    onClick={closeMobileMenu}
                    className="block text-lg text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium py-2"
                  >
                    About
                  </Link>
                  <Link
                    to="/privacy"
                    onClick={closeMobileMenu}
                    className="block text-lg text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium py-2"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/contact"
                    onClick={closeMobileMenu}
                    className="block text-lg text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium py-2"
                  >
                    Contact
                  </Link>
                </div>
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200">
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
