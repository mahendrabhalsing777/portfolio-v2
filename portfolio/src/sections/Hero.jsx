import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { profile, stats, bootSequence } from '../data/resume'

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const timers = bootSequence.map((_, i) =>
      setTimeout(() => setVisibleLines((n) => Math.max(n, i + 1)), bootSequence[i].delay * 1000 + 150)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  const bootDone = visibleLines >= bootSequence.length
  const revealDelay = bootSequence[bootSequence.length - 1].delay + 0.6

  return (
    <section className="min-h-screen flex items-center px-6 pt-28 pb-16 relative">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        {/* Left: headline */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full border border-teal/25 bg-tealSoft text-teal mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-teal animate-pulseDot" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
            </span>
            {profile.availability}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-semibold leading-[1.08] tracking-tight"
          >
            Backend systems,
            <br />
            <span className="text-gold text-glow-gold">built for banking scale.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-muted mt-6 text-lg max-w-xl leading-relaxed"
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
              className="bg-gold text-bg font-medium px-6 py-3.5 rounded-xl hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              View Projects
            </a>
            <a
              href={profile.resumeFile}
              download
              className="border border-border px-6 py-3.5 rounded-xl hover:border-gold/50 hover:text-gold transition-colors font-mono text-sm flex items-center"
            >
              ↓ Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-lg"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-xl text-ink">{s.value}</div>
                <div className="font-mono text-[11px] text-muted mt-1 uppercase tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: terminal boot console */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl shadow-black/40"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-black/20">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            <span className="ml-3 font-mono text-[11px] text-muted">fcls-service — bash</span>
          </div>

          <div className="p-6 font-mono text-[13px] leading-7 min-h-[260px]">
            {bootSequence.slice(0, visibleLines).map((line, i) => (
              <div key={i} className={i === 0 ? 'text-ink' : 'text-muted'}>
                {i !== 0 && <span className="text-teal mr-2">✓</span>}
                <span className={line.text.includes('ready') ? 'text-teal' : ''}>
                  {line.text}
                </span>
              </div>
            ))}
            {bootDone && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-ink mt-1"
              >
                <span className="text-gold">$</span> _<span className="animate-blink">|</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
