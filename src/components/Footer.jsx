"use client";

import Image from "next/image";
import { ShieldCheck, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#020F0C] border-t border-white/10 text-left pt-16 pb-12 text-[#64736A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-2xl overflow-hidden bg-gradient-to-br from-[#649809] to-[#0A4130] p-0.5 shadow-md shadow-[#36AC62]/20 group-hover:scale-105 transition-transform">
                <img
                  src="/logo.png"
                  alt="Dream Dollars Logo"
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
              <span className="text-xl font-extrabold tracking-tight font-heading text-white">
                Dream Dollars
              </span>
            </a>
            <p className="text-xs sm:text-sm text-[#64736A] leading-relaxed max-w-sm">
              The AI-powered personal finance and debt snowball mobile app designed to help you crush debt, automate smart budgeting, and build lasting net worth.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#75D47A]">
              <ShieldCheck className="w-4 h-4" />
              <span>Bank-grade 256-bit encryption & read-only security.</span>
            </div>
          </div>

          {/* Col 2: Product */}
          <div>
            <h4 className="text-xs uppercase font-extrabold text-white tracking-wider mb-4 font-heading">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#ai-coach" className="hover:text-white transition-colors">
                  Coach Nia (AI Financial Coach)
                </a>
              </li>
              <li>
                <a href="#debt-snowball" className="hover:text-white transition-colors">
                  Debt Snowball Accelerator
                </a>
              </li>
              <li>
                <a href="#budgeting" className="hover:text-white transition-colors">
                  Needs vs. Wants Budgeting
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-white transition-colors">
                  Unified Net Worth Map
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-white transition-colors">
                  Savings Buckets & Goals
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="text-xs uppercase font-extrabold text-white tracking-wider mb-4 font-heading">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Debt Payoff Calculator
                </a>
              </li>
              <li>
                <a href="#onboarding" className="hover:text-white transition-colors">
                  How It Works (6 Steps)
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-white transition-colors">
                  App Screenshot Gallery
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="mailto:support@dreamdollars.app" className="hover:text-white transition-colors">
                  Support Center
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Security */}
          <div>
            <h4 className="text-xs uppercase font-extrabold text-white tracking-wider mb-4 font-heading">
              Legal & Privacy
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Consumer Data Protection
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-[11px] text-[#64736A]">
          <p>
            © {new Date().getFullYear()} Dream Dollars App Inc. All rights reserved. Dream Dollars is a financial technology tool. AI coaching is intended for educational and wellness purposes.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
