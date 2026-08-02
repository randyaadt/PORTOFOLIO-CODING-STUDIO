import { useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import projects from '../data/projects.js'

export default function Projects() {
  const [filter, setFilter] = useState('Semua')

  const stacks = useMemo(() => {
    const all = new Set(projects.flatMap((p) => p.stack))
    return ['Semua', ...Array.from(all)]
  }, [])

  const filtered = useMemo(() => {
    if (filter === 'Semua') return projects
    return projects.filter((p) => p.stack.includes(filter))
  }, [filter])

  return (
    <section className="max-w-5xl mx-auto px-5 py-14">
      <header className="mb-10">
        <p className="font-mono text-xs tracking-[0.14em] uppercase text-amber-500 mb-3">
          Portfolio
        </p>
        <h1 className="font-display font-bold text-3xl sm:text-4xl mb-3">
          Daftar Proyek
        </h1>
        <p className="text-ink-700 dark:text-paper-100/75 max-w-xl">
          Beberapa proyek yang pernah saya kerjakan, dari aplikasi kecil
          hingga dashboard dengan integrasi API.
        </p>
      </header>

      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter proyek berdasarkan teknologi">
        {stacks.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setFilter(s)}
            aria-pressed={filter === s}
            className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-colors ${
              filter === s
                ? 'bg-amber-400 border-amber-400 text-ink-950'
                : 'border-ink-900/15 dark:border-paper-50/20 text-ink-700 dark:text-paper-100/70 hover:bg-ink-900/5 dark:hover:bg-paper-50/10'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="font-mono text-sm text-ink-700 dark:text-paper-100/70">
          Belum ada proyek dengan teknologi ini.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}
