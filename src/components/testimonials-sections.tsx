import { Star } from "lucide-react";

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

export default TestimonialsSection;
