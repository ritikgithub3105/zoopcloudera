import React from 'react'
import HeroSection from '../components/Home/Hero'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import Footer from '../components/Footer'
import Team from '../components/Home/Team'

const Home = () => {
  return (
    <div>
      <HeroSection   />
      <About />
      <Services />
      <Team />


      <Footer />
    </div>
  )
}

export default Home