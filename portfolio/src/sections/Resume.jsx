import { motion } from 'framer-motion'
import { profile } from '../data/resume'

export default function Resume() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative text-center bg-surface border border-border rounded-3xl p-12 md:p-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-console-grid opacity-40 pointer-events-none" />
          <div className="relative">
            <p className="font-mono text-xs text-gold uppercase tracking-widest mb-4">
              // full profile
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold">
              Want the full breakdown?
            </h2>
            <p className="text-muted mt-4 max-w-xl mx-auto leading-relaxed">
              Grab the PDF for a complete look at my backend engineering experience,
              projects, and enterprise application development skills.
            </p>

            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center gap-2 mt-9 bg-gold text-bg font-medium px-8 py-4 rounded-2xl hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              ↓ Download Resume (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
