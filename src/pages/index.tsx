import CTASection from "@/components/cta-section";
import DestinationsSection from "@/components/destinations-section";
import FAQSection from "@/components/faq-section";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import TestimonialsSection from "@/components/testimonials-sections";
import WhyChooseSection from "@/components/why-choose-section";

export default function Homepage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <DestinationsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
