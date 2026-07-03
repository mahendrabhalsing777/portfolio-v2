import { motion } from 'framer-motion'
import { projects } from '../data/resume'
import { SectionEyebrow } from './Skills'

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionEyebrow index="01" label="projects" />
        <h2 className="text-3xl md:text-4xl font-display font-semibold mt-4 mb-14">
          Featured work
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-gold/30 hover:shadow-glow transition-all duration-300"
            >
              <div className="px-6 py-3 border-b border-border flex items-center gap-3 font-mono text-xs bg-black/20">
                <span className="text-teal">{project.method}</span>
                <span className="text-muted">{project.endpoint}</span>
                <span className="ml-auto text-teal/70 group-hover:text-teal transition-colors">200 OK</span>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-display font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="font-mono text-[11px] text-gold uppercase tracking-widest mt-1 mb-4">
                  {project.subtitle}
                </p>

                <p className="text-muted leading-relaxed">{project.desc}</p>

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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
