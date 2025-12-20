import { projects } from '../../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} target="_blank" className="project-link">View Project →</a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
