import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Psalm David De Dios — Software Engineer · Full-Stack · Automation",
  description: "Software engineer building POS, inventory, multi-branch and warehouse systems — plus the AI automations that tie them together. Creator of ADZflow, live at ADZ Garage.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrains.variable} antialiased`}>
      <body className="dotgrid">{children}</body>
    </html>
  );
}
