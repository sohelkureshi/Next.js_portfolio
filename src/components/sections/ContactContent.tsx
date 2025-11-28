// src/components/sections/ContactContent.tsx
'use client'

import { useState } from 'react'

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project_type: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formDataToSend = new FormData()
    formDataToSend.append('access_key', '74bb48fb-5af2-45f0-b335-c82067247a18')
    formDataToSend.append('name', formData.name)
    formDataToSend.append('email', formData.email)
    formDataToSend.append('project_type', formData.project_type)
    formDataToSend.append('message', formData.message)
    formDataToSend.append('subject', 'New Portfolio Contact')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      })

      if (response.ok) {
        setModalMessage("Message sent successfully! I'll get back to you within 24 hours.")
        setFormData({
          name: '',
          email: '',
          project_type: '',
          message: '',
        })
      } else {
        setModalMessage('Something went wrong. Please try again or email me directly.')
      }
    } catch (error) {
      setModalMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
      setShowModal(true)
    }
  }

  return (
    <section id="contact" className="relative py-8 max-w-7xl mx-auto px-4 bg-white">
      {/* Soft emerald glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-40 w-40 rounded-full bg-emerald-200/20 blur-3xl" />

      {/* Header */}
      <div className="relative text-center mb-16">
  

        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-2 tracking-tight select-none">
          Get In Touch
        </h2>

        <div className="w-24 h-1.5 mx-auto rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 shadow-sm" />

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mt-6 leading-relaxed">
          Let&apos;s collaborate and build something amazing together
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid lg:grid-cols-2 gap-16 mb-20">
        {/* LEFT COLUMN — Contact Cards */}
        <div className="space-y-6">
          {/* Email */}
          <div className="group p-6 bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200 hover:border-emerald-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-all shadow-sm">
              {/* Email Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#047857"
                strokeWidth="1.7"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                <path d="M5 7l7 6 7-6" />
              </svg>
            </div>

            <h4 className="text-2xl font-bold text-slate-900 mb-1">Email</h4>
            <p className="text-slate-600 mb-3 text-base">Drop me a line anytime</p>

            <a
              href="mailto:sohelkureshi138@gmail.com"
              className="inline-flex items-center gap-2 text-lg font-semibold text-emerald-600 hover:text-emerald-700"
            >
              sohelkureshi138@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="group p-6 bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200 hover:border-emerald-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-all shadow-sm">
              <div className="w-7 h-7 rounded-lg bg-slate-900 flex items-center justify-center">
                <span className="text-[10px] font-bold text-white">in</span>
              </div>
            </div>

            <h4 className="text-2xl font-bold text-slate-900 mb-1">LinkedIn</h4>
            <p className="text-slate-600 mb-3 text-base">Let&apos;s connect professionally</p>

            <a
              href="https://www.linkedin.com/in/sohelkureshi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg font-semibold text-emerald-600 hover:text-emerald-700"
            >
              View LinkedIn Profile
            </a>
          </div>

          {/* GitHub */}
          <div className="group p-6 bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200 hover:border-emerald-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-slate-800 transition-all shadow-sm">
              {/* GitHub Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-1.98c-3.2.7-3.88-1.39-3.88-1.39-.53-1.36-1.3-1.72-1.3-1.72-1.06-.74.08-.73.08-.73 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.19a10.9 10.9 0 0 1 5.8 0c2.2-1.5 3.18-1.19 3.18-1.19.63 1.58.23 2.75.11 3.04.74.82 1.18 1.86 1.18 3.11 0 4.43-2.69 5.41-5.26 5.69.41.36.77 1.08.77 2.18v3.23c0 .31.2.67.8.56A11.51 11.51 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"
                />
              </svg>
            </div>

            <h4 className="text-2xl font-bold text-slate-900 mb-1">GitHub</h4>
            <p className="text-slate-600 mb-3 text-base">Explore my code repositories</p>

            <a
              href="https://github.com/sohelkureshi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg font-semibold text-emerald-600 hover:text-emerald-700"
            >
              Visit GitHub Profile
            </a>
          </div>

          {/* WhatsApp / Phone */}
          <div className="group p-6 bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200 hover:border-emerald-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-all shadow-sm">
              {/* Phone Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#047857"
                strokeWidth="1.7"
              >
                <path d="M6.5 3.5h4l1.5 4-2 1.5a9 9 0 0 0 4 4l1.5-2 4 1.5v4a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5z" />
              </svg>
            </div>

            <h4 className="text-2xl font-bold text-slate-900 mb-1">Phone / WhatsApp</h4>
            <p className="text-slate-600 mb-3 text-base">
              WhatsApp only. If urgent/important, then call.
            </p>

            <a
              href="https://wa.me/919607017235"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-emerald-600 hover:text-emerald-700"
            >
              +91 9607017235
            </a>

            <a
              href="tel:+919607017235"
              className="text-xs font-medium text-slate-600 hover:text-slate-900 block mt-1"
            >
              Tap to call if urgent
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN — Form + badges */}
        <div className="contact-form-section">
          <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Send A Message</h3>
          <p className="text-slate-600 mb-8 text-base leading-relaxed">
            Have a project in mind? Let&apos;s discuss how we can work together.
          </p>

          {/* Form Card */}
          <div className="bg-white/95 backdrop-blur-xl border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-semibold text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    minLength={5}
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 h-14 border border-slate-200 rounded-xl bg-white text-slate-900"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 h-14 border border-slate-200 rounded-xl bg-white text-slate-900"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-slate-700">
                  Subject
                </label>
                <div className="relative">
                  <select
                    required
                    value={formData.project_type}
                    onChange={(e) =>
                      setFormData({ ...formData, project_type: e.target.value })
                    }
                    className="w-full px-4 py-3 h-14 border border-slate-200 rounded-xl bg-white text-slate-900 appearance-none"
                  >
                    <option value="">Select a subject</option>
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Freelance Work">Freelance Work</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-500">
                    ▼
                  </span>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-slate-700">
                  Message
                </label>
                <textarea
                  required
                  minLength={10}
                  rows={6}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-4 border border-slate-200 rounded-xl bg-white text-slate-900 resize-vertical"
                />
              </div>

              {/* Submit */}
              <div className="form-actions">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 text-lg font-bold rounded-xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-700 hover:from-slate-900 hover:via-slate-800 hover:to-emerald-600 text-white shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

          {/* 3-ITEM ROW — right aligned, below card */}
          <div className="w-full flex justify-end mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full sm:w-auto">
              <div className="flex items-center p-4 bg-white rounded-2xl border border-slate-200">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 mr-3" />
                <span className="text-sm font-semibold text-slate-900">
                  24 Hour Response Time
                </span>
              </div>

              <div className="flex items-center p-4 bg-white rounded-2xl border border-slate-200">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 mr-3" />
                <span className="text-sm font-semibold text-slate-900">
                  Open to Opportunities
                </span>
              </div>

              <div className="flex items-center p-4 bg-white rounded-2xl border border-slate-200">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 mr-3" />
                <span className="text-sm font-semibold text-slate-900">
                  Professional Communication
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-8 bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200 hover:border-emerald-300 hover:shadow-2xl transition-all">
          <div className="flex items-center mb-4">
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full mr-3" />
            <h4 className="text-xl font-bold text-slate-900">Availability</h4>
          </div>
          <p className="text-base text-slate-700">
            Currently available for new projects and full-time opportunities
          </p>
        </div>

        <div className="p-8 bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200 hover:border-emerald-300 hover:shadow-2xl transition-all">
          <div className="flex items-center mb-4">
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full mr-3" />
            <h4 className="text-xl font-bold text-slate-900">Current Location</h4>
          </div>
          <p className="text-base text-slate-700">
            Maharashtra, India
          </p>
        </div>

        <div className="p-8 bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200 hover:border-emerald-300 hover:shadow-2xl transition-all">
          <div className="flex items-center mb-4">
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full mr-3" />
            <h4 className="text-xl font-bold text-slate-900">Specialization</h4>
          </div>
          <p className="text-base text-slate-700">
            Full-Stack Development, MERN Stack, Web Applications
          </p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-[10000]">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 max-w-md w-full shadow-2xl relative">
            <button
              className="absolute top-4 right-5 text-3xl text-slate-400 hover:text-slate-700"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                ✓
              </span>
            </div>

            <h3 className="text-2xl font-bold text-center text-slate-900 mb-2">Success!</h3>
            <p className="text-center text-slate-700 mb-6">{modalMessage}</p>

            <button
              onClick={() => setShowModal(false)}
              className="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
