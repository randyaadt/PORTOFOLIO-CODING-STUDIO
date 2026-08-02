import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="max-w-5xl mx-auto px-5 py-24 text-center">
      <p className="font-mono text-amber-500 text-sm mb-3">404</p>
      <h1 className="font-display font-bold text-3xl mb-4">Halaman tidak ditemukan</h1>
      <p className="text-ink-700 dark:text-paper-100/75 mb-8">
        Halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
      </p>
      <Link
        to="/"
        className="px-5 py-2.5 rounded-lg bg-amber-400 text-ink-950 font-semibold text-sm hover:bg-amber-500 transition-colors"
      >
        Kembali ke Beranda
      </Link>
    </section>
  )
}
