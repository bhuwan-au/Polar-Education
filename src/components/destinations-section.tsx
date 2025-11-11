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

export default DestinationsSection;