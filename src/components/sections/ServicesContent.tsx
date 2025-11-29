// src/components/sections/ServicesContent.tsx
'use client'

import Link from 'next/link'

export default function ServicesContent() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-8 max-w-7xl mx-auto px-4 bg-white"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h1
          id="services-heading"
          className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-2 tracking-tight select-none"
        >
          Services I Offer
        </h1>

        <div className="mt-4 w-24 h-1.5 mx-auto rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500" />

        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Professional web development solutions tailored to your needs.
        </p>
      </div>

      {/* Services Grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
  {/* Full-Stack Development */}
  <div className="group relative p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-500/80 hover:-translate-y-1.5 transition-all duration-300">
    <div className="mb-6 flex items-center gap-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-emerald-500/60 bg-emerald-50">
        {/* Full-Stack icon: browser + server */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#047857"
          strokeWidth={1.7}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* top: browser */}
          <rect x="3" y="4" width="18" height="7" rx="1.5" />
          <path d="M6 6.5h2" />
          <path d="M9.5 6.5h2" />
          {/* bottom: server / API box */}
          <rect x="5" y="14" width="14" height="6" rx="1.5" />
          <path d="M8 17h4" />
          <path d="M14.5 17h1.5" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-900">
          Full-Stack Web Development
        </h3>
        <p className="text-xs font-medium text-emerald-700 uppercase tracking-[0.16em] mt-1">
          High-performance MERN applications
        </p>
      </div>
    </div>

    <ul className="space-y-3 mb-6 text-sm text-slate-700">
      <li className="flex items-start gap-3">
        <span className="mt-1 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
        <span>React.js Frontend</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-1 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
        <span>Node.js Backend</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-1 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
        <span>Database Design</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-1 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
        <span>API Development</span>
      </li>
    </ul>

    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
      <div className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-semibold text-emerald-700">
        Web Apps · MERN · APIs
      </div>
      <div className="text-right">
        <span className="block text-[11px] uppercase tracking-[0.16em] text-slate-500">
          Next step
        </span>
        <span className="text-xl font-bold text-slate-900">
          Request Estimate
        </span>
      </div>
    </div>
  </div>

  {/* UI/UX Design */}
  <div className="group relative p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-500/80 hover:-translate-y-1.5 transition-all duration-300">
    <div className="mb-6 flex items-center gap-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-emerald-500/60 bg-emerald-50">
        {/* UI layout + cursor icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#047857"
          strokeWidth={1.7}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* layout frame */}
          <rect x="3.5" y="4" width="11" height="14" rx="1.5" />
          <path d="M3.5 8h11" />
          <path d="M8 4v14" />
          {/* cursor over layout */}
          <path d="M15.5 9.5 20.5 12 17.4 13.1 18.5 16.5 16.8 17.2 15.7 13.9 13.5 15.1 15.5 9.5Z" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-900">
          UI/UX Design &amp; Frontend
        </h3>
        <p className="text-xs font-medium text-emerald-700 uppercase tracking-[0.16em] mt-1">
          Beautiful, accessible interfaces
        </p>
      </div>
    </div>

    <ul className="space-y-3 mb-6 text-sm text-slate-700">
      <li className="flex items-start gap-3">
        <span className="mt-1 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
        <span>Responsive Design</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-1 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
        <span>User Research</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-1 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
        <span>Prototyping</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-1 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
        <span>CSS Animations</span>
      </li>
    </ul>

    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
      <div className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-semibold text-emerald-700">
        UI/UX · Frontend · Branding
      </div>

      <div className="text-right">
        <span className="block text-[11px] uppercase tracking-[0.16em] text-slate-500">
          Pricing
        </span>
        <span className="text-xl font-bold text-slate-900">
          Transparent &amp; scoped
        </span>
      </div>
    </div>
  </div>

  {/* Data Analytics & ML Solutions */}
  <div className="group relative p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-500/80 hover:-translate-y-1.5 transition-all duration-300">
    <div className="mb-6 flex items-center gap-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-emerald-500/60 bg-emerald-50">
        {/* Analytics chart + trend line icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#047857"
          strokeWidth={1.7}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 18V6" />
          <path d="M4 18h16" />
          <rect x="6.5" y="11" width="2.5" height="5" rx="0.4" />
          <rect x="11" y="9" width="2.5" height="7" rx="0.4" />
          <rect x="15.5" y="7" width="2.5" height="9" rx="0.4" />
          <path d="M6 10l3-2.5L12 11l4-4 2 1.5" />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-900">
          Data Analytics &amp; ML Solutions
        </h3>
        <p className="text-xs font-medium text-emerald-700 uppercase tracking-[0.16em] mt-1">
          Dashboards, models &amp; insights
        </p>
      </div>
    </div>

    <ul className="space-y-3 mb-6 text-sm text-slate-700">
      <li className="flex items-start gap-3">
        <span className="mt-1 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
        <span>Exploratory Analysis &amp; Reporting</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-1 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
        <span>Interactive Dashboards</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-1 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
        <span>Predictive Models &amp; Forecasting</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-1 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
        <span>Deployment &amp; Monitoring (MLOps)</span>
      </li>
    </ul>

    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
      <div className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-semibold text-emerald-700">
        Analytics · Dashboards · ML
      </div>

      <div className="text-right">
        <span className="block text-[11px] uppercase tracking-[0.16em] text-slate-500">
          Engagement
        </span>
        <span className="text-xl font-bold text-slate-900">
          Fixed project pricing
        </span>
      </div>
    </div>
  </div>
</div>

      {/* Process Section */}
      <div className="mb-20 rounded-3xl border border-slate-200 bg-white/95 backdrop-blur-xl p-10 md:p-14 shadow-xl">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-10 tracking-tight select-none">
          My Development Process
        </h3>

        <div className="relative">
          {/* connector line on md+ */}
          <div className="hidden md:block absolute inset-x-10 top-10 h-px bg-slate-200" />

          <div className="grid md:grid-cols-4 gap-8 md:gap-10">
            {[
              {
                step: 1,
                title: 'Discovery',
                desc: 'Requirements gathering, technical assessment, and project scoping.',
              },
              {
                step: 2,
                title: 'Design',
                desc: 'Wireframes, UI/UX design, and technical architecture planning.',
              },
              {
                step: 3,
                title: 'Development',
                desc: 'Clean implementation with testing and incremental delivery.',
              },
              {
                step: 4,
                title: 'Delivery',
                desc: 'Deployment, documentation, handover, and ongoing support.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-full border-2 border-emerald-500 bg-white flex items-center justify-center shadow-sm">
                    <span className="text-lg font-bold text-slate-900">{step}</span>
                  </div>
                  <div className="mt-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-500">
                    Step
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight select-none">
          Ready to Start Your Project?
        </h3>
        <p className="text-base md:text-lg text-slate-600 mb-9 max-w-2xl mx-auto leading-relaxed">
          Share your requirements and let&apos;s build something impactful together.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl 
                     bg-slate-900 text-white text-sm md:text-base font-semibold
                     border border-slate-900 shadow-xl hover:shadow-2xl
                     hover:bg-slate-800 active:scale-[0.98] transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Start Your Project</span>
        </Link>
      </div>
    </section>
  )
}
