import React from 'react' 
import  Slider from "../HomePage/Slider/Slider"
// import Hero from "../HomePage/HeroSection/Hero"
import AboutUs from '../About Us/AboutUs'
import Services from '../Services/Services'
import Members from '../../Members'
import Banner from "../HomePage/Banner/Banner"
import Mission from '../../Mission'
// import About from '../About/About.jsx'
import AutoScrollCarousel from '../Donate/AutoScrollCarousel'

const Home = () => {
  return (
    <div >
        <Slider/>
        <Mission/>
        <AboutUs />
        <Services/>
        <Members/>
        <Banner/>
        {/* <About/> */}
        {/* <AutoScrollCarousel/> */}
    </div>
  )
}

export default Home