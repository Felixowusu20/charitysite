import React from 'react' 
import  Slider from "../HomePage/Slider/Slider"
// import Hero from "../HomePage/HeroSection/Hero"
import AboutUs from '../About Us/AboutUs'
import Services from '../Services/Services'
const Home = () => {
  return (
    <div>
        <Slider/>
        <AboutUs />
        <Services/>
    </div>
  )
}

export default Home