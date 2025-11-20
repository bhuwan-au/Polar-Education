import { ChevronDown } from "lucide-react";
import { useState } from "react";

function FAQSection() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer professional guidance from experienced counsellors and ensure ethical, reliable handling of all application documents through our trusted university partnerships.",
    },
    {
      question: "How can I apply?",
      answer:
        "You may submit your application online via our portal or visit us in person at our office in Star Mall, Putalisadak, Kathmandu.",
    },
    {
      question: "Do you charge consultation fees?",
      answer: "Degree and Major Mapping consultation is free.",
    },
    {
      question: "Which countries do you support for study abroad?",
      answer:
        "We currently serve students applying to Australia, Canada, the UK, and the USA.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can email us at doc.polareducation@gmail.com and apply.polareducation@gmail.com or message us directly on social media and chat Platform @9762120099 and @9851249082.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          Frequently <span className="text-primary">Asked Questions</span>
        </h2>
        <p className="text-lg text-blue-700/80">
          Find answers to the most common questions about our study abroad
          services.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-blue-200 rounded-xl shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
            >
              <span className="text-blue-900 font-semibold text-lg">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-6 h-6 text-primary transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-blue-700/80 text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
