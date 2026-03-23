import type { Metadata } from "next";
import { Inter, Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Gladiator Allegiance | Elite K-9 Security Solutions",
  description:
    "Exceptional safety and security solutions integrating highly trained body-worn K-9s with extensive expertise. Protection against a broad spectrum of threats for federal, state, and local law enforcement.",
  keywords: [
    "K-9 security",
    "body-worn K-9",
    "law enforcement K-9",
    "security solutions",
    "threat detection",
    "K-9 units",
    "federal security",
    "explosive detection dogs",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans relative">
        {/* Fixed paw print watermark that stays as you scroll */}
        <div className="fixed bottom-[-5%] right-[-3%] pointer-events-none z-0 opacity-[0.03]">
          <svg
            viewBox="0 0 512 512"
            className="w-[600px] h-[600px] text-olive"
            fill="currentColor"
          >
            <ellipse cx="256" cy="340" rx="95" ry="110" />
            <ellipse cx="150" cy="200" rx="45" ry="60" transform="rotate(-15 150 200)" />
            <ellipse cx="362" cy="200" rx="45" ry="60" transform="rotate(15 362 200)" />
            <ellipse cx="198" cy="175" rx="38" ry="52" transform="rotate(-5 198 175)" />
            <ellipse cx="314" cy="175" rx="38" ry="52" transform="rotate(5 314 175)" />
          </svg>
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
