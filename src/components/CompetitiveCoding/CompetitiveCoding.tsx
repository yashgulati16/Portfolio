import { competitive } from '../../data/portfolio'

export default function CompetitiveCoding() {
  return (
    <section className="section competitive">
      <h2>Competitive Coding</h2>
      <div className="competitive-content">
        {competitive.achievements.map((achievement, index) => (
          <div key={index} className="achievement">
            <span className="medal">{achievement.medal}</span>
            <p><strong>{achievement.title}</strong> - {achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
