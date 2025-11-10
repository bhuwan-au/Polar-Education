import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Polar Education</h3>
            <p className="opacity-80 leading-relaxed">
              Professional education consultancy helping students achieve their
              global education goals since 2025.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="opacity-80">Education Counselling</li>
              <li className="opacity-80">Application & Enrollment</li>
              <li className="opacity-80">Visa Assistance</li>
              <li className="opacity-80">IELTS Preparation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span className="opacity-80">
                  2nd Floor Star Mall, Putalisadak, Kathmandu, Nepal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} />
                <a
                  href="tel:+977-01-4540500"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  +977-01-4540500
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} />
                <a
                  href="mailto:info@polareducation.com.np"
                  className="opacity-80 hover:opacity-100 transition-opacity text-sm"
                >
                  info@polareducation.com.np
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="text-center opacity-80">
            &copy; {new Date().getFullYear()} Polar Education Private Limited.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
