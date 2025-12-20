import { personalInfo } from '../../data/portfolio'
import Snowfall from 'react-snowfall'
import { useState } from 'react'

export default function Hero() {
  const [emailCopied, setEmailCopied] = useState(false)
  const [phoneCopied, setPhoneCopied] = useState(false)

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.phone)
    setPhoneCopied(true)
    setTimeout(() => setPhoneCopied(false), 2000)
  }

  return (
    <section className="hero">
    <Snowfall />
      <div className="hero-content">
        <h1 className="name">{personalInfo.name}</h1>
        <p className="title">{personalInfo.title}</p>
        <p className="subtitle">{personalInfo.subtitle}</p>
        <div className="hero-links">
          <button onClick={copyPhoneToClipboard} className="contact-link">Call</button>
          <button onClick={copyEmailToClipboard} className="contact-link">Email</button>
          <a href={personalInfo.linkedin} target="_blank" className="contact-link">LinkedIn</a>
          <a href={personalInfo.youtube} target="_blank" className="contact-link">YouTube</a>
        </div>
      </div>

      {/* Toast Notifications */}
      {phoneCopied && (
        <div className="toast-notification">
          Phone number copied to clipboard!
        </div>
      )}
      {emailCopied && (
        <div className="toast-notification">
          Email copied to clipboard!
        </div>
      )}
    </section>
  )
}
