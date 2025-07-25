"use client";

import React from "react";
import { Heading, InnerWrap, Preheading, Wrapper } from "@/app/(shared)/atoms";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqContent = {
  questions: [
    {
      question: "What's included in the pricing?",
      answer:
        "Our pricing includes all necessary taxes (including VAT at 23%) and services without hidden fees. We offer a 100% money back guarantee if you are not satisfied with the service.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "No, we do not offer payment plans at this time. We do offer a 100% money back guarantee if you are not satisfied with the service.",
    },
    {
      question: "What is the delivery time?",
      answer:
        "Delivery times average 72 hours or 3 business days from the day we do photography of your listing. Larger properties with more complex layouts may take longer.",
    },
    {
      question: "In what formats are the deliverables?",
      answer:
        "We provide deliverables in various formats to suit your needs. Our images, videos and schematics are made to standard sizes for easy upload to popular platforms like Idealista. If you require a different format, you'll be able to customize when speaking to your dedicated sales representative.",
    },
    {
      question: "How can I request changes?",
      answer:
        "You can request changes through your dedicated sales respresentative who will manage your property portfolio.",
    },
    {
      question: "What if I'm not satisfied?",
      answer:
        "We offer revisions to 3D designs to ensure your satisfaction. If you are not satisfied with the service, we will refund 100% of your money within 15 days of purchase.",
    },
  ],
};

export default function DesireFAQ() {
  return (
    <Wrapper id="faq" className={` min-h-[50dvh]`}>
      <InnerWrap className="flex flex-col md:flex-row gap-8 h-full w-full">
        <div className="md:w-1/3 flex flex-col items-center justify-center md:items-start md:justify-start h-full">
          <Preheading className="text-center">Common Questions</Preheading>
          <Heading className="text-center">FAQs</Heading>
        </div>
        <div className="w-full md:w-2/3 px-8 md:px-0">
          <Accordion type="single" collapsible>
            {faqContent.questions.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="flex items-center justify-between cursor-pointer">
                  <div className="font-medium text-sm text-brand-secondary mb-1">
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-brand-tertiary text-sm mt-2 max-w-xl">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
