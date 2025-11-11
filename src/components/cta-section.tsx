import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Separator } from "./ui/separator";

function CTASection() {
  const location = useLocation();
  return (
    <>
      <section className="py-20 px-6 lg:px-8 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Ready to Start Your Study Abroad Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed text-accent">
            Let us guide you to achieve your academic and career goals at top
            universities worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Book Your Free Consultation
              <ArrowRight size={20} />
            </Link>

            {!location.pathname.startsWith("/services") && (
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/10 transition-colors text-lg"
              >
                Explore Services
              </Link>
            )}
          </div>
        </div>
      </section>
      <Separator className="bg-primary" />
    </>
  );
}

export default CTASection;
