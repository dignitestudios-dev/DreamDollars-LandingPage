"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
    { name: "How It Works", href: "#how-it-works" },
    { name: "Debt Reduction", href: "#debt-reduction" },
    { name: "Spending Plan", href: "#spending-plan" },
    { name: "Savings", href: "#savings" },
    { name: "Net Worth", href: "#net-worth" },
    { name: "Tools", href: "#toolkit" },
    { name: "Milestones", href: "#milestones" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F4FFE1]/90 backdrop-blur-xl border-b border-[#0A4130]/10 shadow-sm py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" aria-label="DreamDollars Home">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white border border-[#0A4130]/10 shadow-sm p-1 group-hover:scale-105 transition-transform">
              <Image
                src="/logo.png"
                alt="DreamDollars Logo"
                width={36}
                height={36}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#0A1B15] flex items-center gap-2">
                DreamDollars
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#649809] font-bold font-minor hidden sm:block">
                Powered by ASCEND
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold text-[#64736A] hover:text-[#0A4130] hover:bg-white rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Waitlist Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#waitlist"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A4130] hover:bg-[#649809] text-white hover:text-[#0A1B15] font-bold text-xs uppercase tracking-wider shadow-sm hover:scale-105 transition-all duration-300"
            >
              <span>Join Waitlist</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-white/80 border border-[#0A4130]/10 text-[#0A1B15]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#649809]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#F4FFE1] border-b border-[#0A4130]/10 px-5 pt-4 pb-6 mt-3 space-y-2 shadow-xl animate-in slide-in-from-top-3 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-xs font-bold text-[#0A1B15] hover:text-[#649809] hover:bg-white/50 rounded-xl"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-[#0A4130]/10">
            <a
              href="#waitlist"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0A4130] text-white font-bold text-xs uppercase tracking-wider"
            >
              <span>Join Waitlist</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
