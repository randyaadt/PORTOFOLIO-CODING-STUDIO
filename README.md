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

`http://localhost:5173`.

## 🧪 Menjalankan Test

npm test

