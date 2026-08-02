import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Contact from '../pages/Contact.jsx'

function renderContact() {
  return render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>
  )
}

describe('Contact form', () => {
  it('menampilkan pesan error saat form dikirim dalam keadaan kosong', async () => {
    renderContact()
    const user = userEvent.setup()

    await user.click(screen.getByRole('button', { name: /kirim pesan/i }))

    expect(await screen.findByText('Nama wajib diisi.')).toBeInTheDocument()
    expect(screen.getByText('Email wajib diisi.')).toBeInTheDocument()
    expect(screen.getByText('Pesan wajib diisi.')).toBeInTheDocument()
  })

  it('menampilkan error format email ketika email tidak valid', async () => {
    renderContact()
    const user = userEvent.setup()

    await user.type(screen.getByLabelText(/nama/i), 'Budi Santoso')
    await user.type(screen.getByLabelText(/email/i), 'bukan-email')
    await user.type(screen.getByLabelText(/pesan/i), 'Halo, saya ingin bertanya.')
    await user.click(screen.getByRole('button', { name: /kirim pesan/i }))

    expect(await screen.findByText('Format email tidak valid.')).toBeInTheDocument()
  })

  it('menampilkan pesan sukses ketika semua data valid', async () => {
    renderContact()
    const user = userEvent.setup()

    await user.type(screen.getByLabelText(/nama/i), 'Budi Santoso')
    await user.type(screen.getByLabelText(/email/i), 'budi@email.com')
    await user.type(screen.getByLabelText(/pesan/i), 'Halo, saya ingin berkolaborasi.')
    await user.click(screen.getByRole('button', { name: /kirim pesan/i }))

    expect(await screen.findByRole('status')).toHaveTextContent('Pesan terkirim!')
  })
})
