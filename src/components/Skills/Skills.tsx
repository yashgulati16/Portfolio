import { skillCategories } from '../../data/portfolio'

export default function Skills() {
  const programming = skillCategories.find(cat => cat.title === 'Programming')
  const dataScience = skillCategories.find(cat => cat.title === 'Data Science')
  const computerVision = skillCategories.find(cat => cat.title === 'Computer Vision')
  const tools = skillCategories.find(cat => cat.title === 'Tools & Platforms')

  return (
    <section id="skills" className="section skills">
      <h2>Technical Skills</h2>
      <div className="skills-layout">
        {/* Left Column - Programming and Tools */}
        <div className="skills-left">
          {/* Programming */}
          {programming && (
            <div className="skill-category">
              <h3>{programming.title}</h3>
              <div className="skill-list">
                {programming.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          )}

          {/* Tools */}
          {tools && (
            <div className="skill-category">
              <h3>{tools.title}</h3>
              <div className="skill-list">
                {tools.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Data Science and Computer Vision */}
        <div className="skills-right">
          {/* Data Science */}
          {dataScience && (
            <div className="skill-category">
              <h3>{dataScience.title}</h3>
              <div className="skill-list">
                {dataScience.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          )}

          {/* Computer Vision */}
          {computerVision && (
            <div className="skill-category">
              <h3>{computerVision.title}</h3>
              <div className="skill-list">
                {computerVision.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
