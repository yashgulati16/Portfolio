import { skillCategories } from '../../data/portfolio'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './Skills.css'

export default function Skills() {
  const sectionRef = useScrollAnimation()
  return (
    <section ref={sectionRef} id="skills" className="section skills">
      <h2>Technical Skills</h2>

      <div className="skills-layout">
        {skillCategories.map((category, index) => (
          <div className="skill-category" key={index}>
            <h3>{category.title}</h3>
            <div className="skill-list">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
