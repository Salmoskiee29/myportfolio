"use client";
import { useInView } from "@/hooks/useInView";
import SectionHeader from "./SectionHeader";

type Project = { title: string; category: string; description: string; features: string[]; href?: string };

const projects: Project[] = [
  { title: "ADZflow — ADZ Garage",       category: "Retail ERP · Live",       description: "Multi-branch retail, inventory and operations system: purchasing, supplier delivery portal, receiving, stock transfers, POS, roles and a full audit trail. In daily use across 3 branches.", features: ["Multi-Branch", "Warehouse", "Purchasing", "POS", "Audit Trail", "Reports"], href: "#case-study" },
  { title: "CFS Jewelry Shop",          category: "Live Selling Automation", description: "Automation system for a jewelry shop's live selling operations — order capture, inventory deduction, and customer management for live streams.", features: ["Live Selling", "Order Automation", "Inventory", "Customer Mgmt"] },
  { title: "ADZ Garage Website",        category: "Web / Coming Soon",       description: "Premium automotive website with product showcase, online booking, brand catalog, and eCommerce functionality.",                     features: ["Online Booking", "Catalog", "eCommerce", "Responsive"] },
  { title: "AI Image Generator",        category: "Artificial Intelligence", description: "AI-powered image generation platform with prompt optimization, user authentication, subscription plans, and image history.", features: ["AI Generation", "Auth", "Subscriptions", "Prompt Opt.", "Image History"] },
  { title: "YourMatch",                 category: "Dating Platform",         description: "Modern AI-assisted dating platform that intelligently matches users based on compatibility, interests, and preferences.",            features: ["AI Matching", "Profiles", "Messaging", "Authentication"] },
  { title: "Ma. Jesusa Gen. Merchandise", category: "POS & Inventory",       description: "Complete POS and inventory management system built for a general merchandise store — sales tracking, stock monitoring, and reporting.", features: ["POS", "Inventory", "Sales Reports", "Stock Monitoring"] },
  { title: "Richbean Jaen",             category: "Ordering & POS",          description: "Ordering system and POS inventory platform for Richbean Jaen — streamlining customer orders, product management, and real-time stock updates.", features: ["Ordering System", "POS", "Inventory", "Product Mgmt"] },
  { title: "Meralco MGEN Conference Room", category: "Booking System",        description: "Conference room booking system for Meralco MGEN — room scheduling, availability tracking, reservations management, and calendar integration.", features: ["Room Booking", "Scheduling", "Availability", "Reservations", "Calendar"] },
];

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader n="03" label="projects" inView={inView} delay={1.2} title="More projects" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => {
            const featured = Boolean(p.href);
            const Card: React.ElementType = featured ? "a" : "div";
            return (
              <div key={p.title} className={`reveal delay-${Math.min((i % 3) + 1, 6)} ${inView ? "visible" : ""} group`}>
                <Card
                  {...(featured ? { href: p.href } : {})}
                  className={`node tilt h-full p-6 flex flex-col gap-4 ${featured ? "border-[var(--glow)] shadow-[0_0_0_4px_var(--halo)]" : ""}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="chip">{p.category}</span>
                    <span aria-hidden="true" className={`w-2.5 h-2.5 rounded-full ${featured ? "bg-[var(--ok)] pulse" : "bg-[var(--wire)]"}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white mb-2 flex items-center justify-between gap-2">
                      {p.title}
                      {featured && <span className="text-[var(--glow)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--muted)]">{p.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {p.features.map((f) => (
                      <span key={f} className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-[var(--bg)] border border-[var(--line)] text-[var(--muted)]">{f}</span>
                    ))}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
