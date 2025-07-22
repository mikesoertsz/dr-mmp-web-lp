import HeroSection from "./attention-hero";
import InterestHowItWorks from "./interest-howitworks";
import InterestPartners from "./interest-partners";
import InterestBenefits from "./interest-benefits";
import DesireSocialProofSingle from "./desire-socialproofsingle";
import DesireFAQ from "./desire-faq";
import PricingSingle from "./action-pricing-single";
import DesireIncluded from "./desire-included";
import ActionMidCta from "./action-mid-cta";
import DesireWhoFor from "./desire-whofor";
import DesireGuarantees from "./desire-guarantees";
import AttentionServices from "./attention-services";
import AttentionHook from "./attention-hook";

export default function Home() {
  return (
    <main>
      <HeroSection />
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
      <PricingSingle />
      <DesireGuarantees />
    </main>
  );
}
