import { ChevronDown } from "lucide-react";
import { useState } from "react";

function FAQSection() {
  const faqs = [
    {
      question: "What countries do you provide guidance for?",
      answer:
        "We guide students for study opportunities in Australia, Canada, the United Kingdom, and the United States.",
    },
    {
      question: "Do you provide visa assistance?",
      answer:
        "Yes, our team offers comprehensive support for the visa application process, including documentation review and interview preparation.",
    },
    {
      question: "Can you help with IELTS preparation?",
      answer:
        "Absolutely! We provide dedicated IELTS coaching at our Kathmandu office to help students achieve their desired band scores.",
    },
    {
      question: "Do you assist with university applications?",
      answer:
        "Yes, we assist students with the complete application process including selecting universities, preparing documents, and submitting applications.",
    },
    {
      question: "Do you offer post-placement support?",
      answer:
        "Yes, our support continues even after students secure admission, helping them adjust smoothly to their new environment.",
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
          Frequently <span className="text-orange-500">Asked Questions</span>
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
                className={`w-6 h-6 text-orange-500 transition-transform ${
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
