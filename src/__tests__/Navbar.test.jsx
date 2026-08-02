import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import { ThemeProvider } from '../context/ThemeContext.jsx'

function renderNavbar() {
  return render(
    <ThemeProvider>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </ThemeProvider>
  )
}

describe('Navbar', () => {
  it('menampilkan logo dan semua tautan navigasi utama', () => {
    renderNavbar()

    expect(screen.getByText(/alex/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Beranda' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Tentang' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Proyek' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Kontak' })).toBeInTheDocument()
  })

  it('memiliki tombol untuk mengganti tema (dark mode)', () => {
    renderNavbar()
    const toggleButtons = screen.getAllByRole('button', { name: /aktifkan mode/i })
    expect(toggleButtons.length).toBeGreaterThan(0)
  })
})
