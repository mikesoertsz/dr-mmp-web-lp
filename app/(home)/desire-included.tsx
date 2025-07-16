"use client";
import {
  Box,
  Camera,
  Cpu,
  Film,
  Home,
  Layout,
  Rotate3d,
  Video,
} from "lucide-react";
import Image from "next/image";
import { InnerWrap, Preheading, SubHeading, Wrapper } from "../(shared)/atoms";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

const included = {
  titleblock: {
    preheading: "Included",
    heading: "What's Included",
    subheading: "All packages include the following:",
    body: "What's Included",
  },
  items: [
    {
      title: "2D Photography",
      description:
        "Capture stunning 2D images to showcase your property effectively.",
      icon: <Camera size={24} className="text-stone-600" strokeWidth={1.5} />,
    },
    {
      title: "Videos",
      description:
        "Create engaging video content to highlight property features.",
      icon: <Video size={24} className="text-stone-600" strokeWidth={1.5} />,
    },
    {
      title: "Virtual Tour",
      description:
        "Offer immersive virtual tours for a comprehensive property view.",
      icon: <Rotate3d size={24} className="text-stone-600" strokeWidth={1.5} />,
    },
    {
      title: "Interior Design",
      description: "Enhance spaces with professional interior design services.",
      icon: <Home size={24} className="text-stone-600" strokeWidth={1.5} />,
    },
    {
      title: "3D Renders",
      description: "Visualize properties with high-quality 3D renderings.",
      icon: <Box size={24} className="text-stone-600" strokeWidth={1.5} />,
    },
    {
      title: "AI Renders",
      description: "Utilize AI technology for advanced property renderings.",
      icon: <Cpu size={24} className="text-stone-600" strokeWidth={1.5} />,
    },
    {
      title: "Floorplan Designs",
      description: "Detailed floorplan designs to illustrate property layout.",
      icon: <Layout size={24} className="text-stone-600" strokeWidth={1.5} />,
    },
    {
      title: "Explainer Video",
      description:
        "Informative explainer videos to communicate property details.",
      icon: <Film size={24} className="text-stone-600" strokeWidth={1.5} />,
    },
  ],
};

export default function DesireIncluded() {
  const listRef = useRef<HTMLUListElement>(null);
  const isInView = useInView(listRef, { once: true, margin: "-50px" });
  return (
    <Wrapper>
      <InnerWrap className="">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <Preheading className="text-center mb-4 text-stone-800">
              What&apos;s in the Package?
            </Preheading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <SubHeading className="max-w-lg mx-auto text-center">
              {included.titleblock.subheading}
            </SubHeading>
          </motion.div>
        </div>
        <motion.ul
          ref={listRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-[#F7F0E8] rounded-2xl overflow-hidden min-h-[30dvh] w-full p-2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {included.items.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-3 p-4 hover:bg-white/20 duration-200 ease-in-out transition cursor-pointer border border-stone-300/10 hover:border-stone-300/40 rounded-lg w-full group"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <div className="flex items-center justify-center p-4 aspect-video relative">
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                  <Image
                    src="ico/paper1.svg"
                    alt={item.title}
                    width={100}
                    height={100}
                    className="opacity-20 group-hover:opacity-80 transition duration-300 ease-in-out"
                  />
                </div>
                {item.icon}
              </div>
              <div>
                <h3 className="font-medium tracking-tight text-sm mb-1 font-title subpixel-antialiased">
                  {item.title}
                </h3>
                <p className=" text-sm max-w-lg text-stone-500 font-medium">
                  {item.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </InnerWrap>
    </Wrapper>
  );
}
