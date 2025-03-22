import React from 'react'
import Services from '../Services/Services'
import Header from '../Services/Components/Header'
import Navtab from "../../NavBar/Navtab"
import Intro from "../Donate/Intro"
function ServicesPage() {
  return (
    <div>
      <Navtab />
      <Intro />
      <div>
        <Services />
      </div>
    
      <Header />
    </div>
  );
}

export default ServicesPage