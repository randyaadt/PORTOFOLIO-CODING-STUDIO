# Portfolio App — Aditya Rahmatdiyansyah

Aplikasi web portfolio pribadi yang dibangun dengan **React + Vite +
React Router + Tailwind CSS**. Proyek ini dibuat untuk memenuhi kriteria
Final Project: 4 halaman (Beranda, Tentang, Proyek, Kontak), navigasi,
desain responsif, dark mode, validasi form, dan pengujian otomatis.

## 🧱 Tech Stack

| Kebutuhan            | Teknologi                                   |
| --------------------- | -------------------------------------------- |
| Framework              | React 18 (SPA) via Vite                     |
| Routing                | React Router v6 (`BrowserRouter`)           |
| Styling                | Tailwind CSS (Projects & Contact) + CSS manual (About) |
| State management       | React `useState`/`useContext` (form, tema, filter, menu mobile) |
| Testing                | Vitest + React Testing Library               |
| Optimisasi             | `React.lazy` + `Suspense` (code splitting per halaman), `loading="lazy"` pada gambar |
| Fitur tambahan         | Dark mode (tersimpan di `localStorage`), filter proyek interaktif |

## 📁 Struktur Folder

```
portfolio-app/
├── public/
│   └── _redirects            # SPA redirect untuk Netlify
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigasi + toggle dark mode + menu mobile
│   │   ├── Footer.jsx
│   │   └── ProjectCard.jsx   # Komponen reusable untuk kartu proyek
│   ├── context/
│   │   └── ThemeContext.jsx  # State global untuk dark/light mode
│   ├── data/
│   │   └── projects.js       # Data proyek (bisa diganti data asli)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx         # Menggunakan CSS manual (lihat index.css)
│   │   ├── Projects.jsx      # Layout Tailwind + filter stack
│   │   ├── Contact.jsx       # Form + validasi JavaScript
│   │   └── NotFound.jsx
│   ├── __tests__/
│   │   ├── Navbar.test.jsx
│   │   └── Contact.test.jsx  # Test validasi form
│   ├── App.jsx                # Routing + lazy loading
│   ├── main.jsx
│   ├── index.css              # Tailwind + CSS manual halaman About
│   └── setupTests.js
├── .github/workflows/deploy.yml  # Auto-deploy ke GitHub Pages
├── vercel.json                # Rewrite rule untuk Vercel
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🚀 Menjalankan Secara Lokal

Pastikan Node.js versi 18+ sudah terpasang.

```bash
npm install
npm run dev
```

`http://localhost:5173`.

## 🧪 Menjalankan Test

```bash
npm test
```

Test mencakup:
- Navbar menampilkan seluruh tautan navigasi dan tombol dark mode.
- Form kontak menampilkan pesan error saat kosong.
- Form kontak memvalidasi format email.
- Form kontak menampilkan pesan sukses saat data valid.

## 🏗️ Build untuk Produksi

```bash
npm run build
npm run preview   # opsional, untuk preview hasil build
```

Hasil build ada di folder `dist/`.

## ☁️ Deployment

### Opsi 1 — Vercel (disarankan, paling mudah untuk Vite SPA)
1. Push kode ke GitHub.
2. Buka [vercel.com](https://vercel.com) → **Add New Project** → import repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output dir: `dist`.
4. Deploy. File `vercel.json` sudah mengatur rewrite agar routing (`/about`,
   `/projects`, dll) tidak 404 saat refresh.

### Opsi 2 — Netlify
1. Push kode ke GitHub.
2. Buka [netlify.com](https://netlify.com) → **Add new site** → import repo.
3. Build command: `npm run build`, Publish directory: `dist`.
4. File `public/_redirects` sudah menangani SPA routing.

### Opsi 3 — GitHub Pages
1. Push kode ke branch `main`.
2. Aktifkan GitHub Pages di **Settings → Pages → Source: GitHub Actions**.
3. Workflow `.github/workflows/deploy.yml` akan otomatis build & deploy.
4. Karena GitHub Pages berada di sub-path (`/nama-repo/`), sesuaikan:
   - `vite.config.js` → tambahkan `base: '/nama-repo/'`
   - `main.jsx` → `<BrowserRouter basename="/nama-repo">`

## ✅ Checklist Kriteria Penilaian

- **HTML/CSS/JS dasar** — struktur semantik (`header`, `nav`, `main`,
  `footer`) di semua halaman; styling manual di `About.jsx` +
  `index.css`; validasi form murni JavaScript di `Contact.jsx`.
- **Bootstrap/Tailwind** — halaman Proyek & Kontak memakai Tailwind CSS
  sepenuhnya.
- **Git & Hosting** — commit bertahap per fitur (lihat riwayat commit),
  siap deploy ke Vercel/Netlify/GitHub Pages.
- **Framework** — React (SPA) dengan React Router, komponen modular
  (`Navbar`, `Footer`, `ProjectCard`), state management (`useState`,
  `useContext` untuk tema, filter, dan form).
- **Optimasi & Testing** — `React.lazy`/`Suspense` untuk code splitting per
  halaman, `loading="lazy"` pada gambar proyek, test dengan Vitest +
  Testing Library.
- **Deployment & fitur tambahan** — desain responsif (mobile-first,
  breakpoint `sm`/`md`), dark mode dengan penyimpanan preferensi di
  `localStorage`.

## ✏️ Kustomisasi

- Ganti data proyek di `src/data/projects.js`.
- Ganti nama, bio, dan timeline di `src/pages/About.jsx`.
- Ganti tautan sosial di `src/components/Footer.jsx`.
- Sambungkan form kontak ke layanan nyata (mis. Formspree, EmailJS, atau
  API sendiri) di fungsi `handleSubmit` pada `src/pages/Contact.jsx`.
