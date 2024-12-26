import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import QuickLinkSection from "@/components/QuickLinkSection";
import WhatWeOfferSection from "@/components/WhatWeOfferSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <QuickLinkSection />
      <WhatWeOfferSection />
      <ContactSection />
    </>
  );
}
