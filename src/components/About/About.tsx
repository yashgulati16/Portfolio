import { education, summary } from '../../data/portfolio'

export default function About() {
  return (
    <section id="about" className="section about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-card">
          <h3>Education</h3>
          <ul className="edu-list">
            {education.map((edu, index) => (
              <li key={index}>
                <strong>{edu.course}</strong>
                <p>{edu.institution}</p>
                <p>{edu.year} | {edu.percentage}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="about-card">
          <h3>{summary.title}</h3>
          <p className="summary-text">{summary.content}</p>
        </div>
      </div>
    </section>
  )
}
