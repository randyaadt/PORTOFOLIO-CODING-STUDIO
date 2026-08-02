const skills = [
  'JavaScript (ES6+)',
  'React',
  'Tailwind CSS',
  'HTML5 & CSS3',
  'Git & GitHub',
  'REST API',
  'Responsive Design',
  'Vite',
]

const timeline = [
  {
    year: '2026',
    role: 'Frontend Developer — Freelance',
    desc: 'Membangun landing page dan dashboard untuk klien UMKM dan startup.',
  },
  {
    year: '2024',
    role: 'Bootcamp Web Development',
    desc: 'Menyelesaikan program intensif HTML, CSS, JavaScript, hingga React.',
  },
  {
    year: '2023',
    role: 'Mulai belajar coding',
    desc: 'Membuat halaman statis pertama dan jatuh cinta dengan frontend.',
  },
]

export default function About() {
  return (
    <div className="about-wrap">
      <div className="about-hero">
        <div className="about-avatar">AR</div>
        <div>
          <p className="about-eyebrow">Tentang Saya</p>
          <h1 className="about-name">Aditya Rahmatdiyansyah</h1>
          <p className="about-role">Frontend Developer · Mataram, Nusa Tenggara Barat </p>
        </div>
      </div>

      <section className="about-section">
        <h2>Ringkasan</h2>
        <p>
          Saya adalah frontend developer dengan fokus pada pembuatan antarmuka
          web yang bersih, cepat, dan mudah diakses. Saya senang mengubah
          desain menjadi kode yang rapi, serta memastikan pengalaman yang
          konsisten di berbagai perangkat.
        </p>
        <p>
          Di luar coding, saya suka membaca dokumentasi teknologi baru dan
          ikut serta dalam komunitas developer lokal untuk terus belajar.
        </p>
      </section>

      <section className="about-section">
        <h2>Keahlian</h2>
        <ul className="about-skill-grid">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="about-section">
        <h2>Perjalanan</h2>
        <ul className="about-timeline">
          {timeline.map((item) => (
            <li key={item.year}>
              <span className="yr">{item.year}</span>
              <p className="role">{item.role}</p>
              <p className="desc">{item.desc}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
