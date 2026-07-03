import { motion } from 'framer-motion'
import { skills } from '../data/resume'

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow index="03" label="skills" />
        <h2 className="text-3xl md:text-4xl font-display font-semibold mt-4 mb-14">
          Stack &amp; tooling
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-surface border border-border rounded-2xl p-6 hover:border-gold/30 transition-colors"
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-teal mb-4">
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-3 py-1.5 rounded-lg bg-bg border border-border text-ink/80 hover:border-gold/40 hover:text-gold transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionEyebrow({ index, label }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs text-muted">
      <span className="text-gold">{index}</span>
      <span className="w-8 h-px bg-border" />
      <span className="uppercase tracking-widest">// {label}</span>
    </div>
  )
}
