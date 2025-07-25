import HeroSection from "./attention-hero";
import AttentionHook from "./attention-hook";
import AttentionServices from "./attention-services";
import InterestBenefits from "./interest-benefits";
import InterestHowItWorks from "./interest-howitworks";
import InterestPartners from "./interest-partners";
import DesireFAQ from "./desire-faq";
import DesireGuarantees from "./desire-guarantees";
import DesireIncluded from "./desire-included";
import DesireSocialProofSingle from "./desire-socialproofsingle";
import DesireWhoFor from "./desire-whofor";
import DesirePricingShock from "./desire-pricing-shock";
import ActionMidCta from "./action-mid-cta";
import PricingSingle from "./action-pricing-single";
import AttentionNewHotness from "./attention-newhotness";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AttentionNewHotness />
      <AttentionHook />
      <AttentionServices />
      <InterestPartners />
      <InterestBenefits />
      <InterestHowItWorks />
      <ActionMidCta />
      <DesireIncluded />
      <DesireWhoFor />
      <DesireSocialProofSingle />
      <DesireFAQ />
      <DesirePricingShock />
      <PricingSingle />
      <DesireGuarantees />
    </main>
  );
}
