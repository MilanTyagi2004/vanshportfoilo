import React from 'react'
import Header from "../Component/Header"
import About from "../Component/About"
import Profile from "../Component/Profile"
import Footer from '../Component/Footer'
import Contact from './Contact'
import Project from '../Component/Project'
import Project1 from './Project1'


function Home() {
  const videos = [
    { title: 'video 1', src:"video1.mp4" },
    { title: 'Video 2', src: "video.mp4" },
    // { title: 'Video 3', src: Svid3 },
    // { title: 'Video 3', src: Svid4 }
  ];
  const LVideo = [
    { title: 'Short reel', src:"video1.mp4" },
    { title: 'Video 2', src: 'video2.mp4' },
    { title: 'Video 3', src: 'video3.mp4' },
    { title: 'Video 4', src: 'video4.mp4' },
  ];

  return (
    <div>
      <Header/>
      <Profile/>
      <About/>
      <Project1 videos = {LVideo}/>
      <Project videos={videos}/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
