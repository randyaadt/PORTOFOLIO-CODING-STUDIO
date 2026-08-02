import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext.jsx'

const links = [
  { to: '/', label: 'Beranda' },
  { to: '/about', label: 'Tentang' },
  { to: '/projects', label: 'Proyek' },
  { to: '/contact', label: 'Kontak' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const linkClass = ({ isActive }) =>
    `font-mono text-sm tracking-wide px-3 py-2 rounded-md transition-colors ${
      isActive
        ? 'text-ink-950 dark:text-paper-50 bg-amber-400/90'
        : 'text-ink-700 dark:text-paper-100/80 hover:bg-ink-900/5 dark:hover:bg-paper-50/10'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/10 dark:border-paper-50/10 bg-paper-50/90 dark:bg-ink-950/90 backdrop-blur">
      <nav
        className="max-w-5xl mx-auto flex items-center justify-between px-5 py-3"
        aria-label="Navigasi utama"
      >
        <NavLink
          to="/"
          className="font-display font-bold text-lg text-ink-950 dark:text-paper-50"
        >
          aditya<span className="text-amber-500">.dev</span>
        </NavLink>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="ml-2 w-9 h-9 flex items-center justify-center rounded-full border border-ink-900/15 dark:border-paper-50/20 text-ink-900 dark:text-paper-50 hover:bg-ink-900/5 dark:hover:bg-paper-50/10 transition-colors"
            aria-label={theme === 'dark' ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-ink-900/15 dark:border-paper-50/20 text-ink-900 dark:text-paper-50"
            aria-label={theme === 'dark' ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((o) => !o)}
            className="w-9 h-9 flex items-center justify-center rounded-md border border-ink-900/15 dark:border-paper-50/20 text-ink-900 dark:text-paper-50"
            aria-expanded={isOpen}
            aria-label="Buka menu navigasi"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-ink-900/10 dark:border-paper-50/10 px-5 py-3 flex flex-col gap-1 bg-paper-50 dark:bg-ink-950">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={linkClass}
              end={link.to === '/'}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
