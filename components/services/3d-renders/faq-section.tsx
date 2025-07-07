"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What do you need to create 3D renders?",
      answer: "We need architectural plans, elevations, and any reference materials. Photos of the site, material preferences, and style guidelines are also helpful for creating accurate renders."
    },
    {
      question: "How long does it take to create 3D renders?",
      answer: "Typical delivery time is 5-7 days depending on complexity. Rush delivery is available for urgent projects with 3-day turnaround."
    },
    {
      question: "What's the difference between your packages?",
      answer: "Basic includes 3 renders with standard lighting. Professional adds 6 renders with advanced lighting and multiple angles. Premium includes 10 renders, animations, and unlimited revisions."
    },
    {
      question: "Can you create renders for unbuilt properties?",
      answer: "Yes, that's our specialty! We create photorealistic renders from architectural plans, helping you market properties before construction begins."
    },
    {
      question: "What file formats do you provide?",
      answer: "We deliver high-resolution JPEG, PNG, and TIFF files. Premium packages also include print-ready formats and web-optimized versions."
    },
    {
      question: "Do you offer animation services?",
      answer: "Yes, our Premium package includes short animation sequences. We also offer dedicated animation services for walkthrough videos."
    },
    {
      question: "Can you modify existing renders?",
      answer: "Absolutely! We can update materials, furniture, lighting, or landscaping in existing renders. This is often more cost-effective than creating new renders."
    },
    {
      question: "What's your revision policy?",
      answer: "Basic includes 1 revision, Professional includes 3 revisions, and Premium includes unlimited revisions until you're completely satisfied."
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
            Everything you need to know about our 3D rendering services
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
            <h3 className="text-xl font-bold mb-4">Ready to Start Your 3D Project?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Contact us to discuss your 3D rendering requirements and get a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Start Project
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}