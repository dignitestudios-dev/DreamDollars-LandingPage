"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Budgeting", href: "#budgeting" },
    { name: "Net Worth", href: "#net-worth" },
    { name: "Badges", href: "#badges" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="bg-[#FFDFAC]/30 border-t border-[#0A4130]/10 pt-14 pb-10 text-[#64736A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-[#0A4130]/10">
          {/* Col 1: Brand */}
          <div className="lg:col-span-5 space-y-3">
            <a href="#" className="flex items-center gap-3 group" aria-label="Dream Dollars">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-white border border-[#0A4130]/10 shadow-xs p-1 group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.png"
                  alt="Dream Dollars Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-[#0A1B15]">
                  Dream Dollars
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#649809] font-bold font-minor">
                  Driving Dreams To Destiny
                </span>
              </div>
            </a>
            <p className="text-xs text-[#64736A] leading-relaxed max-w-sm">
              The personal finance mobile app for debt reduction snowballing, smart budgeting with surplus rollover, and live net worth tracking.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-extrabold text-[#0A1B15] tracking-widest mb-3 font-minor">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
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

          {/* Col 3: Legal */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-extrabold text-[#0A1B15] tracking-widest mb-3 font-minor">
              Legal &amp; Privacy
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#" className="hover:text-[#0A1B15] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0A1B15] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0A1B15] transition-colors">
                  Security Standards
                </a>
              </li>
            </ul>

            {/* Social Placeholder Icons */}
            {/* <div className="pt-2 flex items-center gap-2.5">
              {["X", "In", "Ig", "Fb"].map((item) => (
                <a
                  key={item}
                  href="#"
                  aria-label={item}
                  className="w-7 h-7 rounded-full bg-white border border-[#0A4130]/15 hover:border-[#649809] hover:text-[#0A4130] text-[11px] font-bold text-[#64736A] flex items-center justify-center transition-colors shadow-xs"
                >
                  {item}
                </a>
              ))}
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left text-[11px] text-[#64736A]">
          <p>
            &copy; {new Date().getFullYear()} Dream Dollars. All rights reserved. Dream Dollars is a financial management tool designed for personal planning and debt reduction.
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
