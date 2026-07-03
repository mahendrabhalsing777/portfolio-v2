import Navbar from './components/Navbar'
import BackgroundFX from './components/BackgroundFX'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Resume from './sections/Resume'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="text-ink min-h-screen font-body relative">
      <BackgroundFX />
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Resume />
      <Contact />
    </div>
  )
}
