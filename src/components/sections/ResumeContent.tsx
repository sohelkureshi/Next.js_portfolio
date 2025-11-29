// src/components/sections/ResumeContent.tsx
'use client'

import Link from 'next/link'

export default function ResumeContent() {
  return (
    <section
      id="resume"
      className="pt-8 pb-16 max-w-4xl mx-auto px-4 bg-white"
    >
      {/* Header */}
      <div className="relative text-center mb-10 lg:mb-12 z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-2 tracking-tight select-none">
          Professional Resume
        </h2>

        <div className="mt-3 w-24 h-1.5 mx-auto rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500" />

        <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
          Full-Stack Developer • NIT Nagpur Graduate • MERN Stack Specialist
        </p>
      </div>

      {/* Quick Actions */}
      <div className="mb-14">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
          {/* Download PDF (Google Drive) */}
          <a
            href="https://drive.google.com/uc?export=download&id=1lAO3ZQfPui5a5ixKilIqAz7oAAmK-_qN"
            download="Sohel_Kureshi_Resume.pdf"
            className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-2xl
                       bg-slate-900 text-white text-sm font-semibold
                       border border-slate-900 shadow-lg hover:shadow-xl
                       hover:bg-slate-800 active:scale-[0.98] transition-all"
          >
            {/* Download icon */}
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 4v12" />
                <path d="M7 11l5 5 5-5" />
                <rect x="4" y="18" width="16" height="2" rx="1" />
              </svg>
            </span>
            <span>Download PDF</span>
          </a>

          {/* View Online (Google Drive view link) */}
          <a
            href="https://drive.google.com/file/d/1lAO3ZQfPui5a5ixKilIqAz7oAAmK-_qN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-2xl
                       bg-white text-slate-900 text-sm font-semibold
                       border border-slate-200 shadow-sm hover:shadow-md
                       hover:border-emerald-400 hover:bg-emerald-50/40 active:scale-[0.98] transition-all"
          >
            {/* Eye icon */}
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-900/90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.7}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1.5 12s3.5-6.5 10.5-6.5S22.5 12 22.5 12 19 18.5 12 18.5 1.5 12 1.5 12Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </span>
            <span>View Online</span>
          </a>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-14 rounded-3xl border border-slate-200 bg-white/95 backdrop-blur-xl shadow-xl p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-2xl border border-emerald-400/70 bg-emerald-50 flex items-center justify-center">
            {/* Person icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4.5 h-4.5 text-emerald-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.7}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="3.3" />
              <path d="M5 19.2C6 16.8 8.7 15 12 15s6 1.8 7 4.2" />
            </svg>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
            Professional Summary
          </h3>
        </div>

        <p className="text-sm md:text-base text-slate-700 leading-relaxed">
          B.Tech graduate from <span className="font-semibold text-slate-900">NIT Nagpur</span> with full-stack development experience.
          Skilled in the MERN stack, Next.js and modern web technologies. Completed internships and launched
          multiple projects demonstrating strong problem-solving and technical skills.
        </p>
      </div>

      {/* Key Highlights */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-5">
          {/* star icon */}
          <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5 text-emerald-600"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 3.5 14 9l5 .4-4 3.2 1.3 5.2L12 15.8 7.7 17.8 9 12.6 5 9.4 10 9z" />
            </svg>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
            Key Highlights
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
  {/* Education */}
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-all">
    <div className="mb-3 inline-flex items-center justify-center w-9 h-9 rounded-xl 
      bg-emerald-50 text-emerald-700 border border-emerald-200">

      {/* Mortarboard Icon — now emerald theme */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4.5 h-4.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#047857"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9 12 5l9 4-9 4-9-4Z" />
        <path d="M7 11v4.5c0 .7.6 1.4 1.8 2 1.1.6 2.5.9 3.2.9.7 0 2.1-.3 3.2-.9 1.2-.6 1.8-1.3 1.8-2V11" />
      </svg>
    </div>

    <h4 className="text-base font-semibold text-slate-900 mb-1">Education</h4>
    <p className="text-sm text-slate-700 leading-relaxed">
      NIT Nagpur Graduate
      <br />
      <span className="text-xs text-slate-500">CGPA: 7.60 / 10.0</span>
    </p>
  </div>

{/* Technical Skills */}
<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-all">
  <div className="mb-3 inline-flex items-center justify-center w-9 h-9 rounded-xl 
    bg-emerald-50 text-emerald-700 border border-emerald-200">

    {/* Professional Settings/Gear Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#047857"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 5 15.4a1.65 1.65 0 0 0-1.51-1H3.4a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1A1.65 1.65 0 0 0 4.67 7.6l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9.2 5c.52-.22.87-.73.87-1.31V3a2 2 0 1 1 4 0v.09c0 .58.35 1.09.87 1.31a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19 9.2c.22.52.73.87 1.31.87H21a2 2 0 1 1 0 4h-.09c-.58 0-1.09.35-1.31.87z" />
    </svg>
  </div>

  <h4 className="text-base font-semibold text-slate-900 mb-1">
    Technical Skills
  </h4>
  <p className="text-sm text-slate-700 leading-relaxed">
    MERN Stack Expert
    <br />
    <span className="text-xs text-slate-500">Full-Stack Development</span>
  </p>
</div>



  {/* Projects */}
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-all">
    <div className="mb-3 inline-flex items-center justify-center w-9 h-9 rounded-xl 
      bg-emerald-50 text-emerald-700 border border-emerald-200">

      {/* Folder Icon — now emerald theme */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4.5 h-4.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#047857"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.5 7.5A2.5 2.5 0 0 1 6 5h4l2 2h6a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 18 19H6a2.5 2.5 0 0 1-2.5-2.5z" />
      </svg>
    </div>

    <h4 className="text-base font-semibold text-slate-900 mb-1">Projects</h4>
    <p className="text-sm text-slate-700 leading-relaxed">
      50+ Deployed Projects
      <br />
      <span className="text-xs text-slate-500">Real-world Applications</span>
    </p>
  </div>
</div>

      </div>

      {/* Resume Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">


        <div className="rounded-2xl border border-slate-200 bg-white/95 p-6 text-center shadow-sm hover:shadow-md transition-all">
          <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">
            50+
          </div>
          <div className="text-xs md:text-sm font-medium text-slate-600">
            Technologies
          </div>
        </div>

        
        <div className="rounded-2xl border border-slate-200 bg-white/95 p-6 text-center shadow-sm hover:shadow-md transition-all">
          <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">
            2025
          </div>
          <div className="text-xs md:text-sm font-medium text-slate-600">
            Graduate Year
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/95 p-6 text-center shadow-sm hover:shadow-md transition-all">
          <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">
            6+
          </div>
          <div className="text-xs md:text-sm font-medium text-slate-600">
            Weeks Experience
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/95 p-6 text-center shadow-sm hover:shadow-md transition-all">
          <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">
            50+
          </div>
          <div className="text-xs md:text-sm font-medium text-slate-600">
            Projects
          </div>
        </div>

        
      </div>
    </section>
  )
}
