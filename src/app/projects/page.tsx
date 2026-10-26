import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";

export const metadata: Metadata = {
  title: "Projects — Psalm David De Dios",
  description: "Web applications, business systems and automations built by Psalm David De Dios.",
};

export default function ProjectsPage() {
  return (
    <>
      <Effects />
      <Navbar />
      <main className="pt-16">
        <div className="max-w-6xl mx-auto px-6 pt-10">
          <Link href="/" className="node-pill hover:text-white transition-colors">← back to home</Link>
        </div>
        <Projects />
      </main>
      <Footer />
    </>
  );
}
