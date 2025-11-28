export default function Footer() {
  return (
    <footer
      className="bg-slate-900/95 backdrop-blur-xl 
                 border-t border-emerald-500/30 
                 shadow-[0_-10px_40px_rgba(15,23,42,0.7)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Height matches navbar */}
        <div className="flex h-20 items-center justify-center 
                        text-sm text-slate-300 gap-6 flex-wrap">

          {/* Links */}
          <a
            href="mailto:sohelkureshi138@gmail.com"
            aria-label="Email"
            className="hover:text-emerald-400 transition-colors font-medium"
          >
            Email
          </a>

          <a
            href="https://github.com/sohelkureshi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-emerald-400 transition-colors font-medium"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/sohelkureshi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-emerald-400 transition-colors font-medium"
          >
            LinkedIn
          </a>

          {/* Divider */}
          <span className="opacity-40 hidden sm:block text-slate-500">•</span>

          {/* Copyright */}
          <span className="text-slate-400 text-xs sm:text-sm select-none">
            © {new Date().getFullYear()} Sohel Kureshi
          </span>

        </div>
      </div>
    </footer>
  );
}
