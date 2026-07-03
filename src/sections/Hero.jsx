import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile, stats, bootSequence } from '../data/resume'

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines >= bootSequence.length) return
    const line = bootSequence[visibleLines]
    const nextDelay = visibleLines === 0 ? line.delay * 1000 : (bootSequence[visibleLines].delay - bootSequence[visibleLines - 1].delay) * 1000
    const t = setTimeout(() => setVisibleLines((v) => v + 1), Math.max(nextDelay, 160))
    return () => clearTimeout(t)
  }, [visibleLines])

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-28 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center relative z-10">
        {/* Left: identity + copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 font-mono text-xs text-teal mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
            </span>
            <span className="uppercase tracking-widest">{profile.availability}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-ink"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 font-mono text-sm sm:text-base text-gold"
          >
            {profile.role} <span className="text-muted">·</span> {profile.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-xl"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group relative bg-gold text-bg font-medium px-6 py-3.5 rounded-xl overflow-hidden transition-transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">View projects</span>
            </a>
            <a
              href={profile.resumeFile}
              download
              className="border border-border px-6 py-3.5 rounded-xl text-ink hover:border-gold/50 hover:text-gold transition-colors"
            >
              Download resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-border pt-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-xl sm:text-2xl text-ink">{s.value}</p>
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: live terminal boot sequence */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative rounded-2xl border border-border bg-surface/80 backdrop-blur-xl shadow-card overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface2">
            <span className="w-3 h-3 rounded-full bg-danger/70" />
            <span className="w-3 h-3 rounded-full bg-gold/70" />
            <span className="w-3 h-3 rounded-full bg-teal/70" />
            <span className="ml-3 font-mono text-[11px] text-muted">mahendra@fcls: ~/backend</span>
          </div>

          <div className="p-6 font-mono text-[13px] sm:text-sm leading-relaxed min-h-[280px]">
            {bootSequence.slice(0, visibleLines).map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                className={
                  i === 0
                    ? 'text-ink'
                    : line.text.includes('OK') || line.text.includes('✓')
                    ? 'text-teal'
                    : 'text-muted'
                }
              >
                {line.text}
              </motion.p>
            ))}
            {visibleLines >= bootSequence.length && (
              <span className="inline-block w-2 h-4 bg-gold align-middle animate-blink mt-1" />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
