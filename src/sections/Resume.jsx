import { motion } from 'framer-motion'
import { Download, GraduationCap } from 'lucide-react'
import { profile, education } from '../data/resume'
import { SectionEyebrow } from './Skills'

export default function Resume() {
  return (
    <section id="resume" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionEyebrow index="04" label="education & resume" />

        <div className="grid md:grid-cols-[1fr_1.1fr] gap-6 mt-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="bg-surface border border-border rounded-2xl p-8"
          >
            <h3 className="font-display font-semibold text-xl text-ink mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.degree} className="flex gap-4">
                  <GraduationCap size={20} className="text-gold shrink-0 mt-1" />
                  <div>
                    <p className="text-ink text-sm font-medium">{edu.degree}</p>
                    <p className="text-muted text-xs font-mono mt-1">
                      {edu.school} · {edu.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative bg-surface border border-border rounded-2xl p-8 flex flex-col justify-center overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-gold/10 blur-3xl rounded-full" />
            <h3 className="font-display font-semibold text-xl text-ink relative z-10">
              Get the full picture
            </h3>
            <p className="text-muted text-sm mt-3 relative z-10 leading-relaxed">
              Every role, project and metric from {profile.name.split(' ')[0]}&rsquo;s backend
              engineering work, in one PDF.
            </p>
            <a
              href={profile.resumeFile}
              download
              className="relative z-10 inline-flex items-center gap-2 mt-7 bg-gold text-bg font-medium px-6 py-3.5 rounded-xl w-fit hover:-translate-y-0.5 transition-transform"
            >
              <Download size={16} />
              Download resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
