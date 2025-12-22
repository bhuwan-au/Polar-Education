import {
  BookOpen,
  FileCheck,
  FileText,
  Globe,
  GraduationCap,
  HelpCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

function ServicesSection() {
  const services = [
    {
      image: "/services/education-counselling.jpg",
      title: "Education Counselling",
      description:
        "Personalized guidance to help you choose the right country, course, and institution that fits your career goals.",
    },
    {
      image: "/services/application-enrollment.jpg",
      title: "Application & Enrollment",
      description:
        "End-to-end support in preparing, verifying, and submitting your applications with complete documentation.",
    },
    {
      image: "/services/visa-assistance.jpg",
      title: "Visa Assistance",
      description:
        "Expert assistance through every step of the visa process with updated knowledge of country-specific requirements.",
    },
    {
      image: "/services/ielts-preparation.jpg",
      title: "IELTS Preparation",
      description:
        "Join our expert-led IELTS classes designed to help you achieve your target band score with confidence.",
    },
    {
      image: "/services/study-abroad-guidance.jpg",
      title: "Study Abroad Guidance",
      description:
        "Trusted support for studying in Australia, Canada, the UK, and the USA — from selection to settlement.",
    },
    {
      image: "/services/post-placement-support.jpg",
      title: "Post-Placement Support",
      description:
        "We continue to assist you even after you’ve reached your destination — ensuring a smooth transition abroad.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900">
            Our Services
          </h2>
          <p className="text-lg text-blue-600 max-w-2xl mx-auto">
            From counselling to post-arrival support — we guide you every step
            of your study abroad journey.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="relative group bg-white border border-blue-100 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 flex flex-col h-full overflow-hidden"
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                {/* Full-width Image */}
                <div className="w-full h-48 bg-blue-50 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1 relative z-10">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">
                    {service.title}
                  </h3>

                  <p className="text-blue-700/80 leading-relaxed flex-1">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-10 py-4 bg-linear-to-r from-blue-600 to-orange-500 text-white text-lg font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
