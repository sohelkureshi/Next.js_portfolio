// src/components/sections/SkillsContent.tsx
'use client'

const programmingLanguages = ['JavaScript', 'C++', 'Python', 'Java']
const frontendSkills = ['React.js', 'Redux', 'Next.js', 'Responsive Design', 'Bootstrap', 'HTML', 'CSS']
const backendSkills = ['Node.js', 'Express.js', 'MongoDB', 'MySQL']
const toolsSkills = ['Git', 'GitHub', 'VS Code', 'AWS', 'Docker', 'Firebase']
const dataSkills = ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn']
const coreCompetencies = [
  'Problem Solving',
  'Team Collaboration',
  'Communication',
  'Adaptability',
  'Time Management',
  'Leadership',
]

function SkillTag({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 
                 text-xs md:text-sm font-medium text-slate-800 bg-slate-50 
                 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200 cursor-default"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
      <span>{label}</span>
    </span>
  )
}

export default function SkillsContent() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-8 max-w-7xl mx-auto px-4 bg-white"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1
          id="skills-heading"
          className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-2 tracking-tight select-none"
        >
          Technical Expertise
        </h1>

        <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 mx-auto rounded-full mb-5" />

        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Crafting solutions with modern technologies and timeless principles.
        </p>
      </div>

      {/* Skills Grid – 3D Box Layout */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          { title: 'Programming Languages', items: programmingLanguages },
          { title: 'Frontend Development', items: frontendSkills },
          { title: 'Backend & Databases', items: backendSkills },
          { title: 'Development Tools', items: toolsSkills },
          { title: 'Data & Analytics', items: dataSkills },
          { title: 'Core Competencies', items: coreCompetencies },
        ].map((card) => (
          <div
            key={card.title}
            className="
              rounded-2xl border border-slate-200 
              shadow-[6px_6px_12px_rgba(0,0,0,0.08),-6px_-6px_12px_rgba(255,255,255,0.9)]
              hover:shadow-[10px_10px_18px_rgba(0,0,0,0.10),-8px_-8px_18px_rgba(255,255,255,1)]
              transition-all duration-300 hover:-translate-y-1
              bg-slate-90
            "
          >
            {/* Header */}
            <div className="rounded-t-2xl px-4 py-3 bg-slate-200/60 border-b border-slate-600">
              <h3 className="text-sm md:text-base font-semibold text-slate-800">
                {card.title}
              </h3>
            </div>

            {/* Body */}
            <div className="p-6 bg-white rounded-b-2xl flex flex-wrap gap-2">
              {card.items.map((item: string) => (
                <SkillTag key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ----------------------- CONTINUOUS LEARNING STRIP ----------------------- */}
      <div className="mt-16">
        <div className="w-full rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-emerald-50 shadow-sm py-10 px-6">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-emerald-200 bg-emerald-50 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                Continuous Learning
              </span>
            </div>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              Always exploring new technologies and methodologies to stay at the forefront of
              development.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            <div className="p-5 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="text-2xl md:text-3xl font-black text-emerald-600 mb-1">50+</div>
              <div className="text-xs md:text-sm font-semibold text-slate-700 uppercase tracking-wide">
                Technologies Explored
              </div>
            </div>

            <div className="p-5 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="text-2xl md:text-3xl font-black text-emerald-600 mb-1">100%</div>
              <div className="text-xs md:text-sm font-semibold text-slate-700 uppercase tracking-wide">
                Dedication
              </div>
            </div>

            <div className="p-5 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="text-2xl md:text-3xl font-black text-emerald-600 mb-1">365</div>
              <div className="text-xs md:text-sm font-semibold text-slate-700 uppercase tracking-wide">
                Days Coding
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------ */}
    </section>
  )
}
