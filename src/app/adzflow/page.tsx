import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";

export const metadata: Metadata = {
  title: "ADZflow case study — Psalm David De Dios",
  description: "Retail, inventory and operations system for ADZ Garage, a multi-branch automotive business.",
};

export default function AdzflowPage() {
  return (
    <>
      <Effects />
      <Navbar />
      <main className="pt-16">
        <div className="max-w-6xl mx-auto px-6 pt-10">
          <Link href="/#projects" className="node-pill hover:text-white transition-colors">← back to projects</Link>
        </div>
        <CaseStudy />
      </main>
      <Footer />
    </>
  );
}
