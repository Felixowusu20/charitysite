import React from 'react'
import Services from '../Services/Services'
import Header from '../Services/Components/Header'
import Navtab from "../../NavBar/Navtab"
import Intro from "../Donate/Intro"
import Footer from "../../Footer/Footer"
function ServicesPage() {
  return (
    <div>
      <Navtab />
      <Intro 
      heading={'Services'}
      typewriterTexts={["Hi welcome to the services page"]}
      
      />
      <div>
        <Services />
      </div>
    
      <Header />
      <Footer />
    </div>
  );
}

export default ServicesPage