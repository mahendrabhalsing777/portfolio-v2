import { motion } from 'framer-motion'
import { experience, education } from '../data/resume'
import { SectionEyebrow } from './Skills'

const methodColor = {
  POST: 'text-teal border-teal/30 bg-tealSoft',
  MIGRATE: 'text-gold border-gold/30 bg-goldSoft',
  CRON: 'text-gold border-gold/30 bg-goldSoft',
  CONNECT: 'text-teal border-teal/30 bg-tealSoft',
  OPTIMIZE: 'text-gold border-gold/30 bg-goldSoft',
  AUTH: 'text-teal border-teal/30 bg-tealSoft',
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionEyebrow index="02" label="experience" />
        <h2 className="text-3xl md:text-4xl font-display font-semibold mt-4 mb-14">
          Where I've shipped code
        </h2>

        {experience.map((job) => (
          <div key={job.company} className="mb-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <div>
                <h3 className="text-xl font-display font-semibold text-ink">{job.role}</h3>
                <p className="text-muted text-sm mt-1">
                  {job.company} <span className="text-border">·</span> {job.domain}
                </p>
              </div>
              <span className="font-mono text-xs text-gold border border-gold/25 bg-goldSoft px-3 py-1 rounded-full whitespace-nowrap">
                {job.period}
              </span>
            </div>

            <p className="text-muted text-sm mb-6 max-w-2xl">
              <span className="text-ink/90 font-medium">{job.project}</span> — {job.projectDesc}
            </p>

            <div className="rounded-2xl border border-border bg-surface overflow-hidden">
              <div className="px-5 py-3 border-b border-border font-mono text-[11px] text-muted uppercase tracking-widest">
                request log
              </div>
              <div className="divide-y divide-border/70">
                {job.logs.map((log, i) => (
                  <motion.div
                    key={log.path}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-5 py-4 hover:bg-surfaceHover transition-colors"
                  >
                    <span
                      className={`font-mono text-[11px] px-2.5 py-1 rounded-md border w-fit shrink-0 ${
                        methodColor[log.method] || 'text-muted border-border'
                      }`}
                    >
                      {log.method}
                    </span>
                    <span className="font-mono text-xs text-muted shrink-0 w-44 truncate">
                      {log.path}
                    </span>
                    <span className="text-sm text-ink/85 flex-1">{log.detail}</span>
                    <span className="font-mono text-[11px] text-teal shrink-0">{log.status} OK</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Education */}
        <div className="mt-16 grid sm:grid-cols-2 gap-4">
          {education.map((ed) => (
            <div key={ed.degree} className="bg-surface border border-border rounded-2xl p-6">
              <p className="font-mono text-[11px] text-teal uppercase tracking-widest mb-2">
                {ed.year}
              </p>
              <h4 className="font-display font-semibold text-ink">{ed.degree}</h4>
              <p className="text-muted text-sm mt-1">{ed.school}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
