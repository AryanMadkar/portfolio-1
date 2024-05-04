import React from 'react'
import Header from "../../compnents/Header"
import Intro from "../../pages/Home/Intro"
import About from './About'
import Experiencemain from './Experiencemain'
import Projects from './Projects';
import Contact from './Contact'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
      <Header/>
      <Intro/>
      <About/>
      <Experiencemain/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home 