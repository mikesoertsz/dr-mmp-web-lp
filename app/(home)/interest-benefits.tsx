"use client";

import { Heading, InnerWrap, Preheading, Wrapper } from "@/app/(shared)/atoms";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader } from "lucide-react";

const benefits = {
  titleblock: {
    preheading: "Benefits",
    heading: "Why choose us?",
    heading2: "",
    subheading: "",
    body: "We are a team of experienced professionals who are dedicated to providing the best possible service to our clients.",
  },
  list: [
    {
      preheading: "Comprehensive",
      title: "All-In-One",
      description:
        "One provider for all your needs. Photography, design, videography, interior design, AI enhancement & more.",
      image: "/img/benefits/all.png",
      colspan: 2,
    },
    {
      preheading: "Fast",
      title: "72hrs",
      description:
        "Get your media delivered in record time without sacrificing quality. Average turnaround time is 3 business days.",
      image: "/img/benefits/fast.png",
      colspan: 1,
    },
    {
      preheading: "Easy",
      title: "Easy Delivery",
      description:
        "Receive your files in every format you need for web, print, and more, ensuring compatibility. Delivered through secure cloud storage.",
      image: "/img/benefits/easy.png",
      colspan: 1,
    },
    {
      preheading: "Optimized",
      title: "Platform-Ready",
      description:
        "Our outputs are tailored for seamless upload to listing platforms like Idealista & Kyero, ensuring immediate visibility.",
      image: "/img/hero/agent_update.png",
      colspan: 1,
    },
  ],
};

export default function InterestBenefits() {
  const defaultImage = benefits.list[0].image;
  const [currentImage, setCurrentImage] = useState(defaultImage);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = (image: string) => {
    setCurrentImage(image);
  };

  const handleMouseLeave = () => {
    setCurrentImage(defaultImage);
  };

  return (
    <Wrapper id="benefits" className="lg:pt-24 mb:pb-0">
      <InnerWrap>
        {/* Preload all benefit images */}
        <div className="hidden">
          {benefits.list.map((item, idx) => (
            <Image
              key={item.image}
              src={item.image}
              alt={item.title}
              width={400}
              height={300}
              priority={idx === 0}
            />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <Preheading>{benefits.titleblock.preheading}</Preheading>
          <Heading className="mt-4">{benefits.titleblock.heading}</Heading>
          <p className="mt-2 md:mt-6 text-sm sm:text-md md:text-lg text-center mx-auto max-w-lg">
            {benefits.titleblock.body}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full min-h-[40dvh] gap-4 mt-12">
          <div className="col-span-1 flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col sm:flex-row md:flex-col gap-4 sm:gap-2 h-full">
              {benefits.list.slice(0, 2).map((item, index) => (
                <li
                  key={index}
                  className="bg-[#F7F0E8] w-full p-4 md:p-8 rounded-xl flex flex-col items-start justify-between h-full transition duration-300 ease-in-out border border-stone-300/10 hover:border-stone-300 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(item.image)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex flex-col items-start justify-start">
                    <p className="text-[11px] text-stone-500 uppercase font-poppins font-medium mb-3 tracking-widest">
                      {item.preheading}
                    </p>
                    <h3 className="text-xl md:text-3xl font-medium subpixel-antialiased font-recoleta text-stone-900 mb-2">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#94877C] hover:text-black transition duration-3000 ease-in-out font-medium">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden col-span-1 hidden md:flex flex-col items-center justify-center h-full rounded-xl bg-[#F7F0E8] transition duration-3000 ease-in-out">
            {loading ? (
              <Loader className="animate-spin text-stone-600" size={24} />
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-8"
                >
                  <Image
                    src={currentImage}
                    alt="Benefits"
                    fill
                    className="absolute inset-0 mix-blend-darken"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            )}
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col sm:flex-row md:flex-col gap-4 sm:gap-2 h-full">
              {benefits.list.slice(2, 4).map((item, index) => (
                <li
                  key={index}
                  className="bg-[#F7F0E8] w-full p-4 md:p-8 rounded-xl flex flex-col items-start justify-between h-full transition duration-300 ease-in-out border border-stone-300/10 hover:border-stone-300 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(item.image)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex flex-col items-start justify-start">
                    <p className="text-[11px] text-stone-500 uppercase font-poppins font-medium mb-3 tracking-widest">
                      {item.preheading}
                    </p>
                    <h3 className="text-xl md:text-3xl font-medium subpixel-antialiased font-recoleta text-stone-900 mb-2">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#94877C] hover:text-black transition duration-3000 ease-in-out font-medium">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
