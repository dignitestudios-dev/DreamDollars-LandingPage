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
  weight: ["400", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://dreamdollars.app"),
  title: "Dream Dollars — Debt Management & Budgeting (Coming Soon)",
  description:
    "Dream Dollars is the smart debt snowball and personal finance app. Crush debt, budget with surplus rollover, and track net worth.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${sora.variable} scroll-smooth`}
    >
      <body className="min-h-screen font-sans antialiased text-[#0A1B15] selection:bg-[#649809]/20 selection:text-[#0A4130]">
        {children}
      </body>
    </html>
  );
}
