import { Award, CheckCircle, Users, Zap } from "lucide-react";

function WhyChooseSection() {
  const reasons = [
    {
      image: "/why/expert-guidance.jpg",
      title: "Expert Guidance",
      description:
        "Our team has guided hundreds of students to top universities worldwide with proven expertise.",
    },
    {
      image: "/why/professional-standards.jpg",
      title: "Professional Standards",
      description:
        "Ethical, transparent, and reliable approach tailored to each student’s goals.",
    },
    {
      image: "/why/personalized-support.jpg",
      title: "Personalized Support",
      description:
        "Dedicated one-on-one counseling to align your strengths with the best academic paths.",
    },
    {
      image: "/why/complete-assistance.jpg",
      title: "Complete Assistance",
      description:
        "From counselling to visa and beyond — we ensure a smooth, confident journey abroad.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white via-blue-50 to-white">
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
            return (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden h-72 group shadow-md hover:shadow-xl transition-all"
              >
                {/* Background Image */}
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/20" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-end text-center p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed text-sm">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;
