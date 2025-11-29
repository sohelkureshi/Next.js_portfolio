'use client'

import Image from 'next/image'

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
      <section className="max-w-full bg-white py-14 lg:py-16 mt-4 border-t border-slate-100">
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
    </>
  )
}
