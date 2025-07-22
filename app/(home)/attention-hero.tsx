"use client";

import { InnerWrap, Wrapper } from "@/app/(shared)/atoms";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <Wrapper
      id="hero"
      className="lg:py-16 bg-[#FDF6EE] w-full min-h-[50dvh] flex items-center justify-center overflow-hidden"
    >
      <InnerWrap className="flex flex-col w-full items-center justify-center max-w-7xl">
        <div className="w-full flex flex-col items-center justify-center my-32">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-[5rem] tracking-tight font-recoleta text-stone-700/80 leading-tight">
              Sell Properties.
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-[5rem] tracking-tight font-recoleta text-stone-900 leading-tight">
              5x Faster.
            </h1>
          </div>
          <div className="text-lg sm:text-xl lg:text-2xl text-center font-light font-poppins text-stone-500 mt-4 sm:mt-2 max-w-2xl">
            Real estate marketing that emotionally hooks.
          </div>
          <div className="flex gap-4 mt-8">
            <Button
              className="bg-stone-800 hover:bg-stone-700 cursor-pointer transition duration-300 ease-in-out rounded-xl h-10 md:h-12 px-4 md:px-6"
              onClick={() => {
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Services
            </Button>
            <Button
              variant="secondary"
              className="bg-[#F0E6DC] hover:bg-[#E8DED3] cursor-pointer  transition duration-300 ease-in-out rounded-xl h-10 md:h-12 px-4 md:px-6"
              onClick={() => {
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
