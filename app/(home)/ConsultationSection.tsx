import React from "react";
import Image from "next/image";
import { Wrapper, InnerWrap } from "../(shared)/atoms";
import { PhoneCall } from "lucide-react";

const ConsultationSection = () => (
  <Wrapper className="flex flex-col items-center justify-center mt-8">
    <InnerWrap>
      <p className="text-center text-sm text-stone-500 my-6">Got questions?</p>
      <div className="flex items-center gap-6">
        <Image
          src="/img/testimonial/testi1.jpg"
          alt="Representative"
          width={60}
          height={60}
          className="rounded-full"
        />
        <a
          href="https://cal.com/drifter-ai/30min"
          className="bg-[#F0E6DC] hover:bg-[#E8DED3] cursor-pointer transition duration-300 ease-in-out rounded-xl px-4 flex items-start justify-center py-3 gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="aspect-square p-1 h-full flex items-center justify-center">
            <PhoneCall className="" size={16} />
          </div>
          <div className="flex flex-col items-start justify-center mr-3 gap-1">
            <span className="text-sm">Talk to a Human</span>
            <span className="text-md font-medium text-left">Meet Fabio</span>
            <span className="text-xs text-left text-stone-600">
              Sales Representative (PT, EN)
            </span>
          </div>
        </a>
      </div>
    </InnerWrap>
  </Wrapper>
);

export default ConsultationSection;
