import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const commands = [
  { cmd: 'whoami', out: 'Alex Pratama — Frontend Developer' },
  { cmd: 'skills --list', out: 'React · JavaScript · Tailwind CSS · Git' },
  { cmd: 'status', out: 'Terbuka untuk kolaborasi & proyek baru 🚀' },
]

function Terminal() {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    if (visible >= commands.length) return
    const t = setTimeout(() => setVisible((v) => v + 1), 650)
    return () => clearTimeout(t)
  }, [visible])

  return (
    <div className="rounded-xl border border-ink-900/15 dark:border-paper-50/15 bg-ink-950 text-paper-100 shadow-2xl overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-red-400/80" />
        <span className="w-3 h-3 rounded-full bg-amber-400/80" />
        <span className="w-3 h-3 rounded-full bg-green-400/80" />
        <span className="ml-3 font-mono text-xs text-paper-100/50">alex@portfolio ~ zsh</span>
      </div>
      <div className="p-5 font-mono text-sm space-y-3 min-h-[168px]">
        {commands.slice(0, visible).map((c, i) => (
          <div key={i}>
            <p>
              <span className="text-amber-400">➜</span>{' '}
              <span className="text-indigo-400">~</span> {c.cmd}
            </p>
            <p className="text-paper-100/70 pl-4">{c.out}</p>
          </div>
        ))}
        <span className="inline-block w-2 h-4 bg-amber-400 animate-pulse" aria-hidden="true" />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="font-mono text-xs tracking-[0.14em] uppercase text-amber-500 mb-4">
          Portfolio · 2026
        </p>
        <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight mb-5">
          Membangun antarmuka web yang cepat, rapi, dan mudah dipakai.
        </h1>
        <p className="text-ink-700 dark:text-paper-100/75 leading-relaxed mb-8 max-w-md">
          Halo, saya Alex — frontend developer yang senang mengubah ide menjadi
          produk web yang nyaman digunakan, dari komponen kecil hingga aplikasi
          penuh.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="px-5 py-2.5 rounded-lg bg-amber-400 text-ink-950 font-semibold text-sm hover:bg-amber-500 transition-colors"
          >
            Lihat Proyek
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-lg border border-ink-900/20 dark:border-paper-50/20 font-semibold text-sm hover:bg-ink-900/5 dark:hover:bg-paper-50/10 transition-colors"
          >
            Hubungi Saya
          </Link>
        </div>
      </div>
      <Terminal />
    </section>
  )
}
