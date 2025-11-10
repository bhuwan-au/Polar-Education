import {
  BookOpen,
  FileText,
  Dessert as Passport,
  Volume2,
  Users,
  CheckCircle,
} from "lucide-react";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

const services = [
  {
    icon: BookOpen,
    title: "Education Counseling",
    description:
      "Personalized guidance to choose the right course and destination based on your academic profile, interests, and career goals.",
    details: [
      "University selection based on your profile",
      "Course recommendation and comparison",
      "Country-specific guidance",
      "Career path planning",
    ],
  },
  {
    icon: FileText,
    title: "Application & Enrollment",
    description:
      "We handle the entire application process, ensuring all documents are properly prepared and submitted on time.",
    details: [
      "Application form assistance",
      "Personal statement writing",
      "Document preparation and verification",
      "University submission handling",
    ],
  },
  {
    icon: Passport,
    title: "Visa Assistance",
    description:
      "Expert support navigating visa requirements and documentation for your chosen destination country.",
    details: [
      "Visa requirement consultation",
      "Document preparation checklist",
      "Application process guidance",
      "Interview preparation",
    ],
  },
  {
    icon: Volume2,
    title: "IELTS Preparation",
    description:
      "Coaching and resources to achieve your required IELTS band score for university admission and visa requirements.",
    details: [
      "Test format overview",
      "Targeted skill development",
      "Practice materials",
      "Mock test sessions",
    ],
  },
  {
    icon: Users,
    title: "Post-Arrival Support",
    description:
      "Continued support even after you arrive at your university, helping with accommodation and adjustment.",
    details: [
      "Accommodation guidance",
      "Orientation assistance",
      "Ongoing mentoring",
      "Career guidance",
    ],
  },
  {
    icon: CheckCircle,
    title: "Scholarship Guidance",
    description:
      "Help identifying and applying for scholarships to make your education more affordable.",
    details: [
      "Scholarship search assistance",
      "Application support",
      "Document preparation",
      "Success tips and strategies",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

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
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="mb-6 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <CheckCircle
                          size={18}
                          className="text-primary mt-0.5 flex-shrink-0"
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today to book your free consultation
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-lg"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
