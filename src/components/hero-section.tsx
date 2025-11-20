import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
              className="flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-orange-500/40 text-lg"
            >
              Book Free Consultation
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/about"
              className="flex justify-center items-center gap-2 border-2 border-blue-200 text-blue-100 px-8 py-4 rounded-lg font-semibold hover:bg-blue-800/20 transition-all text-lg"
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

export default HeroSection;
