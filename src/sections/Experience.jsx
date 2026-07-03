import { motion } from 'framer-motion'
import { experience } from '../data/resume'
import { SectionEyebrow } from './Skills'

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionEyebrow index="02" label="experience" />
        <h2 className="font-display font-semibold text-3xl md:text-4xl mt-4 mb-14 text-ink">
          Where I&rsquo;ve worked
        </h2>

        {experience.map((job) => (
          <div key={job.company} className="mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-baseline justify-between gap-2 mb-2"
            >
              <h3 className="font-display font-semibold text-xl sm:text-2xl text-ink">
                {job.role}
              </h3>
              <span className="font-mono text-xs text-muted">{job.period}</span>
            </motion.div>
            <p className="font-mono text-xs text-gold mb-1">
              {job.company} <span className="text-muted">· {job.domain}</span>
            </p>
            <p className="text-muted text-sm mb-8 max-w-2xl">
              <span className="text-ink/80 font-medium">{job.project}</span> — {job.projectDesc}
            </p>

            <div className="rounded-2xl border border-border bg-surface overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-surface2 font-mono text-[11px] text-muted">
                <span>request log</span>
              </div>
              <div className="divide-y divide-border">
                {job.logs.map((log, i) => (
                  <motion.div
                    key={log.path}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex flex-wrap items-start gap-x-3 gap-y-1 px-4 py-3 font-mono text-xs hover:bg-surface2/60 transition-colors"
                  >
                    <span className="text-teal w-16 shrink-0">{log.method}</span>
                    <span className="text-gold w-40 shrink-0">{log.path}</span>
                    <span className="text-muted flex-1 min-w-[200px]">{log.detail}</span>
                    <span className="text-teal/80 shrink-0">{log.status}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
