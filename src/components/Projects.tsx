"use client";
import { useInView } from "@/hooks/useInView";

const projects = [
  { title: "ADZ Garage Management",     category: "Garage Management",       description: "Complete management system for automotive workshops — customer records, inventory, POS, and appointment scheduling.",               features: ["CRM", "Inventory", "POS", "Scheduling", "Reports"] },
  { title: "CFS Jewelry Shop",          category: "Live Selling Automation", description: "Automation system for a jewelry shop's live selling operations — order capture, inventory deduction, and customer management for live streams.", features: ["Live Selling", "Order Automation", "Inventory", "Customer Mgmt"] },
  { title: "ADZ Garage Website",        category: "Web / Coming Soon",       description: "Premium automotive website with product showcase, online booking, brand catalog, and eCommerce functionality.",                     features: ["Online Booking", "Catalog", "eCommerce", "Responsive"] },
  { title: "AI Image Generator",        category: "Artificial Intelligence", description: "AI-powered image generation platform with prompt optimization, user authentication, subscription plans, and image history.", features: ["AI Generation", "Auth", "Subscriptions", "Prompt Opt.", "Image History"] },
  { title: "YourMatch",                 category: "Dating Platform",         description: "Modern AI-assisted dating platform that intelligently matches users based on compatibility, interests, and preferences.",            features: ["AI Matching", "Profiles", "Messaging", "Authentication"] },
  { title: "POS SaaS",                  category: "Cloud Point of Sale",     description: "Cloud-based POS platform with real-time inventory, multi-store support, analytics, and sales reporting.",                           features: ["Multi Store", "Analytics", "Inventory", "Reports", "Roles"] },
  { title: "Inventory System",          category: "Business Software",       description: "Powerful inventory management system with barcode support, purchase orders, supplier management, and alerts.",                       features: ["Barcode", "PO Management", "Suppliers", "Reports"] },
  { title: "Ecommerce Website",         category: "Online Store",            description: "Complete eCommerce solution with cart, checkout, payment gateway integration, and admin dashboard.",                                 features: ["Shopping Cart", "Payments", "Order Tracking", "Admin"] },
  { title: "Business Automation",       category: "Automation",              description: "Collection of workflow automation tools — email, CRM automation, workflow builder, and API integrations.",                          features: ["Email Auto", "CRM", "Workflows", "API Integration"] },
  { title: "Ma. Jesusa Gen. Merchandise", category: "POS & Inventory",       description: "Complete POS and inventory management system built for a general merchandise store — sales tracking, stock monitoring, and reporting.", features: ["POS", "Inventory", "Sales Reports", "Stock Monitoring"] },
  { title: "Richbean Jaen",             category: "Ordering & POS",          description: "Ordering system and POS inventory platform for Richbean Jaen — streamlining customer orders, product management, and real-time stock updates.", features: ["Ordering System", "POS", "Inventory", "Product Mgmt"] },
  { title: "Merlco MGEN Conference Room", category: "Booking System",        description: "Conference room booking system for Merlco MGEN — room scheduling, availability tracking, reservations management, and calendar integration.", features: ["Room Booking", "Scheduling", "Availability", "Reservations", "Calendar"] },
];

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <div className={`reveal ${inView ? "visible" : ""} mb-12`}>
          <p className="text-sm text-[#888] font-medium mb-2">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111]">Featured Projects</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`reveal delay-${Math.min(i % 3 + 1, 6)} ${inView ? "visible" : ""} bg-[#EFEFEF] rounded-2xl border border-black/8 p-6 flex flex-col gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default`}
            >
              <div>
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-white border border-black/10 text-[#555] mb-3">
                  {p.category}
                </span>
                <h3 className="text-[#111] font-bold text-base mb-2">{p.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{p.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.features.map((f) => (
                  <span key={f} className="text-[11px] px-2.5 py-1 rounded-full bg-white text-[#666] border border-black/8">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
