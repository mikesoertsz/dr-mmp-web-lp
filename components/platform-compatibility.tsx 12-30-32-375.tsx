"use client";

import { InnerWrap, Wrapper } from "@/app/(shared)/atoms";
import { TitleBlock } from "@/app/(shared)/titleblock";
import { useTranslation } from "@/lib/translations";
import { CheckCircle } from "lucide-react";

const platforms = {
  heading: {
    preheading: "Made to be easy",
    heading: "Custom files for all platforms.",
    body: "We support all major platforms, including social media, print media, and more.",
  },
  list: {
    realestate: [
      { name: "Idealista", logo: "" },
      { name: "Kyero", logo: "" },
      { name: "Imovirtual", logo: "" },
      { name: "Casa Sapo", logo: "" },
      { name: "OLX", logo: "" },
      { name: "BPI Expresso Imobiliário", logo: "" },
      { name: "Trovit", logo: "" },
      { name: "Sapo", logo: "" },
      { name: "CustoJusto", logo: "" },
      { name: "ReMax", logo: "" },
      { name: "ERA", logo: "" },
      { name: "Zome", logo: "" },
    ],
    social: [
      { name: "Facebook", logo: "" },
      { name: "Instagram", logo: "" },
      { name: "Twitter", logo: "" },
      { name: "LinkedIn", logo: "" },
      { name: "Pinterest", logo: "" },
      { name: "Snapchat", logo: "" },
      { name: "TikTok", logo: "" },
    ],
    other: [{ name: "PDF", logo: "" }],
  },
};

export default function PlatformCompatibility() {
  const { t } = useTranslation();

  return (
    <Wrapper id="platforms" className="py-16 md:py-24">
      <InnerWrap className="bg-brand-b2 rounded-xl p-8 mx-auto">
        <div className="flex w-full items-center justify-center py-8">
          <TitleBlock
            theme="light"
            orientation="center"
            {...platforms.heading}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Object.values(platforms.list)
            .flat()
            .map((platform, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-white rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <div
                    className={`w-8 h-8 rounded flex items-center justify-center`}
                  >
                    <span className="text-white font-bold text-xs">
                      {platform.logo}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-b1 border  rounded-full px-4 py-2">
            <CheckCircle className="h-4 w-4" size={16} />
            <span className="text-sm font-medium">Upload guarantee</span>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
