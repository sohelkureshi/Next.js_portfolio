// src/components/sections/EducationContent.tsx
'use client'

import { useState, useMemo } from 'react'

type StepId = 'ssc' | 'hsc' | 'btech'

const STEPS: { id: StepId; short: string; label: string; years: string }[] = [
  { id: 'ssc', short: 'SSC', label: 'Class X', years: '2017 - 2018' },
  { id: 'hsc', short: 'HSC', label: 'Class XII', years: '2019 - 2020' },
  { id: 'btech', short: 'B.Tech', label: 'B.Tech', years: '2021 - 2025' },
]

export default function EducationContent() {
  const [activeStep, setActiveStep] = useState<StepId>('btech')

  const activeIndex = useMemo(() => STEPS.findIndex((s) => s.id === activeStep), [activeStep])
  const progressPercent = useMemo(() => {
    const max = STEPS.length - 1
    return `${(activeIndex / max) * 100}%`
  }, [activeIndex])

  return (
    <section id="education" className="py-8 max-w-7xl mx-auto px-4 bg-white">
      {/* Header */}
      <div className="text-center mb-14">

        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-2 tracking-tight select-none">
          Academic Journey
        </h2>

        <div className="w-24 h-1.5 mx-auto rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 shadow-sm" />

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mt-6 leading-relaxed">
          Building knowledge through excellence and dedication
        </p>
      </div>

      {/* Timeline with arrows */}
      <div className="relative max-w-4xl mx-auto mb-12">
        {/* underlying faint line */}
        <div className="absolute left-6 right-6 top-10 h-px bg-slate-200 rounded" />

        {/* progress bar that fills to active */}
        <div
          className="absolute left-6 top-10 h-px bg-emerald-300 rounded transition-width duration-500"
          style={{ width: progressPercent }}
        />

        <div className="relative flex items-center justify-between gap-2 px-2">
          {STEPS.map((step, idx) => {
            const isActive = activeStep === step.id
            const isPast = STEPS.findIndex((s) => s.id === activeStep) >= idx
            return (
              <div key={step.id} className="flex items-center gap-2">
                {/* Node */}
                <button
                  onClick={() => setActiveStep(step.id)}
                  className="flex flex-col items-center gap-2 focus:outline-none"
                  aria-pressed={isActive}
                >
                  <span
                    className={[
                      'flex items-center justify-center rounded-full border-2 transition-all duration-300',
                      /* bigger circle */
                      'w-14 h-14 text-xs font-semibold',
                      isActive
                        ? 'bg-emerald-500 border-emerald-500 text-white shadow-xl scale-105'
                        : isPast
                        ? 'bg-white border-emerald-300 text-emerald-700 shadow-sm'
                        : 'bg-white border-slate-300 text-slate-700 hover:border-emerald-400 hover:shadow-md',
                    ].join(' ')}
                  >
                    <span className="select-none">{step.short}</span>
                  </span>
                  <span className="text-xs uppercase tracking-wide text-slate-500 font-medium">{step.years}</span>
                </button>

                {/* Arrow to next (only if not last) */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden md:flex items-center px-2">
                    <svg
                      className={`w-10 h-6 transform transition-transform duration-700 ${
                        activeIndex >= idx + 1 ? 'translate-x-1 opacity-100' : 'translate-x-0 opacity-50'
                      }`}
                      viewBox="0 0 40 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path d="M2 12h30" stroke={activeIndex >= idx + 1 ? '#059669' : '#94a3b8'} strokeWidth="2.5" strokeLinecap="round" />
                      <path
                        d="M28 6l8 6-8 6"
                        fill="none"
                        stroke={activeIndex >= idx + 1 ? '#059669' : '#94a3b8'}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Active Card Area */}
      <div className="max-w-4xl mx-auto mb-16 space-y-8">
        {/* B.Tech Card */}
        {activeStep === 'btech' && (
          <div
            className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-10 lg:p-12 shadow-2xl border border-slate-200/70 transition-all duration-500"
          >
            <div className="absolute -top-4 left-10 h-8 w-28 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-xs font-semibold text-emerald-700 uppercase tracking-wide">
              Latest
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-6">
              <div className="lg:flex-1">
                <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3 tracking-tight">
                  Visvesvaraya National Institute of Technology
                </h3>
                <div className="text-slate-600 text-lg font-medium">Nagpur, Maharashtra</div>
              </div>
              <div className="bg-gradient-to-r from-emerald-50 to-slate-50 border border-emerald-200 px-6 py-3 rounded-2xl">
                <span className="font-bold text-emerald-700 text-lg select-none">Premier Institute</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 mb-10">
              <div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Bachelor of Technology</h4>
                <div className="text-slate-600 text-xl font-medium mb-4">2021 - 2025</div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="text-4xl font-black text-slate-900 mb-1">7.60</div>
                  <div className="text-slate-600 font-medium">CGPA / 10.0</div>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="text-4xl font-black text-slate-900 mb-1">4</div>
                  <div className="text-slate-600 font-medium">Years</div>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h5 className="text-2xl font-bold text-slate-900 mb-5">Relevant Coursework</h5>
              <div className="flex flex-wrap gap-3">
                <span className="px-5 py-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 font-medium select-none">
                  Data Structures & Algorithms
                </span>
                <span className="px-5 py-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 font-medium select-none">
                  Object Oriented Programming
                </span>
                <span className="px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium select-none">
                  Database Management Systems
                </span>
                <span className="px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium select-none">
                  Operating Systems
                </span>
                <span className="px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium select-none">
                  System Design
                </span>
              </div>
            </div>

            <div>
              <h5 className="text-2xl font-bold text-slate-900 mb-5">Key Highlights</h5>
              <ul className="space-y-3 text-lg text-slate-700 max-w-2xl">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span>Specialized in programming and software development alongside core engineering</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span>Completed multiple full-stack development projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span>Active participant in technical workshops and coding competitions</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* HSC Card */}
        {activeStep === 'hsc' && (
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-10 lg:p-12 shadow-2xl border border-slate-200/70 transition-all duration-500">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-6">
              <div className="lg:flex-1">
                <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">Milind College of Science</h3>
                <div className="text-slate-600 text-lg font-medium">Aurangabad, Maharashtra</div>
              </div>
              <div className="bg-gradient-to-r from-emerald-50 to-slate-50 border border-emerald-200 px-6 py-3 rounded-2xl">
                <span className="font-bold text-emerald-700 text-lg select-none">Higher Secondary</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 mb-10">
              <div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Class XII - Science Stream (HSC)</h4>
                <div className="text-slate-600 text-xl font-medium mb-4">2019 - 2020</div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="text-4xl font-black text-slate-900 mb-1">84.12%</div>
                  <div className="text-slate-600 font-medium">Percentage</div>
                </div>
                <div className="flex items-center justify-center p-6 bg-gradient-to-r from-emerald-50 to-slate-50 border border-emerald-200 rounded-2xl">
                  <span className="font-bold text-emerald-700 select-none">Excellent</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-2xl font-bold text-slate-900 mb-5">Core Subjects</h5>
              <div className="flex flex-wrap gap-4">
                <span className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-800 select-none">Physics</span>
                <span className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-800 select-none">Chemistry</span>
                <span className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-800 select-none">Mathematics</span>
              </div>
            </div>
          </div>
        )}

        {/* SSC Card */}
        {activeStep === 'ssc' && (
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-10 lg:p-12 shadow-2xl border border-slate-200/70 transition-all duration-500">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-6">
              <div className="lg:flex-1">
                <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">CSK Jain English School</h3>
                <div className="text-slate-600 text-lg font-medium">Jalna, Maharashtra</div>
              </div>
              <div className="bg-gradient-to-r from-emerald-50 to-slate-50 border border-emerald-200 px-6 py-3 rounded-2xl">
                <span className="font-bold text-emerald-700 text-lg select-none">Secondary</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 mb-10">
              <div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Class X - Secondary School Certificate (SSC)</h4>
                <div className="text-slate-600 text-xl font-medium mb-4">2017 - 2018</div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="text-4xl font-black text-slate-900 mb-1">90.80%</div>
                  <div className="text-slate-600 font-medium">Percentage</div>
                </div>
                <div className="flex items-center justify-center p-6 bg-gradient-to-r from-emerald-50 to-slate-50 border border-emerald-200 rounded-2xl">
                  <span className="font-bold text-emerald-700 select-none">Outstanding</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-r from-slate-50 to-emerald-50 border-l-4 border-emerald-400 rounded-2xl">
              <p className="text-lg text-slate-700 font-medium">
                Strong foundation in mathematics and sciences that sparked interest in technology and problem-solving
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Summary */}
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-14 shadow-2xl border border-slate-200">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12 select-none">
          Academic Excellence Overview
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-slate-50 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all text-center hover:-translate-y-2">
            <div className="text-5xl font-black text-slate-900 mb-3">4+</div>
            <div className="text-slate-600 text-xl font-semibold">Years at Premier Institute</div>
          </div>
          <div className="p-10 bg-slate-50 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all text-center hover:-translate-y-2">
            <div className="text-5xl font-black text-slate-900 mb-3">7.60</div>
            <div className="text-slate-600 text-xl font-semibold">Current CGPA</div>
          </div>
          <div className="p-10 bg-slate-50 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all text-center hover:-translate-y-2">
            <div className="text-5xl font-black text-slate-900 mb-3">85%+</div>
            <div className="text-slate-600 text-xl font-semibold">Consistent Performance</div>
          </div>
        </div>
      </div>
    </section>
  )
}
