import TeamSection from "@/components/about/teams-section";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">About Polar Education</h1>
          <p className="text-xl opacity-90">
            Your trusted partner in achieving global education success
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-foreground">Our Story</h2>
          <div className="prose prose-lg text-muted-foreground space-y-6">
            <p>
              Polar Education Private Limited is a trusted education consultancy
              based in Kathmandu, Nepal, founded in 2025 with the vision of
              helping students achieve their global education goals. What began
              as a small team of passionate educators has grown into a
              professional consultancy that has guided hundreds of students to
              universities across Australia, Canada, the USA, and the UK.
            </p>
            <p>
              We understand the challenges students face when pursuing education
              abroad. From selecting the right university and course to
              navigating visa applications and preparing for entrance exams, the
              journey can be overwhelming. That's where we come in. Our team of
              experienced counselors is dedicated to providing personalized,
              ethical, and transparent guidance every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50 border-y border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
          <div className="p-6 bg-card rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-3 text-primary">Our Vision</h3>
            <p className="text-muted-foreground italic leading-relaxed">
              To be Nepal’s most trusted and ethical education consultancy,
              empowering students to achieve their dreams of studying at
              world-class universities and building successful international
              careers.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-3 text-primary">
              Our Mission
            </h3>
            <p className="text-muted-foreground italic leading-relaxed">
              To provide personalized, transparent, and professional guidance
              that helps students make informed decisions about their higher
              education and career paths, ensuring success in global
              institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-primary">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Integrity",
                desc: "We operate with honesty and uphold strong ethical standards.",
              },
              {
                title: "Transparency",
                desc: "We communicate clearly and keep our students informed at every step.",
              },
              {
                title: "Professionalism",
                desc: "We offer expert guidance based on real experience and global insights.",
              },
              {
                title: "Student-Centered",
                desc: "Your success is our mission — every decision starts with you.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="font-bold text-lg mb-2 text-foreground">
                  {value.title}
                </h4>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <TeamSection />
    </main>
  );
}
