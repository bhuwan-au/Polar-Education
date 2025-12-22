import { Star } from "lucide-react";

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dipesh Khadka",
      location: "Australia 🇦🇺",
      text: "I had visited several consultancies before, but none matched the trust and clarity Polar Education provided. Their detailed guidance made the entire Australia documentation process smooth and stress-free.",
      rating: 5,
      image: "/testimonials/dipesh-khadka.jpg",
    },
    {
      name: "Dikshya Khadka",
      location: "Australia 🇦🇺",
      text: "Polar Education truly turned my dream of studying abroad into reality. The team supported me at every step and ensured my application was handled with complete care.",
      rating: 5,
      image: "/testimonials/dikshya-khadka.jpg",
    },
    // {
    //   name: "Shabhana Shrestha",
    //   location: "Australia 🇦🇺",
    //   text: "The support I received from Polar Education was beyond my expectations. Their documentation guidance and one-on-one communication made the process surprisingly simple.",
    //   rating: 5,
    //   image: "/testimonials/shabhana-shrestha.jpg",
    // },
    {
      name: "Amit Shrestha",
      location: "Australia 🇦🇺",
      text: "Polar helped me with university selection, scholarship guidance, and documentation without any additional cost. Their transparency and dedication truly stood out.",
      rating: 5,
      image: "/testimonials/amit-shrestha.jpg",
    },
    {
      name: "Abishekh Kafle",
      location: "Canada 🇨🇦",
      text: "I was confused at the beginning, but Polar’s counsellors explained everything clearly. Their expert guidance made my Canada application journey easy and well-organized.",
      rating: 5,
      image: "/testimonials/abishekh-kafle.jpg",
    },
    {
      name: "Alisha Singh",
      location: "USA 🇺🇸",
      text: "The U.S. application process felt overwhelming at first, but Polar supported me from university selection to final submission. Their attention to detail made all the difference.",
      rating: 5,
      image: "/testimonials/alisha-singh.jpg",
    },
    {
      name: "Shubham Khadka",
      location: "Australia 🇦🇺",
      text: "From Kathmandu to my hometown, Polar’s continuous communication and clear documentation support made my entire journey effortless. I’m truly grateful for their guidance.",
      rating: 5,
      image: "/testimonials/shubham-khadka.jpg",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 from-blue-50 via-white to-blue-50">
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
              className="relative bg-white p-8 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md hover:border-orange-300 transition-all text-left flex flex-col h-full"
            >
              {/* Quotation mark background */}
              <div className="absolute top-4 right-6 text-6xl text-orange-100 font-serif select-none">
                “
              </div>

              {/* Content wrapper */}
              <div className="flex flex-col flex-1">
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

                {/* Testimonial text */}
                <p className="text-blue-800 italic mb-6 leading-relaxed text-lg relative z-10">
                  “{testimonial.text}”
                </p>

                {/* Profile pinned to bottom */}
                <div className="flex items-center gap-4 border-t border-blue-100 pt-4 mt-auto w-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-orange-400"
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
