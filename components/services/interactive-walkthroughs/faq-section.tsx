"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to create a virtual tour?",
      answer: "Typical delivery time is 5 days from the capture session. The actual photography takes 2-3 hours depending on property size, then we need 3-4 days for processing and tour creation."
    },
    {
      question: "What equipment do you use for 360° photography?",
      answer: "We use professional 360-degree cameras that capture ultra-high resolution images. Our equipment includes specialized tripods and lighting to ensure consistent, high-quality results."
    },
    {
      question: "Can virtual tours work on mobile devices?",
      answer: "Yes! Our virtual tours are fully optimized for smartphones and tablets. Viewers can navigate using touch gestures and even use their device's gyroscope for immersive viewing."
    },
    {
      question: "Do you offer VR headset compatibility?",
      answer: "Yes, our Premium package includes VR-ready formats compatible with popular VR headsets like Oculus, HTC Vive, and smartphone VR viewers."
    },
    {
      question: "Can I add my own branding to the tour?",
      answer: "Absolutely! Professional and Premium packages include custom branding options where you can add your logo, contact information, and customize the interface colors."
    },
    {
      question: "How do I share the virtual tour?",
      answer: "You'll receive a unique URL that can be shared via email, social media, or embedded on websites. We also provide QR codes for easy mobile access."
    },
    {
      question: "What analytics do you provide?",
      answer: "Our analytics dashboard shows visitor numbers, time spent in tour, most viewed areas, device types, and geographic locations of viewers."
    },
    {
      question: "Can you add interactive hotspots?",
      answer: "Yes! We can add clickable hotspots that display information about specific features, amenities, or provide additional photos and details about different areas."
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
            Everything you need to know about our virtual tour services
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
            <h3 className="text-xl font-bold mb-4">Ready to Go Virtual?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Contact us to schedule your virtual tour capture session and start reaching global buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Capture
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}