import { competitive } from '../../data/portfolio'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function CompetitiveCoding() {
  const sectionRef = useScrollAnimation()
  return (
    <section ref={sectionRef} id="competitive" className="section competitive">
      <h2>Competitive Coding</h2>

      <div className="competitive-content">
        {competitive.achievements.map((achievement, index) => (
          <div key={index} className="achievement">
            <span className="medal">{achievement.medal}</span>

            <div className="achievement-details">
              <p>
                <strong>{achievement.title}</strong> – {achievement.description}
              </p>

              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="achievement-link"
              >
                View Certificate →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
