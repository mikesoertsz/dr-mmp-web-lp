import React from "react";
import { Wrapper } from "../(shared)/atoms";
import { HyperText } from "@/components/magicui/hyper-text";

export default function ActionMidCta() {
  return (
    <Wrapper className="flex justify-center py-32 bg-white">
      <div className="flex flex-col items-center justify-center gap-4">
        <HyperText className="text-5xl font-thin tracking-tight font-poppins mb-4">
          €3,288
        </HyperText>
        <h2 className="text-3xl font-medium tracking-tight font-recoleta">
          Show the real potential of your listing.
        </h2>
        <p className="text-sm text-stone-500">One package. One simple price.</p>
      </div>
      <a
        href="#pricing"
        className="bg-[#F0E6DC] hover:bg-[#E8DED3] cursor-pointer  transition duration-300 ease-in-out rounded-xl h-12 px-6 flex items-center justify-center mt-4"
      >
        Get started
      </a>
    </Wrapper>
  );
}
