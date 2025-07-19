"use client";

import Image from "next/image";
import { Wrapper, InnerWrap } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";

export default function InterestPartners() {
  const partners = [
    {
      icon: "/img/logos/realestate/wide/century21_wide.svg",
      width: 150,
      height: 100,
      link: "https://www.century21.com",
      alt: "Century 21",
    },
    {
      icon: "/img/logos/realestate/wide/idealista.svg",
      width: 110,
      height: 100,
      link: "https://www.idealista.com",
      alt: "Idealista",
    },
    {
      icon: "/img/logos/other/airbnb.svg",
      width: 110,
      height: 100,
      link: "https://www.airbnb.com",
      alt: "Airbnb",
    },
    {
      icon: "/img/logos/other/jamesedition.svg",
      width: 140,
      height: 100,
      link: "https://www.jamesedition.com",
      alt: "JamesEdition",
    },
  ];

  return (
    <Wrapper id="partners" className="lg:py-16">
      <InnerWrap>
        <div className="w-full flex flex-col items-center justify-center mb-8">
          <TitleBlock
            preheading="Partners"
            heading=""
            body=""
            theme="light"
            orientation="center"
          />
        </div>
        <ul className="grid grid-cols-2 sm:flex items-center justify-center gap-4">
          {partners.map((partner, index) => (
            <li
              key={index}
              className="col-span-1 flex items-center justify-center relative h-20 bg-[#F7F0E8] rounded-2xl px-8 py-4"
            >
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferre"
                className="relative flex items-center justify-center"
              >
                <Image
                  src={partner.icon}
                  alt={partner.alt}
                  width={partner.width}
                  height={partner.height}
                />
              </a>
            </li>
          ))}
        </ul>
      </InnerWrap>
    </Wrapper>
  );
}
