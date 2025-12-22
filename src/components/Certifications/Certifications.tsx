import { certifications } from '../../data/portfolio'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './Certifications.css'

export default function Certifications() {
  const sectionRef = useScrollAnimation()
  return (
    <section ref={sectionRef} id="certifications" className="section certifications">
      <h2>Certifications</h2>
      <div className="certs-grid">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-link"
          >
            <div className="cert-card">
              <span className="cert-icon">✓</span>
              <h4>{cert.title}</h4>
              <p className="cert-issuer">{cert.issuer}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
