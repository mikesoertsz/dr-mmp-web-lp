"use client";
import React from "react";
import { InnerWrap, Wrapper } from "../(shared)/atoms";
import { TitleBlock } from "../(shared)/titleblock";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import Image from "next/image";

const whyai = {
  titleblock: {
    heading: "Why AI?",
    body: "AI now allows us to show buyers, sellers & tenants not just layouts of properties, but realistic depictions of life in your listing. It's a scroll-stopping way to emotionally hook your audience.",
  },
  tabs: [
    {
      title: "Show Your Ideal Avatars",
      description:
        "AI animations allow you to depict the ideal residents of a property, such as young professionals, small families, or retired couples, bringing the space to life in a meaningful way.",
      image: "/img/services/ideal-avatar.jpg",
    },
    {
      title: "Showcase your best features",
      description:
        "Highlight property features dynamically, showcasing storage, zones, and lifestyle aspects, making the property appear more livable and impactful than static layouts.",
      image: "/img/services/dynamic-features.jpg",
    },
    {
      title: "Post-Renovation Potential",
      description:
        "Visualize the potential of a property with a completed post-renovation layout, offering a modernized and updated perspective.",
      image: "/img/services/post-renovation.jpg",
    },
    {
      title: "Social Media Ready Animations",
      description:
        "Create scroll-stopping animations perfect for social media ads, enticing buyers and renters to engage and contact.",
      image: "/img/services/social-media-animations.jpg",
    },
  ],
};

export default function DesireWhyAI() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <Wrapper
      className="py-12 flex flex-col min-h-screen items-center justify-center"
      id="whyai"
    >
      <InnerWrap>
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <TitleBlock
            heading={whyai.titleblock.heading}
            body={whyai.titleblock.body}
            theme="light"
            orientation="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-12">
            <div className="flex flex-col items-center justify-center gap-4 w-full bg-[#F7F0E8] rounded-lg overflow-hidden p-12">
              <Accordion type="single" collapsible className="w-full">
                {whyai.tabs.map((tab, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger onClick={() => setOpenIndex(index)}>
                      <div className="font-semibold text-md text-stone-900">
                        {tab.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="text-stone-600 text-sm mt-2 max-w-md py-4">
                        {tab.description}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="flex items-center justify-center w-full bg-[#F7F0E8] rounded-lg overflow-hidden">
              {openIndex !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover relative aspect-square overflow-hidden rounded-lg"
                >
                  <Image
                    src={whyai.tabs[openIndex].image}
                    alt={whyai.tabs[openIndex].title}
                    fill
                    className="absolute inset-0 object-cover"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
