import React from 'react'
import linkedinIcon from "../assets/linkedin.png"
import emailIcon from "../assets/email.png"
import "../Style/Contact.css"

export default function Contact() {
  return (
    <div>
      <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={emailIcon}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a href="mailto:vansh.tyagii.official@gmail.com">vansh.tyagii.official@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/vansh-tyagi-0a9485255/">LinkedIn</a></p>
        </div>
      </div>
    </section>
    </div>
  )
}
