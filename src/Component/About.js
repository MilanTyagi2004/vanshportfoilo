import React from 'react';
import '../Style/content.css';
import educationImage from "../assets/education.png"
import experienceImage from "../assets/experience.png"
import aboutImage from "../assets/editor.jpg"
import ArrowImage from "../assets/arrow.png"
// import editorImage from "../Assets/editor.jpg"
import "../Style/about.css"

export default function About() {
  return (
    <>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              src={aboutImage}
              alt="Profile_picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src={experienceImage}
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>1+ years <br />Video Editor</p>
              </div>
              <div className="details-container">
                <img
                  src={educationImage}
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>Pursuing a Bachelor of Business Administration (BBA) at Galgotias University</p>
              </div>
            </div>
            <div className="text-container">
              <p>
                I have worked with a diverse range of clients and projects, from Ads related industries  to Media agencies. My goal is to help authors and content creators bring their vision to life by ensuring their work is clear, compelling, and error-free.
                I pride myself on my ability to Professional video editing Frame works , collaborate with authors to refine their voice, meet tight deadlines, adapt to different styles and genres. My commitment to excellence and passion for the written word drive me to deliver the highest quality of work for every project I undertake.
              </p>
            </div>
          </div>
        </div>
        <img
          src={ArrowImage}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href = './#project')}
        />
      </section>
    </>
  );
}
