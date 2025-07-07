import React, { useState } from "react";
import { Check, Plus, Tag } from "lucide-react";
import Image from "next/image";
import PromoCodeForm from "@/components/PromoCodeForm";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
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
  currentOfferPrice: 2499,
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
    // {
    //   href: "#",
    //   text: "View all services & add-ons",
    // },
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

const TIERS = ["T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10+"];
const BASE_PRICE = 3899;
const MAX_PRICE = 15000;

function calculatePrice(tier: string): number {
  const tierNumber = parseInt(tier.replace("T", ""));
  const price = BASE_PRICE + (tierNumber - 3) * 1000;
  return Math.min(price, MAX_PRICE);
}

export default function PricingSingle({ pricing }: { pricing?: PricingData }) {
  const pricingsingle = pricing || defaultPricing;
  const [isPromoValid, setIsPromoValid] = useState(false);
  const [showPromoError, setShowPromoError] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string>("T3");
  const [promoDiscount, setPromoDiscount] = useState<number>(0);

  const currentPrice = isPromoValid
    ? calculatePrice(selectedTier) -
      Math.round((calculatePrice(selectedTier) * promoDiscount) / 100)
    : calculatePrice(selectedTier);
  const savings = calculatePrice(selectedTier) - currentPrice;

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
              {/* Select Tier */}
              <div className="mb-4">
                <Select value={selectedTier} onValueChange={setSelectedTier}>
                  <SelectTrigger className="w-full max-w-xs">
                    <SelectValue placeholder="Select Tier" />
                  </SelectTrigger>
                  <SelectContent>
                    {TIERS.map((tier) => (
                      <SelectItem key={tier} value={tier}>
                        {tier}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Price Display */}
              <div className="text-left">
                <div className="flex items-center space-x-4 mb-2">
                  <div className="text-4xl font-bold text-slate-900">
                    €{currentPrice.toLocaleString()}
                  </div>
                  {!isPromoValid && (
                    <div className="text-lg text-slate-500 line-through">
                      €{calculatePrice(selectedTier).toLocaleString()}
                    </div>
                  )}
                </div>
                {isPromoValid && (
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      Promo Applied: Save €{savings}
                    </Badge>
                  </div>
                )}
                <p className="text-xl">{pricingsingle.price_description}</p>
                {pricingsingle.afterprice && (
                  <p className="text-sm font-medium mt-2">
                    {pricingsingle.afterprice}
                  </p>
                )}
              </div>
              {/* Promo Code Input */}
              <div className="w-full flex items-center justify-end mt-2 mb-2">
                <div className="w-full text-xs">
                  <PromoCodeForm
                    onValid={(discount) => {
                      setIsPromoValid(true);
                      setShowPromoError(false);
                      setPromoDiscount(discount);
                    }}
                    onInvalid={() => {
                      setIsPromoValid(false);
                      setShowPromoError(true);
                      setPromoDiscount(0);
                    }}
                    isPromoValid={isPromoValid}
                    showPromoError={showPromoError}
                  />
                </div>
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
              <p className="text-xs text-gray-800 mt-0 flex items-center justify-center gap-1 mt-3">
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
