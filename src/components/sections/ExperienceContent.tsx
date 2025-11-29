// src/components/sections/ExperienceContent.tsx
'use client'

export default function ExperienceContent() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-16 lg:py-8 max-w-5xl mx-auto px-4 lg:px-8 bg-white"
    >
      {/* Section Header */}
      <div className="relative text-center mb-10 lg:mb-12 z-10">
        <h1
          id="experience-heading"
          className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-2 tracking-tight select-none"
        >
          Professional Experience
        </h1>

        <div className="mt-3 w-24 h-1.5 mx-auto rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500" />

        <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
          Building solutions that matter
        </p>
      </div>



      {/* Timeline container */}
      <div className="relative">
        {/* Vertical timeline line (desktop) */}
        <div className="hidden md:block absolute left-8 top-0 bottom-0">
          <div className="w-px h-full bg-slate-200" />
        </div>

        <div className="space-y-12 lg:space-y-16">
          {/* Codetech Experience Item */}
          <div className="relative pl-4 md:pl-20">
            {/* Timeline marker */}
            <div className="absolute left-0 md:left-8 top-6 -translate-x-1/2 md:-translate-x-1/2">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-emerald-500 bg-white shadow-sm">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500">
                  <i className="bi bi-briefcase-fill text-white text-sm" />
                </div>
              </div>
            </div>

            {/* Experience Card */}
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 border border-slate-200 transition-all duration-300 group">
              {/* Experience Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 pb-8 border-b border-slate-200/60 gap-6 lg:gap-8">
                <div className="lg:flex-1">
                  <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4 tracking-tight">
                    CodTech IT Solutions Pvt. Ltd
                  </h3>
                  <span className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-2xl font-bold text-sm shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Full Stack Developer Intern
                  </span>
                </div>
                <div className="flex flex-col lg:items-end gap-2 text-right">
                  <div className="text-sm md:text-base font-bold text-slate-900 bg-slate-50 px-5 py-2.5 rounded-xl shadow-sm border border-slate-200">
                    Aug 2024 – Sep 2024
                  </div>
                  <div className="text-sm text-slate-600 font-medium flex items-center justify-end gap-2">
                    <i className="bi bi-globe" />
                    <span>Remote</span>
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

          {/* Future Experience Item */}
          <div className="relative pl-4 md:pl-20">
            {/* Timeline marker */}
            <div className="absolute left-0 md:left-8 top-6 -translate-x-1/2 md:-translate-x-1/2">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-500 bg-slate-900 shadow-sm">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-800 animate-pulse">
                  <i className="bi bi-arrow-right-circle text-white text-sm" />
                </div>
              </div>
            </div>

            {/* Future Card */}
            <div className="relative bg-gradient-to-br from-slate-50/95 to-white/90 backdrop-blur-xl rounded-3xl p-10 lg:p-12 border-2 border-dashed border-slate-400/70 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 text-center">
              <h3 className="text-2xl lg:text-3xl font-black text-slate-700 mb-4 tracking-tight">
                Next Opportunity
              </h3>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
                Ready to contribute to innovative projects and grow with forward-thinking teams
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
