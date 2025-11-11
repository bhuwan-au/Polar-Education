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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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

export default TeamSection;
