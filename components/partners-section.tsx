"use client";

import Image from "next/image";
import { Wrapper, InnerWrap } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";

export default function PartnersSection() {
  const partners = [
    {
      icon: "/logos/realestate/wide/century21_wide.svg",
      link: "https://www.century21.com",
    },
    {
      icon: "/logos/realestate/wide/remax_wide.png",
      link: "https://www.remax.com",
    },
    {
      icon: "/logos/realestate/wide/idealista_wide.png",
      link: "https://www.idealista.com",
    },
    {
      icon: "/img/logos/airbnb_wide.svg",
      link: "https://www.airbnb.com",
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
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex aspect-video items-center justify-center relative h-20"
              >
                <a href={partner.link} target="_blank" rel="noopener noreferre">
                  <Image
                    src={partner.icon}
                    alt={`Partner ${index + 1} Logo`}
                    fill
                    className="absolute inset-0"
                    style={{ objectFit: "contain" }}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
