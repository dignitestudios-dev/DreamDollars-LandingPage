import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://dreamdollars.app"),
  title: "Dream Dollars — Build Real Wealth, Live Debt-Free with AI",
  description:
    "The all-in-one AI-powered personal wealth and debt freedom mobile app. Master your budget, crush debt with smart snowball plans, grow savings buckets, track real-time net worth, and get 24/7 personalized coaching from your AI Financial Coach.",
  keywords: [
    "Dream Dollars",
    "Debt Snowball App",
    "AI Financial Coach",
    "Net Worth Tracker",
    "Budget Planner",
    "Personal Finance App",
    "Debt Free",
    "Savings Buckets",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Dream Dollars — Build Real Wealth, Live Debt-Free with AI",
    description:
      "Master your budget, crush debt with smart snowball plans, grow savings buckets, track real-time net worth, and get 24/7 AI financial coaching.",
    images: ["/mockups/Home.png"],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${sora.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#041712] text-[#EEF8F0] font-sans antialiased selection:bg-[#36AC62]/30 selection:text-[#EEF8F0]">
        {children}
      </body>
    </html>
  );
}
