import {
  ArrowRight,
  CheckCircle,
  Award,
  Users,
  Zap,
  BookOpen,
  FileText,
  Volume2,
  Globe,
  HelpCircle,
  Star,
  FileCheck,
  GraduationCap,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { useState } from "react";

// Hero Section

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-br from-[#0a1e3d] via-[#1e3a8a] to-[#fb923c] text-white">
      {/* Floating flag background layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] left-[10%] flex flex-wrap gap-6 opacity-40">
          <img
            src="https://flagcdn.com/w40/au.png"
            alt="Australia"
            className="flag-float animate-float1"
          />
          <img
            src="https://flagcdn.com/w40/gb.png"
            alt="United Kingdom"
            className="flag-float animate-float2 ml-4 mt-3"
          />
          <img
            src="https://flagcdn.com/w40/ca.png"
            alt="Canada"
            className="flag-float animate-float3 ml-8 mt-6"
          />
          <img
            src="https://flagcdn.com/w40/us.png"
            alt="USA"
            className="flag-float animate-float4 ml-12 mt-2"
          />
        </div>
      </div>

      {/* Hero content grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Your Gateway to{" "}
            <span className="text-orange-400">Global Education</span> Success
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-blue-100 max-w-xl mx-auto lg:mx-0">
            Reliable, ethical, and professional guidance for students aspiring
            to study in Australia, Canada, the UK, and the USA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-orange-500/40 text-lg"
            >
              Book Free Consultation
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border-2 border-blue-200 text-blue-100 px-8 py-4 rounded-lg font-semibold hover:bg-blue-800/20 transition-all text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right side: image with overlayed text */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full h-[500px] max-h-[70vh] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20">
            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1200&q=80"
              alt="Student studying abroad"
              className="w-full h-full object-cover"
            />

            {/* Gradient overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e3d]/70 via-transparent to-transparent" />

            {/* Text inside the image */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-blue-900/70 backdrop-blur-md px-6 py-3 rounded-full text-sm sm:text-base shadow-lg border border-white/10 text-center">
              🎓 Empowering students to achieve their dreams abroad
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 mt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { num: "500+", label: "Students Guided" },
          { num: "10+", label: "Years Experience" },
          { num: "98%", label: "Success Rate" },
          { num: "4", label: "Top Destinations" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="p-6 bg-blue-800/40 rounded-lg backdrop-blur-sm border border-blue-300/20 hover:bg-blue-700/50 transition-all text-center"
          >
            <div className="text-3xl font-bold text-orange-400 mb-2">
              {stat.num}
            </div>
            <div className="text-blue-100">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Animation styles */}
      <style>{`
        .flag-float {
          width: 48px;
          height: auto;
          filter: drop-shadow(0 0 10px rgba(255,255,255,0.25));
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }

        .animate-float1 { animation: float 6s ease-in-out infinite; }
        .animate-float2 { animation: float 7s ease-in-out infinite 1s; }
        .animate-float3 { animation: float 5.5s ease-in-out infinite 2s; }
        .animate-float4 { animation: float 6.5s ease-in-out infinite 3s; }
      `}</style>
    </section>
  );
}
// Why Choose Section
function WhyChooseSection() {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Expert Guidance",
      description:
        "Our team has guided hundreds of students to top universities worldwide with proven expertise.",
    },
    {
      icon: Award,
      title: "Professional Standards",
      description:
        "Ethical, transparent, and reliable approach tailored to each student’s goals.",
    },
    {
      icon: Users,
      title: "Personalized Support",
      description:
        "Dedicated one-on-one counseling to align your strengths with the best academic paths.",
    },
    {
      icon: Zap,
      title: "Complete Assistance",
      description:
        "From counselling to visa and beyond — we ensure a smooth, confident journey abroad.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          Why Choose <span className="text-orange-500">Polar Education?</span>
        </h2>
        <p className="text-lg text-blue-700/80 max-w-2xl mx-auto mb-16">
          We combine years of global experience with genuine dedication to your
          success abroad.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-blue-100 shadow-sm hover:shadow-md hover:border-orange-300 transition-all"
              >
                <div className="mb-5 w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-blue-700" />
                </div>

                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-blue-700/80 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: BookOpen,
      title: "Education Counselling",
      description:
        "Personalized guidance to help you choose the right country, course, and institution that fits your career goals.",
    },
    {
      icon: FileText,
      title: "Application & Enrollment",
      description:
        "End-to-end support in preparing, verifying, and submitting your applications with complete documentation.",
    },
    {
      icon: FileCheck,
      title: "Visa Assistance",
      description:
        "Expert assistance through every step of the visa process with updated knowledge of country-specific requirements.",
    },
    {
      icon: GraduationCap,
      title: "IELTS Preparation",
      description:
        "Join our expert-led IELTS classes designed to help you achieve your target band score with confidence.",
    },
    {
      icon: Globe,
      title: "Study Abroad Guidance",
      description:
        "Trusted support for studying in Australia, Canada, the UK, and the USA — from selection to settlement.",
    },
    {
      icon: HelpCircle,
      title: "Post-Placement Support",
      description:
        "We continue to assist you even after you’ve reached your destination — ensuring a smooth transition abroad.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
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
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative group bg-white border border-blue-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-400 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500" />

                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-100 text-blue-600 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-orange-400 group-hover:text-white transition-all">
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-blue-900">
                  {service.title}
                </h3>
                <p className="text-blue-700/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white text-lg font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

// Destinations Section
function DestinationsSection() {
  const destinations = [
    {
      country: "Australia",
      description:
        "Top universities with world-class education and lifestyle opportunities.",
      flag: "https://flagcdn.com/w80/au.png",
    },
    {
      country: "Canada",
      description:
        "Renowned institutions with an emphasis on research and innovation.",
      flag: "https://flagcdn.com/w80/ca.png",
    },
    {
      country: "United Kingdom",
      description:
        "Historic universities known globally for academic excellence.",
      flag: "https://flagcdn.com/w80/gb.png",
    },
    {
      country: "United States",
      description:
        "Diverse educational opportunities across prestigious institutions.",
      flag: "https://flagcdn.com/w80/us.png",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          Study <span className="text-orange-500">Destinations</span>
        </h2>
        <p className="text-lg text-blue-700/80 max-w-2xl mx-auto mb-16">
          We guide students to the most sought-after study destinations around
          the world.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-blue-100 hover:border-orange-300 hover:shadow-md transition-all"
            >
              <img
                src={destination.flag}
                alt={destination.country}
                className="w-16 h-12 rounded-md mb-6 shadow-sm"
              />
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                {destination.country}
              </h3>
              <p className="text-blue-700/80 leading-relaxed">
                {destination.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Kathmandu, Nepal",
      text: "Polar Education made my study abroad journey incredibly smooth. Their expert guidance helped me secure admission to my dream university in Australia!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rahul Poudel",
      location: "Kathmandu, Nepal",
      text: "The team was incredibly supportive throughout the entire process. From application to visa, everything was handled professionally and on time.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "Aisha Khan",
      location: "Kathmandu, Nepal",
      text: "I highly recommend Polar Education. Their IELTS preparation classes were excellent and helped me achieve my target score!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          Student <span className="text-orange-500">Success Stories</span>
        </h2>
        <p className="text-lg text-blue-700/80 max-w-2xl mx-auto mb-16">
          Hear from students who turned their study abroad dreams into reality
          with Polar Education.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md hover:border-orange-300 transition-all text-left"
            >
              {/* Quotation mark background */}
              <div className="absolute top-4 right-6 text-6xl text-orange-100 font-serif select-none">
                “
              </div>

              <div className="flex flex-col items-start">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-blue-800 italic mb-6 leading-relaxed text-lg relative z-10">
                  “{testimonial.text}”
                </p>

                {/* Profile */}
                <div className="flex items-center gap-4 border-t border-blue-100 pt-4 mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-orange-400"
                  />
                  <div>
                    <p className="font-semibold text-blue-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-blue-700/70">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Team Section
function TeamSection() {
  const team = [
    {
      name: "Sailendra Bikram Thapa",
      role: "Founder & CEO",
      qualification: "Masters in Mass Communication, Tribhuvan University",
      bio: "As CEO of Polar Education, Sailendra oversees office operations and guides students in achieving their academic and career aspirations in international education.",
    },
    {
      name: "Mahananda Timsina",
      role: "Co-Founder",
      qualification: "Education Consultant",
      bio: "Part of the founding team dedicated to building a better society through quality education access.",
    },
    {
      name: "Tek Bahadur Khadka",
      role: "Co-Founder",
      qualification: "Education Consultant",
      bio: "Part of the founding team committed to providing reliable and ethical guidance.",
    },
    {
      name: "Bibek Timsina",
      role: "Senior Counselor",
      qualification:
        "Masters in Information System Engineering, Bachelor in Engineering",
      bio: "Over 10 years of experience as a qualified student agent counselor. Former counselor at Self Apply Center (SAC). Devoted to helping students transform career aspirations into reality.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          Meet Our <span className="text-orange-500">Team</span>
        </h2>
        <p className="text-lg text-blue-700/80 mb-6">
          Founded by a team of passionate education professionals
        </p>
        <p className="text-base text-blue-700/70 max-w-3xl mx-auto leading-relaxed mb-16">
          Our dedicated team of experts is committed to guiding students step by
          step, from their current stage to the lecture halls of prestigious
          international universities and colleges.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md hover:-translate-y-1 transition-transform"
            >
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-orange-400 flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>

              {/* Info */}
              <h3 className="text-xl font-semibold text-blue-900 mb-1">
                {member.name}
              </h3>
              <p className="text-orange-500 font-medium text-sm mb-2">
                {member.role}
              </p>
              <p className="text-xs text-blue-700/70 mb-4">
                {member.qualification}
              </p>
              <p className="text-blue-700/80 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Start Your Study Abroad Journey?
        </h2>
        <p className="text-xl mb-8 opacity-95 leading-relaxed">
          Let us guide you to achieve your academic and career goals at top
          universities worldwide
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
          >
            Book Your Free Consultation
            <ArrowRight size={20} />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-lg"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}

// faq section
function FAQSection() {
  const faqs = [
    {
      question: "What countries do you provide guidance for?",
      answer:
        "We guide students for study opportunities in Australia, Canada, the United Kingdom, and the United States.",
    },
    {
      question: "Do you provide visa assistance?",
      answer:
        "Yes, our team offers comprehensive support for the visa application process, including documentation review and interview preparation.",
    },
    {
      question: "Can you help with IELTS preparation?",
      answer:
        "Absolutely! We provide dedicated IELTS coaching at our Kathmandu office to help students achieve their desired band scores.",
    },
    {
      question: "Do you assist with university applications?",
      answer:
        "Yes, we assist students with the complete application process including selecting universities, preparing documents, and submitting applications.",
    },
    {
      question: "Do you offer post-placement support?",
      answer:
        "Yes, our support continues even after students secure admission, helping them adjust smoothly to their new environment.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          Frequently <span className="text-orange-500">Asked Questions</span>
        </h2>
        <p className="text-lg text-blue-700/80">
          Find answers to the most common questions about our study abroad services.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-blue-200 rounded-xl shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
            >
              <span className="text-blue-900 font-semibold text-lg">{faq.question}</span>
              <ChevronDown
                className={`w-6 h-6 text-orange-500 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-blue-700/80 text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Homepage1() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <DestinationsSection />
      <TestimonialsSection />
      {/* <TeamSection /> */}
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
