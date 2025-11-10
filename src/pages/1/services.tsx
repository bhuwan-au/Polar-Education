import Footer from "./components/footer";
import Navigation from "./components/navigation";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Our Vision
            </h3>
            <p className="text-muted-foreground">
              To be the most trusted and ethical education consultancy in Nepal,
              empowering students to achieve their dreams of studying at
              world-class universities and building successful international
              careers.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Our Mission
            </h3>
            <p className="text-muted-foreground">
              To provide personalized, transparent, and professional guidance
              that helps students make informed decisions about their higher
              education and career paths, ensuring their success in global
              institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-foreground text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Integrity",
                desc: "We operate with honesty and ethical principles",
              },
              {
                title: "Transparency",
                desc: "Clear communication at every step",
              },
              {
                title: "Professionalism",
                desc: "Expert guidance based on experience",
              },
              {
                title: "Student-Centered",
                desc: "Your success is our priority",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="p-6 bg-card rounded-lg border border-border text-center"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-foreground text-center">
            Our Team
          </h2>
          <div className="space-y-8">
            {[
              {
                name: "Sailendra Bikram Thapa",
                role: "Founder & Director",
                bio: "With a passion for international education, Sailendra founded Polar Education to bridge the gap between Nepali students and global universities. His vision of ethical and transparent guidance drives the entire organization.",
              },
              {
                name: "Bibek Timsina",
                role: "Senior Counselor",
                bio: "With over 10 years of experience in education consultancy, Bibek helps students match their academic and career goals with the perfect university and course. His personalized approach has guided hundreds of students to success.",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="p-8 bg-card rounded-lg border border-border"
              >
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-muted-foreground text-lg">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
