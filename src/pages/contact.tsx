import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl opacity-90">
            We're here to help you start your global education journey
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </main>
  );
}
