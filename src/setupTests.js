import '@testing-library/jest-dom/vitest'

// jsdom belum mengimplementasikan window.matchMedia, padahal ThemeContext
// memakainya untuk mendeteksi preferensi dark mode sistem. Polyfill sederhana
// ini membuatnya "ada" saat test berjalan (selalu mengembalikan matches: false).
if (typeof window !== 'undefined' && !window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {}, // deprecated API, tetap disediakan untuk kompatibilitas
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })
}