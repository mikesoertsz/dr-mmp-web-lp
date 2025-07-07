"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { InnerWrap, Wrapper } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";

type FAQProps = {
  faq?: {
    questions: {
      question: string;
      answer: string;
    }[];
  };
};

const defaultFAQ = {
  questions: [
    {
      question:
        "What services do you offer for real estate agents and property sellers?",
      answer:
        "We offer a comprehensive suite of services including professional photography, videography, 3D rendering, virtual staging, interactive 3D tours, floor plan services, and drone photography to enhance your property's appeal.",
    },
    {
      question:
        "How do I get started with your photography and videography services?",
      answer:
        "Getting started is easy. Simply contact us to discuss your needs, and we'll tailor a package that suits your property. Our team will handle everything from scheduling to final delivery.",
    },
    {
      question: "Do you offer refunds if I'm not satisfied with the services?",
      answer:
        "Yes, we offer a satisfaction guarantee. If you're not happy with the final output, we will work with you to make it right or provide a full refund as per our policy.",
    },
    {
      question: "Are there any discounts for multiple properties?",
      answer:
        "Yes, we offer discounts for clients with multiple properties. Contact us to discuss your specific needs and we'll provide a customized quote.",
    },
    {
      question: "How long does it take to receive the final deliverables?",
      answer:
        "The timeline for deliverables varies depending on the service. Typically, photography and videography are delivered within 5-7 business days, while 3D renderings and virtual staging may take longer.",
    },
    {
      question:
        "Can I use your services if I already have some marketing materials?",
      answer:
        "Absolutely. Our services are designed to complement your existing marketing materials. We can integrate seamlessly with what you already have to enhance your property's presentation.",
    },
    {
      question: "Do you offer any free trials or promotions for new clients?",
      answer:
        "We occasionally offer promotions for new clients. Please contact us to find out about any current offers or to discuss a trial service.",
    },
    {
      question: "What kind of support can I expect during the process?",
      answer:
        "We provide comprehensive support throughout the process. Our team is available to answer any questions and ensure that your experience is smooth and satisfactory.",
    },
  ],
};

export default function FAQ({ faq = defaultFAQ }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Wrapper className={`py-12 md:py-32 h-[50dvh]`}>
      <InnerWrap className="flex flex-col md:flex-row gap-8 h-full">
        <div className="md:w-1/3 flex flex-col items-start justify-start h-full">
          <TitleBlock
            preheading="Questions"
            heading="Frequently Asked Questions"
            theme="dark"
            orientation="left"
            terminalTextClassName="text-orange-500"
          />
        </div>
        <div className="w-full md:w-2/3">
          <motion.ul
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {faq.questions.map((item, index) => (
              <motion.li
                key={index}
                className="border-b border-stone-900/90 pb-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="font-medium text-sm text-stone-300 mb-1">
                    {item.question}
                  </div>
                  <Plus
                    size={16}
                    strokeWidth={1.5}
                    className={`transition-transform ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  />
                </div>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="text-stone-500 text-sm mt-2 max-w-xl">
                    {item.answer}
                  </div>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
