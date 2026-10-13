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
  title: "DreamDollars — The Digital Financial Wellness Tool Powered by ASCEND",
  description:
    "Turn financial clarity into everyday action. Organize your cash flow, manage spending, build savings, reduce debt, track your net worth, and set meaningful financial goals—all in one place.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google: "googlef898191feecc5a64",
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
