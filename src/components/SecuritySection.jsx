import { ShieldCheck, Mail, KeyRound, CheckCircle2 } from "lucide-react";
import FadeIn from "./FadeIn";

export default function SecuritySection() {
  const trustItems = [
    {
      id: "auth",
      icon: Mail,
      title: "Google & Apple Sign-In",
      description: "Quick access with verified Google, Apple, or email credentials.",
    },
    {
      id: "verification",
      icon: CheckCircle2,
      title: "Signup Verification",
      description: "Account confirmation protocols to protect profile authenticity.",
    },
    {
      id: "2fa",
      icon: KeyRound,
      title: "Optional Two-Factor (2FA)",
      description: "Secondary security checkpoint protecting your financial accounts.",
    },
  ];

  return (
    <section id="security" className="relative py-14 sm:py-16 bg-[#F4FFE1]/60 border-t border-b border-[#0A4130]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white border border-[#0A4130]/15 text-[#0A4130] text-[10px] font-bold uppercase font-minor mb-2">
              <ShieldCheck className="w-3 h-3 text-[#649809]" />
              <span>Authentication</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0A1B15]">
              Built with <span className="text-[#649809]">Verified Security.</span>
            </h2>
          </div>
          <p className="text-xs text-[#64736A] max-w-sm">
            Personal data and payoff profiles secured with modern authentication standards.
          </p>
        </FadeIn>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn
                key={item.id}
                delay={index * 0.08}
                className="bg-white p-5 rounded-2xl border border-[#0A4130]/10 shadow-xs flex items-start gap-3.5"
              >
                <div className="w-9 h-9 rounded-xl bg-[#F4FFE1] text-[#0A4130] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-[#0A1B15]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#64736A] mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
