import { Link } from "react-router-dom";
import { contactInfo } from "./contact-info";
import { Mail, MapPin, Phone } from "lucide-react";

const socialIconUrls: Record<string, string> = {
  facebook: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/facebook.svg",
  instagram: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/instagram.svg",
  linkedin: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/linkedin.svg",
  youtube: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/youtube.svg",
  x: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/twitter.svg",
  tiktok: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/tiktok.svg",
};

export default function Footer() {
  return (
    <footer className="bg-secondary text-accent py-16 px-4 sm:px-6 lg:px-8">
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
                  to="/gallery"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Gallery
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

          {/* Contact Info + Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 shrink-0" />
                <span className="opacity-80">{contactInfo.address}</span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  {contactInfo.phone}
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="opacity-80 hover:opacity-100 transition-opacity text-sm"
                >
                  {contactInfo.email}
                </a>
              </li>

              {/* Social Media */}
              <li className="flex items-center gap-4 mt-2">
                {Object.entries(contactInfo.social).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  >
                    <img
                      src={socialIconUrls[key]}
                      alt={key}
                      className="w-5 h-5"
                      style={{
                        filter:
                          "invert(54%) sepia(72%) saturate(4653%) hue-rotate(4deg) brightness(101%) contrast(101%)",
                      }}
                    />
                  </a>
                ))}
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
