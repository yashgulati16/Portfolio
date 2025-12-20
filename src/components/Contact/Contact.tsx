import { personalInfo } from '../../data/portfolio'

export default function Contact() {
  return (
    <footer id="contact" className="footer">
      <h2>Let's Connect</h2>
      <div className="contact-section">
        <p>I'm always open to new opportunities and collaborations!</p>
        <div className="contact-buttons">
          <a href={`mailto:${personalInfo.email}`} className="btn btn-primary">Send Email</a>
          <a href={personalInfo.linkedin} target="_blank" className="btn btn-secondary">LinkedIn</a>
          <a href={personalInfo.youtube} target="_blank" className="btn btn-secondary">YouTube</a>
        </div>
      </div>
      <p className="footer-text">© 2025 {personalInfo.name}. All rights reserved.</p>
    </footer>
  )
}
