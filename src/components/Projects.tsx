"use client";
import { useInView } from "@/hooks/useInView";

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
    <section id="projects" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <div className={`reveal ${inView ? "visible" : ""} mb-12`}>
          <p className="text-sm text-[#888] font-medium mb-2">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111]">More Projects</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`reveal delay-${Math.min(i % 3 + 1, 6)} ${inView ? "visible" : ""} group cursor-default`}
            >
              <a href={p.href} className={`tilt h-full rounded-2xl border p-6 flex flex-col gap-4 hover:shadow-xl ${p.href ? "bg-[#111] border-[#111] text-white cursor-pointer" : "bg-[#EFEFEF] border-black/8 pointer-events-none"}`}>
              <div>
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-white border border-black/10 text-[#555] mb-3 group-hover:bg-[#111] group-hover:text-white group-hover:border-[#111] transition-colors duration-300">
                  {p.category}
                </span>
                <h3 className={`font-bold text-base mb-2 flex items-center justify-between gap-2 ${p.href ? "text-white" : "text-[#111]"}`}>{p.title}<span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">↗</span></h3>
                <p className={`text-sm leading-relaxed ${p.href ? "text-white/70" : "text-[#666]"}`}>{p.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.features.map((f) => (
                  <span key={f} className={`text-[11px] px-2.5 py-1 rounded-full border ${p.href ? "bg-white/10 text-white/80 border-white/15" : "bg-white text-[#666] border-black/8"}`}>
                    {f}
                  </span>
                ))}
              </div>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
