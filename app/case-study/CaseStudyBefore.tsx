"use client";
import { Wrapper, InnerWrap, Preheading, SubHeading } from "../(shared)/atoms";
import EmblaCarousel from "./EmblaCarousel";

const images = [
  { src: "/img/casestudy/old/T0-casestudy-1.png", alt: "Before photo 1" },
  { src: "/img/casestudy/old/T0-casestudy-2.webp", alt: "Before photo 2" },
  { src: "/img/casestudy/old/T0-casestudy-3.webp", alt: "Before photo 3" },
  { src: "/img/casestudy/old/T0-casestudy-4.webp", alt: "Before photo 4" },
  { src: "/img/casestudy/old/T0-casestudy-5.webp", alt: "Before photo 5" },
  { src: "/img/casestudy/old/T0-casestudy-6.webp", alt: "Before photo 6" },
  { src: "/img/casestudy/old/T0-casestudy-7.webp", alt: "Before photo 7" },
  { src: "/img/casestudy/old/T0-casestudy-8.webp", alt: "Before photo 8" },
  { src: "/img/casestudy/old/T0-casestudy-9.webp", alt: "Before photo 9" },
  { src: "/img/casestudy/old/T0-casestudy-10.webp", alt: "Before photo 10" },
];

export default function CaseStudyBefore() {
  return (
    <Wrapper className="bg-[#FDF6EE] py-16 w-full">
      <InnerWrap className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl">
        <div className="w-full">
          <EmblaCarousel slides={images} className="aspect-square" />
        </div>
        <div className="flex flex-col gap-4 w-full items-start justify-center bg-[#F7F0E8] rounded-2xl p-8 aspect-square">
          <Preheading>Before: Typical Listing</Preheading>
          <SubHeading className="text-2xl font-semibold text-stone-800">
            T0 Apartment – Targeting Young Professionals
          </SubHeading>
          <p className="text-stone-600 text-base max-w-md">
            This property was originally listed with standard photos and minimal
            staging. The listing failed to capture the imagination of buyers,
            resulting in low engagement and slow sales.
          </p>
          <ul className="text-stone-500 text-sm list-disc pl-5 mt-2">
            <li>Location: Porto, Portugal</li>
            <li>Type: T0 Studio Apartment</li>
            <li>Target: Young Professionals</li>
            <li>Problem: Low engagement, slow sales</li>
          </ul>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
