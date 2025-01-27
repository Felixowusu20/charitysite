import React from 'react' 
import  Slider from "../HomePage/Slider/Slider"
// import Hero from "../HomePage/HeroSection/Hero"
import AboutUs from '../About Us/AboutUs'
import Services from '../Services/Services'
import Members from '../../Members'
import Mission from '../../Mission'
const Home = () => {
  return (
    <div>
        <Slider/>
        {/* <Mission/> */}
        <AboutUs />
        <Services/>
        <Members/>
    </div>
  )
}

export default Home