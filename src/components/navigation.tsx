import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleClose = () => setIsSheetOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo-3.jpg"
              alt="Polar Education Logo"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="relative group font-medium text-foreground px-2 py-1 hover:text-primary transition-colors"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/about"
              className="relative group font-medium text-foreground px-2 py-1 hover:text-primary transition-colors"
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/services"
              className="relative group font-medium text-foreground px-2 py-1 hover:text-primary transition-colors"
            >
              Services
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/gallery"
              className="relative group font-medium text-foreground px-2 py-1 hover:text-primary transition-colors"
            >
              Gallery
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg shadow-md hover:shadow-lg hover:opacity-95 transition-all font-semibold"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" aria-label="Open menu">
                  <Menu size={24} className="text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 p-6">
                <div className="flex justify-between items-center mb-6">
                  <Link
                    to="/"
                    onClick={handleClose}
                    className="flex items-center gap-3"
                  >
                    <img
                      src="/logo-3.jpg"
                      alt="Polar Education Logo"
                      className="h-16 w-auto"
                    />
                  </Link>
                </div>

                <ul className="space-y-4">
                  <li>
                    <Link
                      to="/"
                      onClick={handleClose}
                      className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      onClick={handleClose}
                      className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      onClick={handleClose}
                      className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery"
                      onClick={handleClose}
                      className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      onClick={handleClose}
                      className="block text-lg font-semibold bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="h-0.5 bg-gray-200">
        <div
          className="h-0.5 bg-primary transition-all rounded-xl"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
}
