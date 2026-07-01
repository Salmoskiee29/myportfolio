const categories = [
  {
    name: "Frontend",
    icon: "🖥",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "PHP", "REST API", "Firebase Functions"],
  },
  {
    name: "Database",
    icon: "🗄",
    skills: ["Firebase", "Firestore", "MySQL", "MongoDB"],
  },
  {
    name: "AI",
    icon: "🤖",
    skills: ["OpenAI API", "Replicate AI", "Prompt Engineering", "AI Automation", "AI Image Generation"],
  },
  {
    name: "Cloud & DevOps",
    icon: "☁️",
    skills: ["Vercel", "Firebase Hosting", "Git", "GitHub", "Netlify"],
  },
  {
    name: "Design",
    icon: "🎨",
    skills: ["Figma", "Photoshop", "UI/UX Design", "Responsive Design"],
  },
];

const whyMe = [
  "Clean & Modern UI",
  "Scalable Architecture",
  "Business-Oriented Solutions",
  "Fast Performance",
  "SEO Friendly Websites",
  "Mobile Responsive",
  "AI Integration",
  "Long-term Maintenance",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills & Tech Stack</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-white font-bold">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Why work with me */}
        <div className="bg-gradient-to-br from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Why Work With Me?</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {whyMe.map((item) => (
              <div key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="text-indigo-400">✔</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
