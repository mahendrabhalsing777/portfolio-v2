import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '../data/resume'

const links = [
  { href: '#projects', label: '/projects' },
  { href: '#experience', label: '/experience' },
  { href: '#skills', label: '/skills' },
  { href: '#contact', label: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-bg/70 border-b border-border' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-mono font-semibold text-lg text-ink">
          mb<span className="text-gold">://</span>
        </a>

        <nav className="hidden md:flex gap-8 font-mono text-sm text-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={profile.resumeFile}
            download
            className="bg-gold text-bg font-medium text-sm px-4 py-2 rounded-xl hover:shadow-glow hover:-translate-y-0.5 transition-all"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden font-mono text-sm text-ink border border-border rounded-lg px-3 py-1.5"
          aria-label="Toggle menu"
        >
          {open ? 'close' : 'menu'}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-b border-border bg-bg/95"
          >
            <div className="flex flex-col px-6 py-4 gap-4 font-mono text-sm">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-muted hover:text-gold">
                  {l.label}
                </a>
              ))}
              <a
                href={profile.resumeFile}
                download
                className="bg-gold text-bg font-medium text-sm px-4 py-2.5 rounded-xl text-center mt-2"
              >
                Resume
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
