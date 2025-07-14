"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Wrapper, InnerWrap } from "@/app/(shared)/atoms";
import { Quote } from "lucide-react";
import { TitleBlock } from "@/app/(shared)/titleblock";

const content = {
  titleBlock: {
    preheading: "Social Proof",
    heading: "What our clients say",
    body: "We are a team of experienced professionals who are dedicated to providing the best possible service to our clients.",
  },
  testimonial: {
    name: "John Doe",
    role: "Real Estate Agent",
    company: "Century21",
    location: "Porto, Portugal",
    text: "As a Century21 agent, I find it incredibly easy to get quality pictures & designs that market properties perfectly. The All-in-one package includes everything I need, making the process seamless and efficient.",
    avatar: "/img/testimonial/testi1.jpg",
    project: "Century21 Real Estate",
  },
  image: {
    src: "/img/hero/agent_update.png",
    alt: "Project Image",
  },
};

export default function SocialProofSection() {
  return (
    <Wrapper id="social-proof" className="bg-[#FDF6EE]">
      <InnerWrap className="flex flex-col items-center justify-center">
        <TitleBlock
          preheading={content.titleBlock.preheading}
          heading={content.titleBlock.heading}
          body={content.titleBlock.body}
          theme="light"
          orientation="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-8">
          <motion.div
            className="w-full flex"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative flex items-center justify-end aspect-square rounded-lg overflow-hidden w-full h-full bg-[#F7F0E8] p-12 z-0">
              <div className="absolute bottom-4 left-6 z-20 w-full">
                <p className="text-stone-900 text-md font-semibold">hello</p>
                <p className="text-stone-600 text-xs font-medium">hello</p>
              </div>
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                className="absolute inset-0 mix-blend-multiply z-10 p-12"
                style={{ objectFit: "cover" }}
              />
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col items-start justify-between h-full w-full p-12 "
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            <div className="flex flex-col items-start justify-start gap-2">
              <Quote className="h-8 w-8" />
              <p className="text-lg">{content.testimonial.text}</p>
            </div>
            <div className="flex items-center mt-4">
              <Image
                src={content.testimonial.avatar}
                alt={`${content.testimonial.name} Avatar`}
                width={100}
                height={100}
                className="rounded-lg bg-red-600 w-16 aspect-square"
              />
              <div className="text-stone-500 ml-4 gap-1">
                <p className="font-semibold text-stone-900">
                  {content.testimonial.name}
                </p>
                <p className="text-sm text-stone-800">
                  {content.testimonial.role}
                </p>
                <p className="text-xs">
                  {content.testimonial.company} / {content.testimonial.location}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
