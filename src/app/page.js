"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PillarsSection from "@/components/PillarsSection";
import StorytellingFeatures from "@/components/StorytellingFeatures";
import ToolkitGrid from "@/components/ToolkitGrid";
import BadgesSection from "@/components/BadgesSection";
import SecuritySection from "@/components/SecuritySection";
import FAQSection from "@/components/FAQSection";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#FFDFAC] via-[#F4FFE1] to-[#FDFEFB] text-[#0A1B15] overflow-x-hidden selection:bg-[#649809]/20 selection:text-[#0A4130]">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* 2. Hero Section: Make Your Money Make Sense */}
        <Hero />

        {/* 3. How It Works: ASCEND CA$H Framework */}
        <PillarsSection />

        {/* 4. Core Features: Debt Reduction, Spending Plan, Savings, Net Worth */}
        <StorytellingFeatures />

        {/* 5. Complete DreamDollars Toolkit (01-06) */}
        <ToolkitGrid />

        {/* 6. Celebrate Your Progress (Milestones) */}
        <BadgesSection />

        {/* 7. Security & Trust Strip */}
        <SecuritySection />

        {/* 8. FAQ Section */}
        <FAQSection />

        {/* 9. Final Call-to-Action: Contact Us */}
        <DownloadCTA />
      </main>

      {/* 10. Footer (Powered by ASCEND) */}
      <Footer />
    </div>
  );
}
