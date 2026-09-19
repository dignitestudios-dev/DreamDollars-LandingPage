import FadeIn from "./FadeIn";

export default function ToolkitGrid() {
  const tools = [
    {
      num: "01",
      pillar: "CLARITY",
      title: "Net Worth Dashboard",
      description: "See your assets and liabilities together for a clearer picture of your financial position.",
      link: "#net-worth",
    },
    {
      num: "02",
      pillar: "DEBT",
      title: "Debt Reduction Tracker",
      description: "Organize your debts, create your payoff strategy, and monitor your progress.",
      link: "#debt-reduction",
    },
    {
      num: "03",
      pillar: "CASH FLOW",
      title: "Financial Freedom Spending Plan",
      description: "Give your income direction with intentional spending categories designed around your real life.",
      link: "#spending-plan",
    },
    {
      num: "04",
      pillar: "SAVINGS",
      title: "Purpose-Based Savings Buckets",
      description: "Set aside money for emergencies, future goals, and the things that matter most.",
      link: "#savings",
    },
    {
      num: "05",
      pillar: "TRACKING",
      title: "Expense Categorization",
      description: "Track everyday spending and recognize patterns before they derail your goals.",
      link: "#spending-plan",
    },
    {
      num: "06",
      pillar: "GOALS",
      title: "Milestones & Celebrations",
      description: "Track financial goals, recognize progress, and celebrate the wins that keep you moving forward.",
      link: "#milestones",
    },
  ];

  return (
    <section id="toolkit" className="relative py-20 sm:py-28 bg-[#F4FFE1]/50 border-t border-b border-[#0A4130]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#649809] font-minor">
              YOUR DREAMDOLLARS TOOLS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1B15] mt-1.5">
              Built to Turn Financial Clarity <span className="text-[#649809]">Into Action.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#64736A] max-w-sm leading-relaxed">
            DreamDollars gives you practical tools to support the work you&apos;re doing through ASCEND.
          </p>
        </FadeIn>

        {/* 6 Clean Numbered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {tools.map((tool, index) => (
            <FadeIn
              key={tool.num}
              delay={index * 0.05}
              className="p-6 rounded-2xl bg-white border border-[#0A4130]/10 shadow-xs hover:border-[#649809]/40 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-[#649809] font-minor tracking-wider">
                    {tool.num} — {tool.pillar}
                  </span>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#F4FFE1] text-[#0A4130] font-minor">
                    ASCEND Tool
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-[#0A1B15] group-hover:text-[#0A4130] transition-colors mb-2">
                  {tool.title}
                </h3>

                <p className="text-xs text-[#64736A] leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#64736A]">
                <a
                  href={tool.link}
                  className="inline-flex items-center gap-1 font-bold text-[#0A4130] group-hover:text-[#649809] transition-colors font-minor text-[11px]"
                >
                  <span>Explore tool</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

