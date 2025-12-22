import { CheckCircle } from "lucide-react";
import CTASection from "@/components/cta-section";

const services = [
  {
    image: "/services/education-counselling.jpg",
    title: "Education Counselling",
    description:
      "Personalized guidance to help you choose the right country, course, and institution that fits your career goals.",
    details: [
      "University selection based on your profile",
      "Course recommendation and comparison",
      "Country-specific guidance",
      "Career path planning",
    ],
  },
  {
    image: "/services/application-enrollment.jpg",
    title: "Application & Enrollment",
    description:
      "End-to-end support in preparing, verifying, and submitting your applications with complete documentation.",
    details: [
      "Application form assistance",
      "Personal statement writing",
      "Document preparation and verification",
      "University submission handling",
    ],
  },
  {
    image: "/services/visa-assistance.jpg",
    title: "Visa Assistance",
    description:
      "Expert assistance through every step of the visa process with updated knowledge of country-specific requirements.",
    details: [
      "Visa requirement consultation",
      "Document preparation checklist",
      "Application process guidance",
      "Interview preparation",
    ],
  },
  {
    image: "/services/ielts-preparation.jpg",
    title: "IELTS Preparation",
    description:
      "Join our expert-led IELTS classes designed to help you achieve your target band score with confidence.",
    details: [
      "Test format overview",
      "Targeted skill development",
      "Practice materials",
      "Mock test sessions",
    ],
  },
  {
    image: "/services/study-abroad-guidance.jpg",
    title: "Study Abroad Guidance",
    description:
      "Trusted support for studying in Australia, Canada, the UK, and the USA — from selection to settlement.",
    details: [
      "Country and university selection",
      "Pre-departure guidance",
      "Documentation support",
      "Settlement assistance",
    ],
  },
  {
    image: "/services/post-placement-support.jpg",
    title: "Post-Placement Support",
    description:
      "We continue to assist you even after you’ve reached your destination — ensuring a smooth transition abroad.",
    details: [
      "Accommodation guidance",
      "Orientation assistance",
      "Ongoing mentoring",
      "Career guidance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl opacity-90">
            Comprehensive support for every step of your study abroad journey
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="bg-card rounded-lg border border-border hover:shadow-lg transition-shadow flex flex-col h-full overflow-hidden"
                >
                  {/* Full-width image */}
                  <div className="w-full h-44 bg-muted overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    {/* Details pinned lower */}
                    <ul className="space-y-2 mt-auto">
                      {service.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <CheckCircle
                            size={18}
                            className="text-primary mt-0.5 shrink-0"
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </main>
  );
}
