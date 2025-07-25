"use client";
import {
  Building2,
  ChartNetwork,
  SquareUserRound,
  Warehouse,
} from "lucide-react";
import { InnerWrap, Preheading, SubHeading, Wrapper } from "../(shared)/atoms";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

const whoFor = {
  titleblock: {
    preheading: "Who is this for?",
    subheading:
      "A service for anyone looking to sell their property faster, and for a higher value.",
  },
  items: [
    {
      title: "Agencies",
      icon: (
        <Building2 size={22} strokeWidth={1.5} className="text-stone-700" />
      ),
      description:
        "Agencies that are looking for a competitive edge in a market with a lot of competition. MMP could be your perfect partner.",
    },
    {
      title: "Agents",
      icon: (
        <SquareUserRound
          size={22}
          strokeWidth={1.5}
          className="text-stone-700"
        />
      ),
      description:
        "Property agents that want to increase the value of their listings with a compelling advertising hook.",
    },
    {
      title: "Owners",
      icon: (
        <Warehouse size={22} strokeWidth={1.5} className="text-stone-700" />
      ),
      description:
        "Owners that want to sell their property independently, without the need for an agent. MMP gives you the media you need to sell.",
    },
    {
      title: "Investors",
      icon: (
        <ChartNetwork size={22} strokeWidth={1.5} className="text-stone-700" />
      ),
      description:
        "Investors that want to hook potential buyers or tenants with a scroll-stopping property listing.",
    },
  ],
};

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

export default function DesireWhoFor() {
  const listRef = useRef<HTMLUListElement>(null);
  const isInView = useInView(listRef, { once: true, margin: "-50px" });
  return (
    <Wrapper>
      <InnerWrap className="">
        <div className="mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <Preheading className="text-center text-stone-800 mb-2">
              {whoFor.titleblock.preheading}
            </Preheading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <SubHeading className="max-w-lg mx-auto text-center">
              {whoFor.titleblock.subheading}
            </SubHeading>
          </motion.div>
        </div>
        <ul
          ref={listRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-2 rounded-2xl overflow-hidden min-h-[20dvh] w-full p-2"
        >
          {whoFor.items.map((item, index) => (
            <motion.li
              key={index}
              className="flex gap-1 md:gap-3 items-center justify-start h-full border border-stone-300/10 hover:border-stone-300/40 rounded-lg w-full group hover:bg-[#E8DED3] bg-[#F7F0E8] duration-200 ease-in-out transition cursor-pointer p-3 md:p-4"
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={listVariants}
            >
              <div className="flex items-center justify-center w-10 h-10 bg-white aspect-square rounded-lg">
                <span className="text-lg font-medium font-mono antialiased">
                  {item.icon}
                </span>
              </div>
              <div className="flex flex-col items-start justify-start gap-0.5 px-4 pr-0 sm:pr-4">
                <p className="text-xs text-stone-500/60 uppercase font-semibold tracking-wider font-mono">
                  0{index + 1}
                </p>
                <h3 className="font-medium tracking-tight text-md font-poppins antialiased">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-stone-500 font-medium max-w-md">
                  {item.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </InnerWrap>
    </Wrapper>
  );
}
