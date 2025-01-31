import React from 'react'
import AutoScrollCarousel from './AutoScrollCarousel'
import Navtab from '../../NavBar/Navtab'
import "./About.css"
import Intro from './Intro'
import { Button } from 'react-bootstrap'

const About = () => {
  return (
    <>
    <Navtab/>
    <Intro/>
    <AutoScrollCarousel/>
    {/* <button className='btn text-center'>
      Donate now
    </button> */}
    <div className='d-flex justify-content-center align-items-center' style={{marginBottom:'40px', marginTop:'40px'}}>
    <Button className='w-70'>
      Donate now
    </Button>
    </div>
    
    </>
  )
}

export default About