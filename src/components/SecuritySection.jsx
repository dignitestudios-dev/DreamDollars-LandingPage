"use client";

import IPhoneFrame from "./IPhoneFrame";
import {
  ShieldCheck,
  Lock,
  KeyRound,
  EyeOff,
  Fingerprint,
  FileCheck,
  Server,
  CheckCircle2,
} from "lucide-react";

export default function SecuritySection() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Bank-Grade 256-Bit Encryption",
      desc: "All financial records and bank synchronizations are encrypted using the same end-to-end standard used by top financial institutions.",
    },
    {
      icon: Fingerprint,
      title: "Biometric & Two-Factor Authentication",
      desc: "Protect your personal financial data with FaceID, TouchID, and mandatory 2FA security checkpoints.",
    },
    {
      icon: EyeOff,
      title: "Zero Selling of Data",
      desc: "We never monetize your personal data or sell transaction history to advertisers. Your financial life remains strictly private.",
    },
    {
      icon: Server,
      title: "Read-Only Bank Integration",
      desc: "Dream Dollars can never initiate unauthorized money transfers or modify your bank accounts without your explicit permission.",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#051C16] border-t border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#36AC62]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Security Features */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#36AC62]/20 text-[#75D47A] text-xs font-bold border border-[#36AC62]/40 mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Enterprise Security & Privacy</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-[1.12]">
                Your Money is Safe. <br />
                <span className="text-gradient-emerald">Your Privacy is Sacred.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#EEF8F0]/80 leading-relaxed">
                We believe financial freedom is impossible without complete peace of mind. Every byte of your net worth and banking information is shielded behind multi-layered encryption.
              </p>
            </div>

            {/* Grid of Security Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {securityFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#75D47A]/40 transition-all text-left"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#041712] border border-[#75D47A]/30 text-[#75D47A] flex items-center justify-center font-bold mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white font-heading">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-[#64736A] mt-1.5 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-[#041712] border border-[#36AC62]/30 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#75D47A] shrink-0" />
              <p className="text-xs text-[#EEF8F0]/90">
                Audited and compliant with SOC2 Type II and global consumer data privacy standards.
              </p>
            </div>
          </div>

          {/* Right Column: iPhone Mockup for login.png */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <IPhoneFrame
                src="/mockups/login.png"
                alt="Dream Dollars Secure Login Screen"
                scrollable={false}
                badge={
                  <div className="bg-[#053126] border border-[#75D47A]/50 backdrop-blur-xl p-4 rounded-3xl shadow-2xl text-left max-w-[220px]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#75D47A]">
                      <Fingerprint className="w-4 h-4 text-[#75D47A]" />
                      <span>Biometric Lock</span>
                    </div>
                    <p className="text-[11px] text-[#EEF8F0] mt-1">
                      Instant FaceID & 2FA hardware key protection on every session.
                    </p>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
