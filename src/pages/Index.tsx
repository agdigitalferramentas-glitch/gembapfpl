import UrgencyBar from "@/components/lean/UrgencyBar";
import Hero from "@/components/lean/Hero";
import PainSection from "@/components/lean/PainSection";
import PromiseSection from "@/components/lean/PromiseSection";
import ModulesSection from "@/components/lean/ModulesSection";
import AudienceSection from "@/components/lean/AudienceSection";
import SocialProofSection from "@/components/lean/SocialProofSection";
import FormatSection from "@/components/lean/FormatSection";
import ProjectSection from "@/components/lean/ProjectSection";
import PricingSection from "@/components/lean/PricingSection";
import FaqSection from "@/components/lean/FaqSection";
import FinalCta from "@/components/lean/FinalCta";
import Footer from "@/components/lean/Footer";
import StickyBar from "@/components/lean/StickyBar";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <UrgencyBar />
      <Hero />
      <PainSection />
      <PromiseSection />
      <ModulesSection />
      <AudienceSection />
      <SocialProofSection />
      <FormatSection />
      <ProjectSection />
      <PricingSection />
      <FaqSection />
      <FinalCta />
      <Footer />
      <StickyBar />
    </main>
  );
};

export default Index;
