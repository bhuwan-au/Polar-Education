import { Award, CheckCircle, Users, Zap } from "lucide-react";

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

export default WhyChooseSection;