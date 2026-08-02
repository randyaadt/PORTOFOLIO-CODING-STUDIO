import { useState } from 'react'

const initialForm = { name: '', email: '', message: '' }

function validate(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Nama wajib diisi.'
  } else if (values.name.trim().length < 3) {
    errors.name = 'Nama minimal 3 karakter.'
  }

  if (!values.email.trim()) {
    errors.email = 'Email wajib diisi.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Format email tidak valid.'
  }

  if (!values.message.trim()) {
    errors.message = 'Pesan wajib diisi.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Pesan minimal 10 karakter.'
  }

  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | success

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) {
      setErrors((err) => ({ ...err, [name]: undefined }))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const foundErrors = validate(form)
    setErrors(foundErrors)

    if (Object.keys(foundErrors).length === 0) {
      // Di aplikasi nyata, di sini kita akan memanggil API / mengirim email.
      setStatus('success')
      setForm(initialForm)
    } else {
      setStatus('idle')
    }
  }

  return (
    <section className="max-w-2xl mx-auto px-5 py-14">
      <header className="mb-8">
        <p className="font-mono text-xs tracking-[0.14em] uppercase text-amber-500 mb-3">
          Kontak
        </p>
        <h1 className="font-display font-bold text-3xl sm:text-4xl mb-3">
          Mari Terhubung
        </h1>
        <p className="text-ink-700 dark:text-paper-100/75">
          Punya proyek, pertanyaan, atau sekadar ingin menyapa? Isi form di
          bawah ini.
        </p>
      </header>

      {status === 'success' && (
        <div
          role="status"
          className="mb-6 rounded-lg border border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-400 px-4 py-3 text-sm font-medium"
        >
          Pesan terkirim! Terima kasih sudah menghubungi saya — saya akan
          membalas secepatnya.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5">
            Nama
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`w-full rounded-lg border px-4 py-2.5 bg-white dark:bg-ink-900 focus:ring-2 focus:ring-amber-400 outline-none transition-colors ${
              errors.name
                ? 'border-red-400'
                : 'border-ink-900/15 dark:border-paper-50/15'
            }`}
            placeholder="Nama lengkap"
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-red-500 mt-1.5">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`w-full rounded-lg border px-4 py-2.5 bg-white dark:bg-ink-900 focus:ring-2 focus:ring-amber-400 outline-none transition-colors ${
              errors.email
                ? 'border-red-400'
                : 'border-ink-900/15 dark:border-paper-50/15'
            }`}
            placeholder="nama@email.com"
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-red-500 mt-1.5">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1.5">
            Pesan
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={`w-full rounded-lg border px-4 py-2.5 bg-white dark:bg-ink-900 focus:ring-2 focus:ring-amber-400 outline-none transition-colors resize-y ${
              errors.message
                ? 'border-red-400'
                : 'border-ink-900/15 dark:border-paper-50/15'
            }`}
            placeholder="Tuliskan pesan Anda di sini…"
          />
          {errors.message && (
            <p id="message-error" className="text-sm text-red-500 mt-1.5">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-amber-400 text-ink-950 font-semibold text-sm hover:bg-amber-500 transition-colors"
        >
          Kirim Pesan
        </button>
      </form>
    </section>
  )
}
