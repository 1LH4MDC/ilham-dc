

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import NavDock from "../components/NavDock";
import FloatingClock from "../components/FloatingClock";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Ilham Dwi Cahya | Portfolio",
  description: "UI/UX Designer & Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakartaSans.className} antialiased bg-[#0b0b0b]`}>
        <FloatingClock />
        {children}
        <NavDock />
      </body>
    </html>
  );
}

