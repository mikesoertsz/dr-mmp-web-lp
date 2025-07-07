"use client";

import BenefitsSection from "@/components/benefits-section";
import FAQSection from "@/components/faq-section";
import HowItWorksSection from "@/components/how-it-works-section";
import PartnersSection from "@/components/partners-section";
import SocialProofSimple from "@/components/social-proof-simple";
import PricingSingle from "../(shared)/action-pricing-single";
import DesireWhyAI from "./desire-whyai";
import HeroSection from "./home-hero";

export default function Home() {
  return (
    <div className="bg-[#FDF6EE]">
      <HeroSection />
      <PartnersSection />
      <BenefitsSection />
      <HowItWorksSection />
      <DesireWhyAI />
      <SocialProofSimple />
      <FAQSection />
      <PricingSingle />
    </div>
  );
}
