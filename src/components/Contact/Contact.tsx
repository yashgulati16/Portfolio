import { useState } from 'react'
import { personalInfo } from '../../data/portfolio'

export default function Contact() {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: ''
  })
  const [submitted, setSubmitted] = useState(false) // <-- track submission

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = `New Contact from ${formData.name}`
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Organization: ${formData.organization}
    `

    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    setSubmitted(true) // <-- show thank you message
    setTimeout(() => {
      setShowModal(false)
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', organization: '' })
    }, 3000) // <-- hide modal after 3 seconds
  }

  return (
    <footer id="contact" className="footer">
      <h2>Let's Connect</h2>

      <div className="contact-section">
        <p>I'm always open to new opportunities and collaborations!</p>

        <div className="contact-buttons">
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>
            Send Email
          </button>

          <a href={personalInfo.linkedin} target="_blank" className="btn btn-secondary">
            LinkedIn
          </a>

          <a href={personalInfo.youtube} target="_blank" className="btn btn-secondary">
            YouTube
          </a>
        </div>
      </div>

      <p className="footer-text">© 2025 {personalInfo.name}. All rights reserved.</p>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            {submitted ? (
              <h3>Thank you for reaching out!</h3>
            ) : (
              <>
                <h3>Contact Me</h3>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    onChange={handleChange}
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    onChange={handleChange}
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    name="organization"
                    placeholder="Organization"
                    onChange={handleChange}
                  />

                  <div className="modal-actions">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </footer>
  )
}
