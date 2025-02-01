import React from 'react'
import AutoScrollCarousel from './AutoScrollCarousel'
import Navtab from '../../NavBar/Navtab'
import "./Donate.css"
import Intro from './Intro'
import { Button } from 'react-bootstrap'
import Footer from '../../Footer/Footer'

const Donate = () => {
  return (
    <>
    <Navtab/>
    <Intro/>
    <AutoScrollCarousel/>
    {/* <button className='btn text-center'>
      Donate now
    </button> */}
    <div className='d-flex justify-content-center align-items-center' style={{marginBottom:'40px', marginTop:'80px'}}>
    <Button className='w-70'>
      Donate now
    </Button>
    </div>
    
    <Footer/>  
    </>
  )
}

export default Donate;