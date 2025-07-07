"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const faqs = [
    {
      id: "legal-requirements",
      question: "Do you handle all legal requirements for drone flights?",
      answer: "Yes, we handle all regulatory compliance including ANAC licensing, flight permissions, insurance coverage, and airspace clearances. All our pilots are certified and our operations are fully legal and insured."
    },
    {
      id: "weather-conditions",
      question: "What happens if weather conditions are poor?",
      answer: "We monitor weather conditions closely and will reschedule flights if necessary for safety and quality reasons. We typically require wind speeds below 35km/h and good visibility. Rescheduling is included at no extra cost."
    },
    {
      id: "delivery-time",
      question: "How quickly can I receive my aerial photos and videos?",
      answer: "Standard delivery is 24-48 hours after the flight. This includes professional editing, color correction, and multiple format delivery. Rush delivery within 12 hours is available for an additional fee."
    },
    {
      id: "file-formats",
      question: "What file formats do you provide?",
      answer: "We deliver high-resolution JPEG files (web and print ready), RAW files for advanced editing, 4K MP4 videos, and additional formats as requested. All files are delivered via secure online gallery with download links."
    },
    {
      id: "property-types",
      question: "Can you photograph all types of properties?",
      answer: "Yes, we photograph residential, commercial, agricultural, and industrial properties. We adapt our flight patterns and techniques to best showcase each property type's unique features and selling points."
    },
    {
      id: "restricted-areas",
      question: "Can you fly in urban areas or near airports?",
      answer: "We can fly in most urban areas with proper permissions. Airport proximity requires special clearances which we handle. We'll assess your location during booking and obtain all necessary permissions."
    },
    {
      id: "equipment-specs",
      question: "What type of drone and camera equipment do you use?",
      answer: "We use professional-grade drones with 48MP cameras, 4K video capability, and advanced gimbal stabilization. Our equipment meets commercial aviation standards and is regularly maintained and calibrated."
    },
    {
      id: "revision-policy",
      question: "Can I request revisions or additional shots?",
      answer: "Yes, basic revisions are included in our service. If you need additional shots or significant changes, we can arrange a return flight for an additional fee. We aim for 100% client satisfaction."
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-[1780px]">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-blue-600 border-blue-200 mb-6">
            Common Questions
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-recoleta">
            Frequently Asked
            <span className="block text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to know about our drone photography services, regulations, and delivery process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.id} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(faq.id) ? (
                      <ChevronUp className="h-5 w-5 text-slate-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-500 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(faq.id) && (
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-slate-100">
                        <p className="text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Help Section */}
        <div className="mt-16 text-center">
          <Card className="border-0 shadow-xl max-w-2xl mx-auto">
            <CardContent className="p-12">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-100 rounded-full">
                  <HelpCircle className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-recoleta">
                Still Have Questions?
              </h3>
              <p className="text-slate-600 mb-8">
                Our drone photography experts are here to help. Get personalized answers about your specific project needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Card className="border border-blue-200 bg-blue-50 p-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-blue-900 mb-1">Response Time</div>
                    <div className="text-lg font-bold text-blue-600">2 hours</div>
                  </div>
                </Card>
                <Card className="border border-green-200 bg-green-50 p-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-green-900 mb-1">Expert Support</div>
                    <div className="text-lg font-bold text-green-600">24/7</div>
                  </div>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}