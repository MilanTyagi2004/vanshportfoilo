import React from 'react'
import twitter from "../assets/twitter.png"
import LinkedIMage from "../assets/linkedin.png"
import "../Style/Profile.css"

function Profile() {
  return (
    <div>
      <section id="profile">
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Vansh Tyagi</h1>
        <p className="section__text__p2">Video Editor</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            // onClick={() => window.open('./assets/resume-example.pdf')}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = './#contact')}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={LinkedIMage}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => (window.location.href = 'https://www.linkedin.com/in/vansh-tyagi-0a9485255/')}
          />
          <img
            src={twitter}
            alt="My Github profile"
            className="icon"
            onClick={() => (window.location.href = 'https://twitter.com/editwithvansh')}
          />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Profile
