import './Navigation.css'

export default function Navigation() {
  return (
    <header className="header">
      
      <nav className="navbar">
        <a href="#hero" className="nav-brand">Portfolio</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#competitive">Competitions</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  )
}
