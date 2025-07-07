"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Wrapper, InnerWrap } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";

export function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const faqs = [
    {
      id: "what-included",
      question: "What's included in a 2D rendering package?",
      answer:
        "Each package includes high-resolution 2D renders from multiple angles, professional editing, color correction, and files in various formats (JPEG, PNG, PDF). We also provide web-optimized versions for online marketing.",
    },
    {
      id: "file-requirements",
      question: "What files do you need to create 2D renders?",
      answer:
        "We work with architectural plans (PDF, DWG, DXF), sketches, or even hand-drawn plans. We can also work from photographs of existing buildings or detailed descriptions for renovation projects.",
    },
    {
      id: "delivery-time",
      question: "How long does it take to complete 2D renders?",
      answer:
        "Standard delivery is 3-5 business days for most projects. Rush delivery (24-48 hours) is available for urgent projects with an additional fee. Complex projects may require additional time.",
    },
    {
      id: "revision-policy",
      question: "Can I request changes to the renders?",
      answer:
        "Yes, we include 2 rounds of revisions in our standard package. Additional revisions can be made for a small fee. We work with you to ensure the final result meets your expectations.",
    },
    {
      id: "style-options",
      question: "What rendering styles are available?",
      answer:
        "We offer photorealistic, architectural line art, watercolor style, and modern minimalist renders. We can also match specific brand guidelines or create custom styles based on your requirements.",
    },
    {
      id: "pricing-structure",
      question: "How is pricing determined?",
      answer:
        "Pricing is based on project complexity, number of views required, level of detail, and delivery timeline. We provide transparent quotes upfront with no hidden fees.",
    },
    {
      id: "file-formats",
      question: "What file formats do you deliver?",
      answer:
        "We deliver high-resolution JPEG and PNG files, plus PDF versions for print materials. RAW files and other specialized formats are available upon request.",
    },
    {
      id: "commercial-rights",
      question: "Can I use the renders for commercial purposes?",
      answer:
        "Yes, all renders come with full commercial usage rights. You can use them for marketing, sales materials, websites, brochures, and any other promotional purposes without additional licensing fees.",
    },
  ];

  return (
    <Wrapper className="bg-white">
      <InnerWrap>
        <div className="w-full flex items-center justify-center mb-16">
          <TitleBlock
            preheading="Common Questions"
            heading="2D Rendering FAQ"
            body="Everything you need to know about our 2D rendering services, process, and delivery."
            theme="light"
            orientation="center"
          />
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Card
                key={faq.id}
                className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
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
                Need More Information?
              </h3>
              <p className="text-slate-600 mb-8">
                Our rendering specialists are here to help with any questions
                about your specific project requirements.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border border-blue-200 bg-blue-50 p-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-blue-900 mb-1">
                      Email Response
                    </div>
                    <div className="text-lg font-bold text-blue-600">
                      {" "}
                      4 hours
                    </div>
                  </div>
                </Card>
                <Card className="border border-green-200 bg-green-50 p-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-green-900 mb-1">
                      Project Consultation
                    </div>
                    <div className="text-lg font-bold text-green-600">Free</div>
                  </div>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
