import './App.css'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import CompetitiveCoding from './components/CompetitiveCoding/CompetitiveCoding'
import Certifications from './components/Certifications/Certifications'
import Contact from './components/Contact/Contact'
function App() {
  return (
    <div className="portfolio">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <CompetitiveCoding />
      <Certifications />
      <Contact />
    </div>
  )
}

export default App
