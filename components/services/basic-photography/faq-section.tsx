"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does a photography session take?",
      answer: "Most photography sessions take 2-4 hours depending on the property size and package selected. We work efficiently while ensuring every shot is perfect."
    },
    {
      question: "When will I receive my photos?",
      answer: "Standard delivery is within 48 hours. Professional package includes 24-hour delivery, and Premium package offers same-day delivery options."
    },
    {
      question: "What if I'm not satisfied with the photos?",
      answer: "We offer a 100% satisfaction guarantee. If you're not happy with the results, we'll reshoot at no additional cost or provide a full refund."
    },
    {
      question: "Do you provide the RAW files?",
      answer: "We provide professionally edited high-resolution JPEG files. RAW files are available upon request for an additional fee."
    },
    {
      question: "Can you photograph occupied properties?",
      answer: "Yes, we can photograph occupied properties. We'll work with you to prepare the space and may provide staging advice to optimize the photos."
    },
    {
      question: "Do you offer virtual staging?",
      answer: "Virtual staging consultation is included in Professional and Premium packages. Full virtual staging services are available as an add-on."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve all major cities in Portugal including Lisbon, Porto, Braga, Coimbra, and the Algarve region. Travel fees may apply for remote locations."
    },
    {
      question: "Can I use the photos for marketing materials?",
      answer: "Yes, you receive full commercial usage rights for all photos for marketing your property. This includes online listings, brochures, and advertisements."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Everything you need to know about our photography services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-200 dark:border-slate-700">
              <button
                className="w-full py-6 text-left flex justify-between items-center hover:text-blue-600 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600 shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="pb-6">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Our team is here to help you choose the perfect photography package for your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}