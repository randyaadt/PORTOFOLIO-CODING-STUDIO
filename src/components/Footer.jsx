export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-ink-900/10 dark:border-paper-50/10 mt-16">
      <div className="max-w-5xl mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-ink-700 dark:text-paper-100/70">
        <p className="font-mono">© {year} Aditya Rahmatdiyansyah. Dibangun dengan React &amp; Tailwind CSS.</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/randyaadt"
            target="_blank"
            rel="noreferrer"
            className="hover:text-amber-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-rahmatdiyansyah-3a6847311/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-amber-500 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
