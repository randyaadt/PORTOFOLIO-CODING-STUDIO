export default function ProjectCard({ project }) {
  return (
    <article className="group rounded-xl border border-ink-900/10 dark:border-paper-50/10 bg-white dark:bg-ink-900 overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
      <div className="aspect-video overflow-hidden bg-ink-100">
        {/* loading="lazy" => native lazy loading / image optimization technique */}
        <img
          src={project.image}
          alt={`Tangkapan layar proyek ${project.title}`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display font-semibold text-lg text-ink-950 dark:text-paper-50">
            {project.title}
          </h3>
          <span className="font-mono text-xs text-ink-700 dark:text-paper-100/60">
            {project.year}
          </span>
        </div>
        <p className="text-sm text-ink-700 dark:text-paper-100/75 leading-relaxed">
          {project.description}
        </p>
        <ul className="flex flex-wrap gap-2 mt-auto pt-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="font-mono text-[11px] px-2 py-1 rounded-md bg-amber-400/15 text-amber-600 dark:text-amber-400 border border-amber-400/25"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex gap-3 pt-2 text-sm font-medium">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-ink-950 dark:text-paper-50 underline decoration-amber-400 decoration-2 underline-offset-4 hover:text-amber-500"
          >
            Live Demo
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="text-ink-700 dark:text-paper-100/70 hover:text-amber-500"
          >
            Source Code
          </a>
        </div>
      </div>
    </article>
  )
}
