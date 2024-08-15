import React from 'react'
import Header from "../Component/Header"
import About from "../Component/About"
import Profile from "../Component/Profile"
import Footer from '../Component/Footer'
import Contact from './Contact'
import Project from '../Component/Project'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/vide2.mp4'

function Home() {
  const videos = [
    { title: 'video 1', src: video1},
    { title: 'Video 2', src: video2}
  ];

  return (
    <div>
      <Header/>
      <Profile/>
      <About/>
      <Project videos={videos}/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
