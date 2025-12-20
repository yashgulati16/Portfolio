import { experiences } from '../../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <h2>Experience</h2>

      {experiences.map((exp, index) => (
        <div className="experience-card" key={index}>
          <div className="exp-header">
            <h3>{exp.position}</h3>
            <span className="exp-company">{exp.company}</span>
            <span className="exp-date">{exp.duration}</span>
          </div>

          <ul className="exp-list">
            {exp.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
