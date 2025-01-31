import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaMoneyBillAlt, FaUtensils, FaTshirt, FaBook, FaBuilding } from 'react-icons/fa';

const AutoScrollCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track active index

  // Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    cssEase: 'linear',
    beforeChange: (current, next) => setActiveIndex(next), // Update active index
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Data for carousel items
  const items = [
    { name: 'Money', icon: <FaMoneyBillAlt size={40} /> },
    { name: 'Food Items', icon: <FaUtensils size={40} /> },
    { name: 'Clothing', icon: <FaTshirt size={40} /> },
    { name: 'Educational Materials', icon: <FaBook size={40} /> },
    { name: 'Building Materials', icon: <FaBuilding size={40} /> },
  ];

  return (
    <>
    <div className='text-center' style={{margin:'40px'}}><h1>What you can donate</h1></div>
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', border:'2px solid orange' }}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              textAlign: 'center',
              border: `2px solid ${index === activeIndex ? 'orange' : '#ddd'}`,
              borderRadius: '10px',
              padding: '20px',
              margin: '10px',
              transition: 'all 0.3s ease',
              backgroundColor: index === activeIndex ? '#fff7e6' : '#fff', // Highlight active item
              cursor: 'pointer', // Show pointer on hover
            }}
            onMouseEnter={() => setActiveIndex(index)} // Set active on hover
          >
            <h3 style={{ color: '#333' }}>{item.name}</h3>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100px',
                color: 'orange', // Orange color for icons
              }}
            >
              {item.icon}
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </>
    
  );
};

export default AutoScrollCarousel;