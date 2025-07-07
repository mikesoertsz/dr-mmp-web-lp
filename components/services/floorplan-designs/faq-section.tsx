"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do you measure the property?",
      answer: "We use professional laser measuring tools and follow RICS guidelines for accuracy. Our team will visit your property to take precise measurements of all rooms and spaces."
    },
    {
      question: "What information do you need from me?",
      answer: "We need access to the property for measurement, any existing plans or documents, and your preferences for styling and room labeling."
    },
    {
      question: "Can you create floorplans from existing drawings?",
      answer: "Yes, we can recreate and improve existing floorplans. However, we recommend a site visit to verify accuracy and update any changes."
    },
    {
      question: "Do you offer 3D floorplans?",
      answer: "Our Premium package includes 3D isometric views. For full 3D rendered floorplans, please see our 3D Renders service."
    },
    {
      question: "What file formats do you provide?",
      answer: "We provide PDF for printing, PNG for web use, and vector formats (AI/EPS) for professional marketing materials. Premium packages include interactive PDFs."
    },
    {
      question: "Can you show furniture in the floorplan?",
      answer: "Yes, Professional and Premium packages include both furnished and unfurnished versions to show space potential and actual layout."
    },
    {
      question: "How accurate are your measurements?",
      answer: "Our measurements are accurate to within ±2cm, meeting professional surveying standards. We guarantee accuracy and will re-measure if needed."
    },
    {
      question: "Can you create floorplans for commercial properties?",
      answer: "Yes, we create floorplans for offices, retail spaces, restaurants, and other commercial properties. Contact us for custom pricing."
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
            Everything you need to know about our floorplan services
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
            <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Contact us to discuss your floorplan requirements and schedule a measurement visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Measurement
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