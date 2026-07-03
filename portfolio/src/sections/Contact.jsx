import { motion } from 'framer-motion'
import { profile } from '../data/resume'
import { SectionEyebrow } from './Skills'

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <SectionEyebrow index="04" label="contact" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-display font-semibold mt-4"
        >
          Let's build something great
        </motion.h2>

        <p className="text-muted mt-5 leading-relaxed">
          Open for backend engineering roles, freelance projects and collaborations.
        </p>

        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          <a
            href={`mailto:${profile.email}`}
            className="bg-gold text-bg font-medium px-6 py-3.5 rounded-2xl hover:shadow-glow hover:-translate-y-0.5 transition-all"
          >
            Email Me
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="border border-border px-6 py-3.5 rounded-2xl hover:border-gold/50 hover:text-gold transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="border border-border px-6 py-3.5 rounded-2xl hover:border-gold/50 hover:text-gold transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <div className="font-mono text-xs text-muted mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2">
          <span>{profile.phone}</span>
          <span className="text-border">·</span>
          <span>{profile.email}</span>
          <span className="text-border">·</span>
          <span>{profile.location}</span>
        </div>

        <p className="font-mono text-[11px] text-muted/60 mt-16">
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
        </p>
      </div>
    </section>
  )
}
