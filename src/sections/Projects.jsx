import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/resume'
import { SectionEyebrow } from './Skills'

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow index="01" label="projects" />
        <h2 className="font-display font-semibold text-3xl md:text-4xl mt-4 mb-14 text-ink">
          Things I&rsquo;ve shipped
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative bg-surface border border-border rounded-2xl p-7 hover:border-gold/40 transition-colors"
            >
              <div className="flex items-center gap-3 font-mono text-[11px]">
                <span className="px-2 py-1 rounded-md bg-teal/10 text-teal tracking-widest">
                  {project.method}
                </span>
                <span className="text-muted">{project.endpoint}</span>
                <ArrowUpRight
                  size={16}
                  className="ml-auto text-muted group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>

              <h3 className="font-display font-semibold text-xl text-ink mt-5">{project.title}</h3>
              <p className="font-mono text-xs text-gold mt-1">{project.subtitle}</p>

              <p className="text-muted text-sm leading-relaxed mt-4">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-bg border border-border text-ink/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/0 group-hover:via-gold/60 to-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
