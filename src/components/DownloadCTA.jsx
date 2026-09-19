"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Mail, Phone, ArrowUpRight, Copy, Check } from "lucide-react";
import FadeIn from "./FadeIn";

export default function DownloadCTA() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "phone") {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-[#F4FFE1] to-[#FFDFAC]/60 border-t border-[#0A4130]/10 overflow-hidden">
      {/* Anchor compatibility for any legacy hash references */}
      <div id="waitlist" className="sr-only" aria-hidden="true" />
      <div id="early-access" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white border border-[#0A4130]/15 shadow-xl text-center relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFDFAC]/50 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F4FFE1] rounded-full blur-[80px] pointer-events-none" />

          {/* Logo */}
          <div className="flex justify-center mb-5">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-white border border-[#0A4130]/10 shadow-sm p-2">
              <Image
                src="/logo.png"
                alt="DreamDollars Logo"
                width={120}
                height={120}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFDFAC] border border-[#0A4130]/15 text-[#0A4130] text-xs font-bold uppercase font-minor tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#0A4130]" />
            <span>CONNECT WITH US</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1B15] tracking-tight leading-tight max-w-2xl mx-auto">
            Your Dreams Need Dollars. <br />
            <span className="text-[#649809]">Your Dollars Need Direction.</span>
          </h2>

          {/* Description */}
          <div className="mt-4 space-y-3 text-xs sm:text-sm text-[#64736A] max-w-xl mx-auto leading-relaxed">
            <p>
              DreamDollars is the digital financial wellness tool designed to help you put the principles of ASCEND into practice—one decision, one dollar, and one goal at a time.
            </p>
            <p className="font-bold text-[#0A4130]">
              Get clear. Create structure. Align your money. Build your prosperity.
            </p>
          </div>

          {/* Contact Details Cards */}
          <div className="mt-10 max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {/* Phone Card */}
            <div className="group relative bg-[#F4FFE1]/50 hover:bg-[#F4FFE1] border border-[#0A4130]/15 rounded-2xl p-5 transition-all duration-300 hover:shadow-md hover:border-[#649809]/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0A4130] text-white flex items-center justify-center shadow-xs group-hover:bg-[#649809] group-hover:text-[#0A1B15] transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <button
                    onClick={() => copyToClipboard("+13173979346", "phone")}
                    title="Copy Phone Number"
                    className="p-1.5 text-[#64736A] hover:text-[#0A4130] rounded-lg hover:bg-white/80 transition-colors"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-[#649809]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#64736A] font-minor">
                  Phone Number
                </p>
                <a
                  href="tel:+13173979346"
                  className="mt-1 block text-base sm:text-lg font-extrabold text-[#0A1B15] hover:text-[#0A4130] transition-colors"
                >
                  +1 (317) 397-9346
                </a>
              </div>

              <a
                href="tel:+13173979346"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#0A4130] group-hover:text-[#649809] transition-colors"
              >
                <span>Call or Text Directly</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Email Card */}
            <div className="group relative bg-[#F4FFE1]/50 hover:bg-[#F4FFE1] border border-[#0A4130]/15 rounded-2xl p-5 transition-all duration-300 hover:shadow-md hover:border-[#649809]/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0A4130] text-white flex items-center justify-center shadow-xs group-hover:bg-[#649809] group-hover:text-[#0A1B15] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <button
                    onClick={() => copyToClipboard("Info@askdrjuanita.com", "email")}
                    title="Copy Email Address"
                    className="p-1.5 text-[#64736A] hover:text-[#0A4130] rounded-lg hover:bg-white/80 transition-colors"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#649809]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#64736A] font-minor">
                  Email Address
                </p>
                <a
                  href="mailto:Info@askdrjuanita.com"
                  className="mt-1 block text-base sm:text-lg font-extrabold text-[#0A1B15] hover:text-[#0A4130] transition-colors break-all"
                >
                  Info@askdrjuanita.com
                </a>
              </div>

              <a
                href="mailto:Info@askdrjuanita.com"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#0A4130] group-hover:text-[#649809] transition-colors"
              >
                <span>Send Us an Email</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

