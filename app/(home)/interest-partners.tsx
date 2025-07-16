"use client";

import Image from "next/image";
import { Wrapper, InnerWrap } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";

export default function InterestPartners() {
  const partners = [
    {
      icon: "/logos/realestate/wide/century21_wide.svg",
      width: 400,
      height: 200,
      link: "https://www.century21.com",
      alt: "Century 21",
    },
    {
      icon: "/logos/realestate/wide/idealista.svg",
      width: 150,
      height: 100,
      link: "https://www.idealista.com",
      alt: "Idealista",
    },
  ];

  return (
    <Wrapper id="partners" className=" py-16">
      <InnerWrap>
        <div className="w-full flex flex-col items-center justify-center mb-8">
          <TitleBlock
            preheading="Our Partners"
            heading=""
            body=""
            theme="light"
            orientation="center"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <ul className="flex items-center justify-center gap-10">
            {partners.map((partner, index) => (
              <li
                key={index}
                className="flex aspect-video items-center justify-center relative h-20"
              >
                <a href={partner.link} target="_blank" rel="noopener noreferre">
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
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
