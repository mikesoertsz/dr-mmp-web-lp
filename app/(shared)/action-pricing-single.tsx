import React from "react";
import { Check, Plus } from "lucide-react";
import Image from "next/image";
import { InnerWrap, Wrapper } from "./atoms";

export type PricingData = {
  level: string;
  title: string;
  fullPrice: number;
  currentOfferPrice: number;
  offersLeft: number;
  price_description: string;
  afterprice?: string;
  features: string[];
  description: string;
  buttonText: string;
  links: { href: string; text: string }[];
  includedText: string;
  optionalServiceText: string;
  footerText: string;
  stripeURL?: string;
  offerActive?: boolean;
};

const defaultPricing: PricingData = {
  level: "Complete Package",
  title: "All-in-One",
  fullPrice: 3899,
  currentOfferPrice: 3499,
  offersLeft: 4,
  price_description: "One-time payment",
  afterprice: "",
  features: [
    "2D Photography",
    "Video Walkthrough",
    "Virtual Tour",
    "3D Renders",
    "Interior 3D Staging",
    "AI Animations",
  ],
  description: "Everything you need to market your property.",
  buttonText: "Buy Package",
  links: [
    {
      href: "#",
      text: "Calculate your costs",
    },
  ],
  includedText: "Included Services",
  optionalServiceText: "Optional add-on services",
  footerText:
    "Drifter offers a flexible, no-commitment service with transparent pricing, ensuring you can modernize your practice with confidence.",
  offerActive: true,
};

export default function PricingSingle({ pricing }: { pricing?: PricingData }) {
  const pricingsingle = pricing || defaultPricing;
  const currentPrice = pricingsingle.currentOfferPrice;
  const fullPrice = pricingsingle.fullPrice;

  return (
    <Wrapper className="min-h-[60dvh] py-24">
      <InnerWrap className="max-w-7xl bg-[#FDF6EE] rounded-lg overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full min-h-[600px] relative noisy">
          <div className="flex flex-col col-span-2 items-start justify-between p-12 bg-[#F5ECE4]">
            <div>
              <p className="text-sm text-stone-800 mb-4">
                {pricingsingle.level}
              </p>
              <h2 className="text-4xl tracking-tight">{pricingsingle.title}</h2>
              <p className="text-lg mt-2">{pricingsingle.description}</p>
            </div>
            <div className="py-8">
              <p className="text-sm text-stone-800 mb-1">
                {pricingsingle.includedText}
              </p>
              <ul className="flex flex-col items-start justify-start gap-1 w-full text-sm mt-1">
                {pricingsingle.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-600" />
                    {feature}
                  </li>
                ))}
                <li className="items-center hidden">
                  <Plus className="h-4 w-4 mr-2" />
                  {pricingsingle.optionalServiceText}
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start gap-1">
              <ul className="flex flex-col items-start justify-start gap-1">
                {pricingsingle.links.map((link, index) => (
                  <li key={index} className="group">
                    <a
                      key={index}
                      href={link.href}
                      className="text-stone-800 font-medium text-xs hover:text-black transform transition duration-200 ease-in-out hover:translate-x-1 mb-8"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between p-12 bg-white w-full">
            <div className="w-full">
              {/* Price Display */}
              <div className="text-left">
                <div className="flex items-center space-x-4 mb-2">
                  <div className="text-4xl font-light tracking-tight text-slate-900">
                    €{currentPrice.toLocaleString()}
                  </div>
                  <div className="text-lg text-gray-400 line-through">
                    €{fullPrice.toLocaleString()}
                  </div>
                </div>
                <p className="text-md text-stone-600">
                  {pricingsingle.price_description}
                </p>
                {pricingsingle.afterprice && (
                  <p className="text-sm font-medium mt-2">
                    {pricingsingle.afterprice}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col w-full items-center justify-start gap-2">
              <a
                href={pricingsingle.stripeURL || "#"}
                className="bg-black w-full hover:bg-stone-800 transition duration-200 ease-in-out text-white py-2 rounded-sm cursor-pointer px-4 flex justify-between items-center text-center group mt-2"
                aria-disabled={!pricingsingle.offerActive}
              >
                <span className="group-hover:translate-x-1 duration-200 ease-in transition">
                  {pricingsingle.buttonText}
                </span>
                <span className="pl-8 font-semibold">
                  €{currentPrice.toLocaleString()}
                </span>
              </a>
              <p className="text-xs text-gray-800 flex items-center justify-center gap-1 mt-3">
                Secure payments with{" "}
                <Image
                  src="/img/stripe.svg"
                  alt="Stripe"
                  width={36}
                  height={15}
                  className=""
                />
                .
              </p>
            </div>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
