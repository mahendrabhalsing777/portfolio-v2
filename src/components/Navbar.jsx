import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/resume'

const links = [
  { href: '#projects', label: 'projects' },
  { href: '#experience', label: 'experience' },
  { href: '#skills', label: 'skills' },
  { href: '#contact', label: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-border' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#top" className="font-display font-semibold text-lg text-ink">
          MB<span className="text-gold">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={profile.resumeFile}
          download
          className="font-mono text-xs uppercase tracking-widest bg-gold text-bg px-4 py-2.5 rounded-lg hover:-translate-y-0.5 transition-transform"
        >
          Resume ↓
        </a>
      </div>
    </motion.header>
  )
}
