"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Menu, X, ArrowUpRight, ShieldCheck, Download, Smartphone } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "AI Money Coach", href: "#ai-coach" },
    { name: "Debt Snowball", href: "#debt-snowball" },
    { name: "Budgeting", href: "#budgeting" },
    { name: "Calculator", href: "#calculator" },
    { name: "How It Works", href: "#onboarding" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#041712]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-2xl overflow-hidden bg-gradient-to-br from-[#649809] to-[#0A4130] p-0.5 shadow-md shadow-[#36AC62]/20 group-hover:scale-105 transition-transform duration-300">
              <img
                src="/logo.png"
                alt="Dream Dollars Logo"
                className="w-full h-full object-cover rounded-[14px]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight font-heading text-white flex items-center gap-1.5">
                Dream Dollars
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#649809]/20 text-[#75D47A] font-semibold border border-[#649809]/40">
                  AI App
                </span>
              </span>
              <span className="text-[11px] text-[#64736A] font-medium hidden sm:block">
                Smart Wealth & Debt Freedom
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.04] backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-[#EEF8F0]/80 hover:text-white hover:bg-white/10 rounded-full transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#calculator"
              className="px-4 py-2 text-xs font-semibold text-[#EEF8F0]/80 hover:text-white transition-colors"
            >
              Debt Free Calculator
            </a>
            <a
              href="#download"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#649809] via-[#36AC62] to-[#21BFA0] text-[#041712] font-bold text-xs shadow-lg shadow-[#36AC62]/25 hover:shadow-[#36AC62]/45 hover:scale-105 transition-all duration-300"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Get Dream Dollars</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#051C16] border-b border-white/10 px-4 pt-3 pb-6 mt-3 space-y-2 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-[#EEF8F0]/90 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#649809] to-[#36AC62] text-[#041712] font-bold text-sm shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download Mobile App</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
