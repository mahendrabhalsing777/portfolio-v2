import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin } from 'lucide-react'
import { profile } from '../data/resume'
import { SectionEyebrow } from './Skills'

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center">
          <SectionEyebrow index="05" label="contact" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="font-display font-semibold text-3xl md:text-4xl mt-4 text-ink"
        >
          Let&rsquo;s build something reliable
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-muted mt-5 leading-relaxed"
        >
          Open to backend engineering roles, fintech projects and collaborations
          where correctness and scale actually matter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="flex justify-center flex-wrap gap-4 mt-10"
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 bg-gold text-bg font-medium px-6 py-3.5 rounded-xl hover:-translate-y-0.5 transition-transform"
          >
            <Mail size={16} />
            Email me
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-border px-6 py-3.5 rounded-xl text-ink hover:border-gold/50 hover:text-gold transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-border px-6 py-3.5 rounded-xl text-ink hover:border-gold/50 hover:text-gold transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-2 mt-10 font-mono text-xs text-muted"
        >
          <MapPin size={14} />
          {profile.location}
        </motion.div>

        <p className="font-mono text-[11px] text-muted/60 mt-16 pb-4">
          © {new Date().getFullYear()} {profile.name} — built with React &amp; Tailwind
        </p>
      </div>
    </section>
  )
}
