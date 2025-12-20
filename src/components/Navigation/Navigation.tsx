import { personalInfo } from '../../data/portfolio'

export default function Navigation() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-brand">Portfolio</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  )
}
