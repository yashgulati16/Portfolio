import { certifications } from '../../data/portfolio'

export default function Certifications() {
  return (
    <section className="section certifications">
      <h2>Certifications</h2>
      <div className="certs-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <span className="cert-icon">✓</span>
            <h4>{cert.title}</h4>
            <p className="cert-issuer">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
