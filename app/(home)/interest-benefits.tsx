"use client";

import { InnerWrap, Wrapper } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";
import Image from "next/image";
import { motion } from "framer-motion";

const BENEFITS_CONTENT = {
  heading: {
    preheading: "Benefits",
    heading: "Why choose us?",
    body: "We are a team of experienced professionals who are dedicated to providing the best possible service to our clients.",
  },
  list: [
    {
      preheading: "Comprehensive",
      title: "All-In-One Package",
      description:
        "One provider for all your needs. Photography, design, videography, AI enhancement & more.",
      image: "/img/hero/agent_update.png",
      colspan: 2,
    },
    {
      preheading: "Fast",
      title: "48hr Turnaround",
      description:
        "Get your project delivered in record time without sacrificing quality thanks to AI automation.",
      image: "/img/hero/agent_update.png",
      colspan: 1,
    },
    {
      preheading: "Easy",
      title: "All Formats Provided",
      description:
        "Receive your files in every format you need for web, print, and more, ensuring compatibility.",
      image: "/img/hero/agent_update.png",
      colspan: 1,
    },
  ],
};

export default function InterestBenefits() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Wrapper id="benefits" className="py-16 md:pt-24 mb:pb-0">
      <InnerWrap>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <TitleBlock
            theme="light"
            orientation="center"
            {...BENEFITS_CONTENT.heading}
          />
        </div>

        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full mx-auto min-h-[30dvh]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {BENEFITS_CONTENT.list.map((benefit, index) => (
            <motion.li
              key={index}
              className={`bg-[#F7F0E8] rounded-2xl overflow-hidden p-12 pb-0 flex flex-col text-left *:**:justify-center items-start h-full relative ${
                benefit.colspan === 2 ? "col-span-2" : ""
              }`}
              variants={itemVariants}
            >
              <div className="w-full flex flex-col items-center text-center justify-center">
                <p className="text-sm font-medium text-stone-600 mb-2">
                  {benefit.preheading}
                </p>
                <h3 className="text-2xl font-recoleta subpixel-antialiased text-stone-900 tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-sm text-stone-60 font-medium mt-2">
                  {benefit.description}
                </p>
              </div>

              <div className="flex items-center justify-center relative w-full mt-8 min-h-[400px]">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="absolute inset-0  mix-blend-multiply"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </InnerWrap>
    </Wrapper>
  );
}
