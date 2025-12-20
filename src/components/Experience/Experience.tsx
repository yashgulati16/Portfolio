import { experience } from '../../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <h2>Experience</h2>
      <div className="experience-card">
        <div className="exp-header">
          <h3>{experience.position}</h3>
          <span className="exp-company">{experience.company}</span>
          <span className="exp-date">{experience.duration}</span>
        </div>
        <ul className="exp-list">
          {experience.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
