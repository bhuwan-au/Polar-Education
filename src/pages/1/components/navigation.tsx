import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-ftD5bEMMDZGiUutnXqwkIaFwT9PS1F.jpeg"
              alt="Polar Education Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded font-medium"
            >
              About
            </Link>
            <Link
              to="/services"
              className="block px-4 py-2 text-foreground hover:bg-secondary rounded font-medium"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 bg-primary text-primary-foreground rounded font-semibold"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
