import React from 'react' 
import  Slider from "../HomePage/Slider/Slider"
// import Hero from "../HomePage/HeroSection/Hero"
import AboutUs from '../About Us/AboutUs'
import Services from '../Services/Services'
import Members from '../../Members'
const Home = () => {
  return (
    <div>
        <Slider/>
        <AboutUs />
        <Services/>
        <Members/>
    </div>
  )
}

export default Home