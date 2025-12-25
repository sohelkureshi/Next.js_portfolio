'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutContent() {
  return (
    <>
      {/* Adjust pt-20 below to control vertical space between navbar and About section */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="relative pt-8 pb-12 lg:pt-10 lg:pb-14 max-w-7xl mx-auto px-4 lg:px-8 overflow-hidden bg-white"
      >
        {/* Subtle emerald background shapes */}
        <div className="absolute inset-0 pointer-events-none opacity-70">
          <div className="absolute -top-40 -right-32 w-72 h-72 rounded-full bg-emerald-100/40 blur-3xl" />
          <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-slate-100/60 blur-3xl" />
        </div>

        {/* Header */}
        <div className="relative text-center mb-10 lg:mb-12 z-10">
          <h1
            id="about-heading"
            className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-2 tracking-tight select-none"
          >
            About Me
          </h1>

          <div className="mt-3 w-24 h-1.5 mx-auto rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500" />

          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Crafting digital experiences with passion and precision
          </p>
        </div>

        {/* Main content */}
        <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Photo */}
          <div className="relative max-w-sm mx-auto lg:mx-0">
            <div className="absolute -inset-2 rounded-[2rem] border border-emerald-100/70" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl bg-slate-100 border border-slate-200">
              <Image
                src="/images/sohel_image.jpg"
                alt="Portrait of full-stack developer Sohel Kureshi"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text column */}
          <div className="space-y-8 lg:space-y-10">
            {/* Description */}
            <p className="text-base md:text-lg leading-relaxed max-w-2xl text-slate-700 font-medium">
              Graduate of{' '}
              <strong className="text-xl md:text-2xl font-black text-emerald-700">
                NIT Nagpur
              </strong>{' '}
              with a passion for full-stack software development. Transforming ideas into impactful web
              applications and solving real-world problems with clean, scalable code.
            </p>

            {/* Quote - green note style */}
            <blockquote
              className="
                relative p-8 lg:p-9 
                bg-emerald-50/30 
                border-l-4 border-emerald-500 
                rounded-2xl 
                shadow-sm 
                hover:shadow-md 
                hover:-translate-y-1 
                transition-all duration-300
              "
            >
              <div className="absolute -top-4 -left-4 text-4xl lg:text-5xl text-emerald-500/90 drop-shadow">
                <i className="bi bi-quote" />
              </div>

              <p className="text-xl lg:text-2xl font-light italic text-slate-800 leading-relaxed font-serif">
                A self-driven programmer with a curious mind, always eager to learn and grow.
              </p>
            </blockquote>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { num: '100%', label: 'Client Satisfaction' },
                { num: '50+', label: 'Projects Completed' },
                { num: '100%', label: 'Dedication' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="relative p-5 rounded-2xl bg-white border border-slate-200 shadow-sm 
                           hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="absolute inset-x-4 top-0 h-0.5 rounded-full bg-emerald-500/80" />
                  <div className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900 mb-1">
                    {stat.num}
                  </div>
                  <div className="text-sm md:text-base font-semibold tracking-wide text-slate-700 select-none">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Me */}
      <section className="max-w-full bg-white py-14 lg:py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-7 flex items-center justify-center gap-3 text-slate-900 tracking-tight select-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 text-emerald-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.3l6.18 3.7-1.64-7 5.46-4.7-7.19-.6L12 2 9.19 8.7l-7.19.6 5.46 4.7-1.64 7L12 17.3z" />
            </svg>

            <span>What Drives Me</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-5">
            {['Clean Code', 'Team Collaboration', 'Innovation', 'Continuous Learning'].map((item) => (
              <span
                key={item}
                className="group relative px-7 py-3.5 bg-white rounded-3xl border border-slate-200 
                           hover:border-emerald-400 shadow-sm hover:shadow-md transition-all duration-300 
                           flex items-center text-sm md:text-base font-semibold text-slate-900 tracking-wide select-none"
              >
                <span className="mr-3 w-2.5 h-2.5 rounded-full bg-emerald-500 group-hover:scale-110 transition-transform" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Certifications - Clean Text Dates */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20 bg-white">
        <div className="space-y-8 lg:space-y-12">

{/* 1. Naukri Award - TOP PRIORITY - Mobile Responsive & Centered */}
<div className="group bg-gradient-to-r from-emerald-50 to-slate-50 rounded-2xl p-6 lg:p-10 border border-emerald-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
  {/* Mobile: Date badge below title (centered), Desktop: Top-right */}
  <div className="lg:absolute lg:top-6 lg:right-6 mb-4 lg:mb-0 mx-auto lg:mx-0 w-fit lg:w-auto">
    <div className="px-3 py-1.5 bg-emerald-100 rounded-full text-emerald-800 font-semibold text-xs border border-emerald-200 inline-block">
      January 2025
    </div>
  </div>
  
  <h3 className="text-2xl lg:text-4xl font-extrabold mb-4 lg:mb-6 flex items-center justify-center gap-2 lg:gap-3 text-slate-900 tracking-tight select-none">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 lg:w-7 lg:h-7 text-emerald-600 flex-shrink-0"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
    <span>Naukri Campus Engineers' Ring of Honour</span>
  </h3>
  
  <div className="text-center space-y-2 lg:space-y-3 mb-6 lg:mb-10">
    <div className="inline-flex items-center gap-2 px-3 py-2 mx-auto bg-amber-100 rounded-xl font-bold text-base lg:text-lg text-amber-800 shadow-sm border border-amber-200 w-fit">
      <span>₹20,000</span>
      <span className="text-sm font-semibold">Cash Prize</span>
    </div>
    <p className="text-slate-700 font-semibold text-sm lg:text-base max-w-md mx-auto leading-tight text-center lg:whitespace-nowrap">
  <span className="block lg:inline">College Rank 1 at VNIT Nagpur (Round 1)</span>
  <span className="hidden lg:inline mx-1">•</span>
  <span className="block lg:inline">AIR 122 (Round 2)</span>
</p>

  </div>
  
  <div className="text-center">
    <Link 
      href="https://www.naukri.com/campus/contests/scholarship-for-engineering-students/leaderboard" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-2.5 lg:px-8 lg:py-3 bg-emerald-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:bg-emerald-600 transition-all duration-300 text-sm"
    >
      View Leaderboard →
    </Link>
  </div>
</div>




          {/* 2. Coding Profiles */}
          <div className="group bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-3xl lg:text-4xl font-extrabold mb-6 flex items-center justify-center gap-3 text-slate-900 tracking-tight select-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-emerald-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.3l6.18 3.7-1.64-7 5.46-4.7-7.19-.6L12 2 9.19 8.7l-7.19.6 5.46 4.7-1.64 7L12 17.3z" />
              </svg>
              <span>Coding Profiles</span>
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-4 bg-emerald-50/50 rounded-xl border-l-4 border-emerald-200">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">LeetCode</p>
                  <p className="text-slate-600 text-sm">Consistent participation, solved <strong>300+</strong> problems</p>
                  <Link 
                    href="https://leetcode.com/u/sohelkureshi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm mt-1 inline-block transition-colors"
                  >
                    View Profile →
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-emerald-50/50 rounded-xl border-l-4 border-emerald-200">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">CodeChef</p>
                  <p className="text-slate-600 text-sm">
                    Gold Badge, 500+ problems solved, <strong>Global Rank 6</strong> in Starters 172
                  </p>
                  <Link 
                    href="https://www.codechef.com/users/sohel_313" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm mt-2 inline-block transition-colors"
                  >
                    View Profile →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Udemy Certifications */}
          <div className="group bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-3xl lg:text-4xl font-extrabold mb-8 flex items-center justify-center gap-3 text-slate-900 tracking-tight select-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-emerald-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>Udemy Certifications</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'Complete Full-Stack Web Development Bootcamp', id: '367ee4c4-43a3-4a40-a08e-107e99362701' },
                { name: 'Complete SQL and Databases Bootcamp', id: '59e877b1-1a60-41cd-af71-7971e7688e39' },
                { name: 'Mastering Data Structures & Algorithms using C and C++', id: 'db18c17d-0bc2-4151-88d6-5805a27bc565' }
              ].map((cert) => (
                <div key={cert.name} className="group/cert p-6 bg-slate-50/50 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all duration-300">
                  <div className="font-bold text-slate-900 text-lg mb-3 leading-tight">{cert.name}</div>
                  <Link 
                    href={`https://www.udemy.com/certificate/UC-${cert.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm hover:underline transition-colors"
                  >
                    View Certificate →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
