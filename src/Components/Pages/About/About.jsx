import React from 'react';
import Navtab from '../../NavBar/Navtab';
import "./About.css"; // Import the updated About.css
import Members from '../../Members';
import Footer from '../../Footer/Footer';

const About = () => {
  return (
    <>
      <Navtab />
      <div className="about-hero-container">
        <div className="about-hero-content">
          <h1 className="about-top-text">About Us.</h1>
        </div>
      </div>

        <h1 className='text-center'>WHO WE ARE</h1>
      <div className="about-who-we-are">
        We are a charity organization that seeks to help the less previledged in our society. Our main focus is to 
        help erradicate and reduce the problem of streetism in our communities. Though our main focus is on street children,
        we also help other people such as students, sick people, widows, prisoners and victims of natural disaster through 
        outreach programs which include health education and free health screening, mentorship programs, donations, scholarships and many more. 
        We are committed to making lives better for everyone.
      </div>

      <h1 className="about-history-heading">HISTORY OF THE FOUNDATION</h1>

      <div className="about-history">
        <p>
        The foundation was born from the lived experience of its president, who once walked the difficult 
        path of a street child. Having faced the struggles and temptations of life on the streets firsthand, 
        she understood the dreams and potential buried beneath the hardships of vulnerable children. 
        After years of ministry, she felt a divine calling to return to the streets—not as the person she once was, 
        but as a beacon of hope, determined to transform lives just as hers had been transformed.
        </p>
        <p>
        Driven by compassion and a deep sense of purpose, the foundation was established to uplift street children, 
        widows, the sick, and others in need. Through scholarships, skills training, healthcare support, and empowerment 
        initiatives, the organization seeks to break cycles of poverty and despair. Every initiative is rooted in the president’s 
        unwavering belief that no dream is too big and no life is beyond redemption. Together with a growing community of 
        supporters, the foundation continues to rewrite stories, offering love, opportunity, and a brighter future.
        </p>
      </div>

      <Members />
      <Footer />
    </>
  );
};

export default About;