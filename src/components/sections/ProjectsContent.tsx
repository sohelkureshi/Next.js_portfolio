// src/components/sections/ProjectsContent.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function ProjectsContent() {
  const projects = [
    {
      name: 'EstateEase',
      image: '/images/estateease_main.png',
      description:
        'Modern real estate platform with advanced search, secure authentication, and property management tools.',
      tech: ['React', 'Redux','Node.js', 'MongoDB', 'Firebase'],
      live: 'https://estateease-tvuo.onrender.com',
      github: 'https://github.com/sohelkureshi/EstateEase',
      category: 'Real Estate',
    },
    {
      name: 'CollabNotes',
      image: '/images/collab_notes.png',
      description:
        'Real-time collaborative note-taking app with sharing, co-editing, access control, and version history.',
      tech: ['Next.js 14', 'Express', 'MongoDB', 'Socket.IO', 'HeroUI', 'Tailwind'],
      live: 'https://collaborative-note-app-flame.vercel.app',
      github: 'https://github.com/sohelkureshi/collaborative-note-app',
      category: 'Productivity',
    },
    {
      name: 'ASIN AI Optimizer',
      image: '/images/Asin_AI.png',
      description:
        'AI-powered tool that fetches Amazon product data and generates optimized titles, bullets, descriptions, and keyword ideas.',
      tech: ['React ', 'Node.js', 'MySQL', 'Gemini', 'Puppeteer'],
      live: 'https://asin-ai-optimizer.netlify.app',
      github: 'https://github.com/sohelkureshi/ASIN-AI-Optimizer',
      category: 'Ecommerce',
    },
    {
      name: 'E-Notebook',
      image: '/images/enotebook.png',
      description:
        'Secure online notebook with JWT authentication, real-time sync, and intuitive note organization.',
      tech: ['MERN', 'JWT', 'Bootstrap'],
      live: 'https://e-notebook-fu9z.onrender.com',
      github: 'https://github.com/sohelkureshi/eNotebook',
      category: 'Productivity',
    },
    {
      name: 'Dance Fusion Website',
      image: '/images/proj_dance.jpeg',
      description:
        'Dynamic web platform for dance enthusiasts with responsive design, user inquiries, and event management features.',
      tech: ['Pug', 'Node.js', 'MongoDB'],
      live: '',
      github: 'https://github.com/sohelkureshi/Dance-Fusion-website',
      category: 'Entertainment',
    },
    {
      name: 'Materials Comparison Dashboard',
      image: '/images/proj_material.png',
      description:
        'Interactive dashboard to compare material properties with dynamic charts and clear visual insights.',
      tech: ['Chart.js', 'Bootstrap', 'JavaScript'],
      live: 'https://sohelkureshi.github.io/Materials-Comparison-Dashboard',
      github: 'https://github.com/sohelkureshi/Materials-Comparison-Dashboard',
      category: 'Analytics',
    },
  ]

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-14 lg:py-8 max-w-7xl mx-auto px-4 lg:px-8 bg-white"
    >
      {/* Section Header */}
      <div className="text-center mb-10 lg:mb-12 relative">
        <h1
          id="projects-heading"
          className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-2 tracking-tight select-none"
        >
          Featured Work
        </h1>

        <div className="mt-3 w-24 h-1.5 mx-auto rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500" />

        <p className="mt-5 text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Transforming ideas into robust, production-ready web applications.
        </p>
      </div>

      {/* Featured Project – Left / Right */}
      <div
        tabIndex={0}
        className="relative mb-16 lg:mb-18 max-w-6xl mx-auto rounded-3xl border border-slate-200 bg-white/95 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:border-emerald-500/70 hover:-translate-y-1 transition-all duration-300 group"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT: Image */}
          <div className="relative h-64 lg:h-full overflow-hidden rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
            <Image
              src="/images/proj_construction.jpg"
              alt="Construction Projects Management"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-900/30 to-transparent">
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 text-slate-50 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Construction Projects Management
                </span>
                <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/10 text-slate-50 border border-white/20">
                  Full-Stack Application
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="p-6 lg:p-9 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-200 bg-white rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  Construction Projects Management
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                  Real-time collaboration · Document workflows · Billing
                </p>
              </div>
              <div className="shrink-0 px-3 py-1 rounded-full border border-emerald-500/70 bg-emerald-50 text-[11px] font-semibold text-emerald-700">
                Featured
              </div>
            </div>

            <p className="text-slate-700 text-sm md:text-base mb-5 max-w-xl leading-relaxed">
              Comprehensive web application for managing construction projects: real-time collaboration
              between teams, secure billing and invoicing, and structured document and drawing management.
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {['Node.js', 'Express.js', 'MongoDB', 'EJS','Socket.IO', 'Cloudinary'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-semibold px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-900"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <Link
                href="https://construction-projects-mgmt.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-5 py-2.5 rounded-2xl 
                           bg-slate-900 text-white text-sm font-semibold
                           shadow-md hover:shadow-lg hover:bg-slate-800 active:scale-[0.98] transition-all"
              >
                Live Demo
              </Link>
              <Link
                href="https://github.com/sohelkureshi/Constructionprojectsmgmt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-5 py-2.5 rounded-2xl 
                           bg-white text-slate-900 text-sm font-semibold
                           border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-400 active:scale-[0.98] transition-all"
              >
                Source Code
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-9">
        {projects.map(({ name, image, description, tech, live, github, category }) => (
          <div
            key={name}
            tabIndex={0}
            className="group rounded-3xl overflow-hidden border border-slate-200 bg-white/95 backdrop-blur-sm 
                       shadow-sm hover:shadow-xl hover:border-emerald-500/70 hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="relative h-48 md:h-52 lg:h-56 overflow-hidden">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full px-3 py-1 text-[11px] font-semibold text-slate-900 shadow-sm">
                  {category}
                </span>
              </div>
            </div>

            <div className="p-5 lg:p-6 flex flex-col flex-grow">
              <h4 className="text-lg lg:text-xl font-extrabold text-slate-900 mb-1.5 leading-tight">
                {name}
              </h4>
              <p className="text-slate-700 text-sm lg:text-sm mb-4 flex-grow leading-relaxed">
                {description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-semibold px-2 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-900"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-3">
                {live && (
                  <Link
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-2xl 
                               bg-emerald-600 text-white text-xs font-semibold
                               shadow-md hover:shadow-lg hover:bg-emerald-700 active:scale-[0.98] transition-all"
                  >
                    Live
                  </Link>
                )}
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-2xl 
                             bg-white text-slate-900 text-xs font-semibold
                             border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-400 active:scale-[0.98] transition-all"
                >
                  Code
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-18 lg:mt-20 pt-12 border-t border-slate-200 text-center max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
          Explore More Projects
        </h3>
        <p className="text-sm md:text-base text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
          Browse additional experiments, open-source contributions, and case studies on my GitHub profile.
        </p>
        <Link
          href="https://github.com/sohelkureshi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-9 py-3.5 rounded-2xl 
                     bg-slate-900 text-white text-sm font-semibold
                     border border-slate-900 shadow-xl hover:shadow-2xl hover:bg-slate-800 active:scale-[0.98] transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>View GitHub Profile</span>
        </Link>
      </div>
    </section>
  )
}
