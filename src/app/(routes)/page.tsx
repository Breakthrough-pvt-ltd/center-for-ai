import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import QuickLinkSection from "@/components/QuickLinkSection";
import WhatWeOfferSection from "@/components/WhatWeOfferSection";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { PiMapPinLineLight } from "react-icons/pi";

export default function Home() {
  return (
    <>
      {/* Floating Button */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-_purple-500 rounded-l-3xl shadow-lg py-6 flex flex-col items-center space-y-6 z-50 w-16">
        {/* Email Icon */}
        <div className="w-12 h-12 flex text-white items-center justify-center rounded-full bg-_purple-600 hover:bg-_purple-400 cursor-pointer">
          <IoMdMail size={20} />
        </div>

        {/* Location Icon */}
        <div className="w-12 h-12 flex text-white items-center justify-center rounded-full bg-_purple-600 hover:bg-_purple-400 cursor-pointer">
          <PiMapPinLineLight size={20} />
        </div>

        {/* Phone Icon */}
        <div className="w-12 h-12 flex text-white items-center justify-center rounded-full bg-_purple-600 hover:bg-_purple-400 cursor-pointer">
          <FaPhoneAlt size={20} />
        </div>
      </div>

      {/* Main Sections */}
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <QuickLinkSection />
      <WhatWeOfferSection />
      <ContactSection />
    </>
  );
}
