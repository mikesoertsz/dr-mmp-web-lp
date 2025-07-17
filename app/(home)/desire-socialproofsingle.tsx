"use client";

import { motion } from "framer-motion";
import { Wrapper, InnerWrap } from "@/app/(shared)/atoms";
import { Quote } from "lucide-react";
import { TitleBlock } from "@/app/(shared)/titleblock";
import Image from "next/image";

const content = {
  titleBlock: {
    preheading: "What our clients say",
  },
  testimonial: {
    name: "John Doe",
    role: "Real Estate Agent",
    avatar: "/img/testimonial/testi1.jpg",
    company: "Century21",
    location: "Porto, Portugal",
    text: "As a Century21 agent, I find it incredibly easy to get quality pictures & designs that market properties perfectly. The All-in-one package includes everything I need, making the process seamless and efficient.",
  },
};

export default function DesireSocialProofSingle() {
  return (
    <Wrapper id="social-proof" className="bg-[#FDF6EE]">
      <InnerWrap className="flex flex-col items-center justify-center text-center">
        <TitleBlock
          preheading={content.titleBlock.preheading}
          theme="light"
          orientation="center"
        />
        <motion.div
          className="flex flex-col items-center justify-center mt-8 max-w-2xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="flex flex-col items-center justify-center">
            <Quote className="h-8 w-8 mb-4" />
            <p className="text-sm sm:text-md md:text-lg mb-4">{content.testimonial.text}</p>
          </div>
          <div className="text-stone-500 flex flex-col items-center justify-center">
            <Image
              src={content.testimonial.avatar}
              alt={content.testimonial.name}
              width={60}
              height={60}
              className="rounded-sm my-4"
            />
            <p className="font-medium tracking-tight text-amber-900">
              {content.testimonial.name}
            </p>
            <p className="text-sm text-stone-800">{content.testimonial.role}</p>
            <p className="text-xs text-stone-600">
              {content.testimonial.company} / {content.testimonial.location}
            </p>
          </div>
        </motion.div>
      </InnerWrap>
    </Wrapper>
  );
}
