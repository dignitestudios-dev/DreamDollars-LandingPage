"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Debt Reduction", href: "#debt-reduction" },
    { name: "Spending Plan", href: "#spending-plan" },
    { name: "Savings", href: "#savings" },
    { name: "Net Worth", href: "#net-worth" },
    { name: "Toolkit", href: "#toolkit" },
    { name: "Milestones", href: "#milestones" },
    { name: "Contact Us", href: "#contact" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="bg-[#FFDFAC]/30 border-t border-[#0A4130]/10 pt-14 pb-10 text-[#64736A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-[#0A4130]/10">
          {/* Col 1: Brand */}
          <div className="lg:col-span-5 space-y-3">
            <a href="#" className="flex items-center gap-3 group" aria-label="DreamDollars">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white border border-[#0A4130]/10 shadow-xs p-1 group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.png"
                  alt="DreamDollars Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-[#0A1B15]">
                  DreamDollars
                </span>
                <span className="text-[10px] tracking-wider uppercase text-[#649809] font-bold font-minor">
                  Powered by ASCEND: From Paycheck to Prosperity
                </span>
              </div>
            </a>
            <p className="text-xs text-[#64736A] leading-relaxed max-w-sm">
              The digital financial wellness tool designed to help you put the principles of ASCEND into practice—one decision, one dollar, and one goal at a time.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase font-extrabold text-[#0A1B15] tracking-widest mb-3 font-minor">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#0A4130] transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal & Ecosystem */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-extrabold text-[#0A1B15] tracking-widest mb-3 font-minor">
              ASCEND Ecosystem
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#how-it-works" className="hover:text-[#0A1B15] transition-colors">
                  CA$H Framework
                </a>
              </li>
              <li>
                <a href="#spending-plan" className="hover:text-[#0A1B15] transition-colors">
                  Financial Freedom Spending Plan
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#0A1B15] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left text-[11px] text-[#64736A]">
          <p>
            &copy; {new Date().getFullYear()} DreamDollars. Powered by ASCEND: From Paycheck to Prosperity. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-xs font-semibold text-[#64736A] hover:text-[#0A4130] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}

