'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function ExperienceContent() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-16 lg:py-8 max-w-5xl mx-auto px-4 lg:px-8 bg-white"
    >
      {/* ================= HEADER ================= */}
      <div className="relative text-center mb-12 z-10">
        <h1
          id="experience-heading"
          className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
        >
          Professional Experience
        </h1>

        <div className="mt-3 w-24 h-1.5 mx-auto rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500" />

        <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
          Building high-performance solutions that drive impact
        </p>
      </div>

      {/* ================= TIMELINE ================= */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-3 md:left-8 top-0 bottom-0 pointer-events-none">
          <div className="relative h-full w-[2px] md:w-px bg-slate-300">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div
                className="
                  w-0 h-0
                  border-l-[5px] border-r-[5px]
                  border-b-[8px]
                  border-l-transparent border-r-transparent
                  border-b-emerald-500
                "
              />
            </div>
          </div>
        </div>

        <div className="space-y-16">

          {/* ================= SG ANALYTICS ================= */}
          <div className="relative pl-10 md:pl-20">
            {/* Timeline dot */}
            <div className="absolute left-3 md:left-8 top-6 -translate-x-1/2 pointer-events-none">
              <div className="w-8 h-8 rounded-full bg-emerald-500 border-4 border-white shadow" />
            </div>

            {/* CARD */}
            <div
              className="
                relative z-10 group
                bg-white/95 backdrop-blur-xl
                rounded-3xl p-8 lg:p-10
                shadow-xl border border-slate-200
                transition-all duration-300 transform-gpu
                group-hover:-translate-y-2
                group-hover:shadow-2xl
              "
            >
              {/* Header */}
<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 border-b border-slate-200 pb-6 mb-6 min-h-[96px]">
  {/* Left */}
  <div>
    <Link
      href="https://www.linkedin.com/company/sg-analytics/"
      target="_blank"
      className="flex items-center gap-3 mb-3"
    >
<Image
  src="/images/sg_analytics_logo.jpg"
  alt="SG Analytics"
  width={48}
  height={48}
  priority
  loading="eager"
  className="rounded-lg border bg-white"
/>

      <h3 className="text-2xl lg:text-3xl font-black text-slate-900">
        SG Analytics
      </h3>
    </Link>

    <span className="inline-flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-bold">
      Frontend Developer
    </span>
  </div>

 {/* Right */}
<div className="flex flex-col gap-1 items-center lg:items-end text-center lg:text-right">
  <div className="font-bold bg-slate-50 px-4 py-2 rounded-lg border inline-block">
    Dec 2025 – Present
  </div>
  <div className="text-sm text-slate-600">
    Pune (Hybrid)
  </div>
</div>
</div>


              {/* CONTENT */}
              <div className="grid lg:grid-cols-2 gap-10">
                {/* Highlights */}
                <div>
                  <h4 className="font-bold mb-4 text-lg">Key Highlights</h4>

                  <div className="space-y-4">
                    {[
                      ['40% faster UI rendering', 'Optimized Vue.js & Vuex'],
                      ['Responsive UI', 'Mobile-first layouts'],
                      ['Production APIs', 'PostgreSQL integration'],
                    ].map(([title, desc], i) => (
                      <div
                        key={i}
                        className="
                          p-5 rounded-2xl border bg-slate-50
                          transition-all
                          hover:bg-emerald-50
                          hover:scale-[1.02]
                          hover:shadow-md
                        "
                      >
                        <div className="font-bold">{title}</div>
                        <div className="text-sm text-slate-600">{desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

{/* Achievements */}
<div className="space-y-4 lg:pr-3 max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-300/60 scrollbar-track-transparent">
  <h4 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
    <i className="bi bi-trophy text-emerald-500" />
    Key Achievements
  </h4>

  <div className="space-y-3">
    {[
      'Improved UI rendering performance by 40% by optimizing Vue.js components and state management.',
      'Reduced initial page load time by 25% through code-splitting, lazy loading, and asset optimization.',
      'Decreased average API response latency by nearly 30% via PostgreSQL query optimization and caching strategies.',
      'Increased user engagement by 18% after redesigning core user flows and improving responsiveness.',
      'Maintained 99.9% production uptime by stabilizing deployments and improving error monitoring.',
      'Delivered 12+ production-ready APIs supporting authentication, reporting, and real-time data sync.',
      'Enhanced cross-browser compatibility, reducing UI-related bugs by over 20% in production.',
    ].map((achievement, idx) => (
      <div
        key={idx}
        className="relative p-4 pl-7 rounded-2xl bg-white/80 border border-slate-200
                   hover:bg-slate-50 hover:border-slate-400 hover:shadow-md hover:-translate-y-0.5
                   transition-all text-sm lg:text-base text-slate-800 leading-relaxed"
      >
        <span className="absolute left-3 top-4 text-emerald-500 font-bold">
          ▸
        </span>
        {achievement}
      </div>
    ))}
  </div>
</div>

              </div>

              {/* Tech */}
              <div className="mt-8 pt-6 border-t">
                <div className="flex flex-wrap gap-3">
                  {[
                    'Vue.js',
                    'Vuex',
                    'React',
                    'Next.js',
                    'Kendo Vue UI',
                    'PostgreSQL',
                    'TypeScript',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-4 py-2 rounded-full text-sm font-semibold
                        bg-emerald-50 border border-emerald-200
                        transition
                        hover:bg-emerald-500 hover:text-white
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

{/* ================= CODETECH ================= */}
          <div className="relative pl-10 md:pl-20">
            {/* Timeline dot (decorative) */}
            <div className="absolute left-3 md:left-8 top-6 -translate-x-1/2 pointer-events-none">
              <div className="flex items-center justify-center w-6 h-6 md:w-10 md:h-10 rounded-full border-2 border-emerald-400 bg-white shadow-sm">
                <div className="flex items-center justify-center w-4 h-4 md:w-7 md:h-7 rounded-full bg-emerald-400">
                  <i className="bi bi-briefcase-fill text-white text-[10px] md:text-sm" />
                </div>
              </div>
            </div>

            {/* Card (interactive) */}
            <div className="relative z-10 bg-white/95 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 border border-slate-200 transition-all duration-300 group transform-gpu">
              {/* Header */}
<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 border-b border-slate-200 pb-6 mb-6 min-h-[96px]">
  {/* Left */}
<div className="min-w-[240px]">
  <Link
    href="https://www.linkedin.com/company/codtech-it-solutions/"
    target="_blank"
    className="flex items-center gap-3 mb-3"
  >
    <Image
      src="/images/codetech_logo.jpg"
      alt="CodTech IT Solutions"
      width={48}
      height={48}
      priority
      loading="eager"
      className="rounded-lg border bg-white"
    />
    <h3 className="text-2xl lg:text-3xl font-black text-slate-900">
      CodTech IT Solutions
    </h3>
  </Link>

  <span className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold">
    Full Stack Developer Intern
  </span>
</div>



  {/* Right */}
  <div className="flex flex-col gap-1 items-center lg:items-end text-center lg:text-right">
    <div className="font-bold bg-slate-50 px-4 py-2 rounded-lg border inline-block">
      Aug 2024 – Sep 2024
    </div>
    <div className="text-sm text-slate-600">
      Remote
    </div>
  </div>
</div>


              {/* Content Grid */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
                {/* Highlights */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <i className="bi bi-star-fill text-emerald-500" />
                    Key Highlights
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 border border-emerald-200/70 shadow-sm hover:shadow-md hover:-translate-x-1 transition-all">
                      <i className="bi bi-shield-check text-emerald-500 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-lg text-slate-900 mb-1">
                          +30% system security
                        </div>
                        <div className="text-sm text-slate-600">
                          Enhanced overall system security
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-x-1 transition-all">
                      <i className="bi bi-award text-slate-500 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-lg text-slate-900 mb-1">
                          Recommendation letter
                        </div>
                        <div className="text-sm text-slate-600">
                          Letter of recommendation received
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-x-1 transition-all">
                      <i className="bi bi-calendar3 text-slate-500 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-lg text-slate-900 mb-1">
                          6-week program
                        </div>
                        <div className="text-sm text-slate-600">
                          Intensive full-stack internship
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-4 lg:pr-3 max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-300/60 scrollbar-track-transparent">
                  <h4 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <i className="bi bi-trophy text-slate-500" />
                    Key Achievements
                  </h4>
                  <div className="space-y-3">
                    {[
                      'Comprehensive full-stack development with data security focus',
                      'JWT authentication, password hashing & salting implementation',
                      'End-to-end construction project management web application',
                      'Real-time collaboration features with Socket.IO',
                      'Dynamic billing system & progress tracking dashboard',
                      'Document management for drawings & tender processes',
                      'Cross-functional team collaboration on user-centric solutions',
                    ].map((achievement, idx) => (
                      <div
                        key={idx}
                        className="relative p-4 rounded-2xl bg-white/80 border border-slate-200 hover:bg-slate-50 hover:border-slate-400 hover:shadow-md hover:-translate-y-0.5 transition-all text-sm lg:text-base text-slate-800 leading-relaxed pl-7"
                      >
                        <span className="absolute left-3 top-3 text-slate-500 font-bold">
                          ▸
                        </span>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-8 mt-8 border-t border-slate-200">
                <h4 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-3">
                  <i className="bi bi-cpu text-slate-500" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Node.js',
                    'Express.js',
                    'EJS',
                    'MongoDB',
                    'Socket.IO',
                    'JWT',
                    'Cloudinary',
                    'HTML5',
                    'CSS3',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-2xl bg-slate-50 border border-slate-200 font-semibold text-xs md:text-sm text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:shadow-md hover:-translate-y-0.5 transition-all whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}




          // {/* Future Experience Item */}
          // <div className="relative pl-4 md:pl-20">
          //   {/* Timeline marker */}
          //   <div className="absolute left-0 md:left-8 top-6 -translate-x-1/2 md:-translate-x-1/2">
          //     <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-500 bg-slate-900 shadow-sm">
          //       <div className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-800 animate-pulse">
          //         <i className="bi bi-arrow-right-circle text-white text-sm" />
          //       </div>
          //     </div>
          //   </div>

          //   {/* Future Card */}
          //   <div className="relative bg-gradient-to-br from-slate-50/95 to-white/90 backdrop-blur-xl rounded-3xl p-10 lg:p-12 border-2 border-dashed border-slate-400/70 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 text-center">
          //     <h3 className="text-2xl lg:text-3xl font-black text-slate-700 mb-4 tracking-tight">
          //       Next Opportunity
          //     </h3>
          //     <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
          //       Ready to contribute to innovative projects and grow with forward-thinking teams
          //     </p>
          //   </div>
          // </div>



