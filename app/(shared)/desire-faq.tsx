"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { InnerWrap, Wrapper } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";

const faqContent = {
  questions: [
    {
      question: "What's included in the pricing?",
      answer:
        "Our pricing includes all necessary taxes and services without hidden fees.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "No, we do not offer payment plans at this time. We do offer a 100% money back guarantee if you are not satisfied with the service.",
    },
    {
      question: "What is the delivery time?",
      answer: "Delivery times vary, but we strive for prompt service.",
    },
    {
      question: "In what formats are the deliverables?",
      answer: "We provide deliverables in various formats to suit your needs.",
    },
    {
      question: "How can I request changes?",
      answer: "You can request changes through our customer support.",
    },
    {
      question: "What if I'm not satisfied?",
      answer: "We offer revisions to ensure your satisfaction.",
    },
  ],
};

export default function DesireFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Wrapper id="faq" className={`py-12 md:py-32 min-h-[50dvh]`}>
      <InnerWrap className="flex flex-col md:flex-row gap-8 h-full">
        <div className="md:w-1/3 flex flex-col items-start justify-start h-full">
          <TitleBlock
            preheading="Common Questions"
            heading="FAQs"
            theme="light"
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
            {faqContent.questions.map((item, index) => (
              <motion.li
                key={index}
                className="border-b border-stone-900/10 pb-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="font-medium text-sm text-brand-secondary mb-1">
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
                  <div className="text-brand-tertiary text-sm mt-2 max-w-xl">
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
