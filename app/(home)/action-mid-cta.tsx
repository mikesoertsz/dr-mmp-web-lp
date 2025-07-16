"use client";
import { Wrapper } from "../(shared)/atoms";

export default function ActionMidCta() {
  return (
    <Wrapper className="flex justify-center py-12 bg-white">
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-3xl font-medium tracking-tight font-recoleta">
          Show the real potential of your listing.
        </h2>
        <p className="text-sm text-stone-500">One package. One simple price.</p>
      </div>
      <a
        href="#pricing"
        className="bg-[#F0E6DC] hover:bg-[#E8DED3] cursor-pointer  transition duration-300 ease-in-out rounded-xl h-12 px-6 flex items-center justify-center mt-4"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("pricing")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Get started
      </a>
    </Wrapper>
  );
}
