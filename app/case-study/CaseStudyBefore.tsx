"use client";
import { MapPin } from "lucide-react";
import { InnerWrap, Preheading, Wrapper } from "../(shared)/atoms";
import EmblaCarousel from "./EmblaCarousel";
import { TitleBlock } from "../(shared)/titleblock";

const caseStudy = {
  title: "T0 Studio Apartment",
  titleblock: {
    preheading: "Before",
    heading: "How we improve listings.",
    body: "This property was originally listed with standard photos and minimal staging. The listing failed to capture the imagination of buyers, resulting in low engagement and slow sales.",
  },
  images: [
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
  ],
  details: [
    {
      icon: <MapPin size={24} className="text-stone-600" strokeWidth={1.5} />,
      title: "Location",
      value: "Porto, Portugal.",
    },
    {
      icon: <MapPin size={24} className="text-stone-600" strokeWidth={1.5} />,
      title: "Type",
      value: "T0 Studio Apartment.",
    },
    {
      icon: <MapPin size={24} className="text-stone-600" strokeWidth={1.5} />,
      title: "Target",
      value: "Young Professionals.",
    },
    {
      icon: <MapPin size={24} className="text-stone-600" strokeWidth={1.5} />,
      title: "Problem",
      value: "Low engagement, slow sales.",
    },
  ],
};

export default function CaseStudyBefore() {
  return (
    <Wrapper className="bg-[#FDF6EE] py-16 w-full">
      <InnerWrap className="flex flex-col">
        <TitleBlock
          {...caseStudy.titleblock}
          theme="light"
          orientation="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center max-w-6xl mt-16">
          <div className="w-full">
            <EmblaCarousel
              slides={caseStudy.images}
              className="aspect-square saturate-60"
            />
          </div>
          <div className="flex flex-col gap-2 w-full items-start justify-between bg-[#F7F0E8] rounded-2xl aspect-square">
            <div className="flex flex-col items-start justify-center p-8">
              <Preheading>{caseStudy.titleblock.preheading}</Preheading>
              <h3 className="text-3xl font-recoleta subpixel-antialiased tracking-tight text-stone-800">
                asd
              </h3>
              <p className="text-stone-600 text-sm max-w-md">
                {caseStudy.titleblock.body}
              </p>
            </div>
            <ul className="text-stone-500 text-sm mt-8 grid grid-cols-2 gap-3 w-full p-4">
              {caseStudy.details.map((detail) => (
                <li
                  key={detail.title}
                  className="flex flex-col items-start justify-center bg-white rounded-md p-4"
                >
                  <span className="font-medium text-xs uppercase tracking-wide antialiased text-indigo-500">
                    {detail.title}
                  </span>
                  <span className="text-sm text-stone-500">{detail.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
