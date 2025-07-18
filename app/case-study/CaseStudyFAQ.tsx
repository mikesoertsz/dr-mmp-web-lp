"use client";
import { useState } from "react";
import { Wrapper, InnerWrap } from "../(shared)/atoms";
import { TitleBlock } from "../(shared)/titleblock";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

const faqContent = {
  titleblock: {
    preheading: "Common Questions",
    heading: "FAQs",
  },
  questions: [
    {
      question: "What was the main challenge with this property?",
      answer:
        "The property was a small T0 studio with little natural light and no standout features, making it hard to attract attention in a crowded market.",
    },
    {
      question: "How did MMP help improve the listing?",
      answer:
        "MMP provided professional photography, virtual staging, and AI-enhanced visuals to showcase the property's potential and lifestyle appeal.",
    },
    {
      question: "What was the result after using MMP?",
      answer:
        "The listing received 3x more inquiries and sold within 2 weeks, compared to the previous 3 months on the market.",
    },
    {
      question: "Can this approach work for other properties?",
      answer:
        "Yes, modern media and emotional storytelling can help almost any property stand out and sell faster, regardless of size or location.",
    },
  ],
};

export default function CaseStudyFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Wrapper id="faq" className="py-12 md:py-32 min-h-[40dvh]">
      <InnerWrap className="flex flex-col md:flex-row gap-8 h-full w-full">
        <div className="md:w-1/3 flex flex-col">
          <TitleBlock
            preheading={faqContent.titleblock.preheading}
            heading={faqContent.titleblock.heading}
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
