"use client";
import React, { useState } from "react";
import { Check, Plus } from "lucide-react";
import Image from "next/image";
import { InnerWrap, Wrapper } from "../(shared)/atoms";
import { motion } from "framer-motion";
import ConsultationSection from "./ConsultationSection";
import PromocodeInput, { PromocodeConfig } from "./PromocodeInput";

export type PricingData = {
  level: string;
  title: string;
  fullPrice: number;
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
  fullPrice: 3288,
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
  stripeURL: "https://buy.stripe.com/test_4gM7sNgzW77W1jYbwh9sk00",
};

export default function PricingSingle({ pricing }: { pricing?: PricingData }) {
  const pricingsingle = pricing || defaultPricing;
  const fullPrice = pricingsingle.fullPrice;

  // Promocode state (moved to use new component)
  const PROMOCODE: PromocodeConfig = { code: "CENTURY21F10", discount: 700 };
  // promocode state is now managed by PromocodeInput, only validity is tracked here
  const [isValidPromocode, setIsValidPromocode] = useState(false);
  const discountedPrice = isValidPromocode
    ? fullPrice - PROMOCODE.discount
    : fullPrice;

  // Stripe URL with promocode if valid
  const stripeURL =
    isValidPromocode && pricingsingle.stripeURL
      ? `${pricingsingle.stripeURL}?prefilled_promo_code=${PROMOCODE.code}`
      : pricingsingle.stripeURL || "#";

  return (
    <Wrapper className="min-h-[60dvh] py-24 group" id="pricing">
      <InnerWrap className="bg-[#FAF7F2] group-hover:bg-white transition duration-5000 group-hover:shadow-lg ease-in-out rounded-2xl overflow-hidden border border-stone-500/20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full relative ">
          <div className="flex flex-col col-span-2 items-start justify-between p-12 border-r border-stone-300/40">
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
              <motion.ul
                className="flex flex-col items-start justify-start gap-1 w-full text-sm mt-1"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      delay: 2,
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                {pricingsingle.features.map((feature) => (
                  <motion.li
                    key={feature}
                    className="flex items-center"
                    variants={{
                      hidden: { opacity: 0, y: -10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <Check className="h-4 w-4 mr-2 text-green-600" />
                    {feature}
                  </motion.li>
                ))}
                <li className="items-center hidden">
                  <Plus className="h-4 w-4 mr-2" />
                  {pricingsingle.optionalServiceText}
                </li>
              </motion.ul>
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
          <div className="flex flex-col items-start justify-between p-12 w-full">
            <div className="w-full">
              {/* Price Display */}
              <div className="text-left">
                <div className="flex items-center space-x-4 mb-2">
                  {isValidPromocode ? (
                    <>
                      <div className="text-2xl font-medium tracking-tight text-stone-400 line-through">
                        €{fullPrice.toLocaleString()}
                      </div>
                      <div className="text-4xl font-bold tracking-tight text-green-700">
                        €{discountedPrice.toLocaleString()}
                      </div>
                    </>
                  ) : (
                    <div className="text-4xl font-medium tracking-tight text-stone-800">
                      €{fullPrice.toLocaleString()}
                    </div>
                  )}
                </div>
                {isValidPromocode && (
                  <p className="text-green-700 text-sm font-semibold mb-1">
                    Promo applied: -€{PROMOCODE.discount}
                  </p>
                )}
                <p className="text-md text-stone-600">
                  {pricingsingle.price_description}
                </p>
                <p className="text-xs text-stone-500 mb-1">VAT 23% included</p>
                {pricingsingle.afterprice && (
                  <p className="text-sm font-medium mt-2">
                    {pricingsingle.afterprice}
                  </p>
                )}
              </div>
            </div>
            {/* Promocode Input */}
            <PromocodeInput
              promocodeConfig={PROMOCODE}
              onChange={(_, isValid) => {
                setIsValidPromocode(isValid);
              }}
            />
            <a
              href={stripeURL}
              className={`bg-black w-full hover:bg-stone-800 transition duration-200 ease-in-out text-white py-2 rounded-sm cursor-pointer px-4 flex justify-between items-center text-center group mt-2 ${
                !pricingsingle.offerActive
                  ? "opacity-50 pointer-events-none"
                  : ""
              }`}
              aria-disabled={!pricingsingle.offerActive}
            >
              <span className="group-hover:translate-x-1 duration-200 ease-in transition">
                {pricingsingle.buttonText}
              </span>
              <span className="pl-8 font-semibold">
                €{discountedPrice.toLocaleString()}
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
      </InnerWrap>
      {/* Consultation Section */}
      <ConsultationSection />
    </Wrapper>
  );
}
