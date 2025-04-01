import React, { useEffect, useState, useRef } from "react";
import president from "../images/executives/president.jpg";
import vice from "../images/executives/vice.jpg";
import organiser from "../images/executives/organiser.jpg";
import deputyorganiser from "../images/executives/deputyorganiser.jpg";
import secretary from "../images/executives/secretary.jpg";
import financialsec from "../images/executives/financialsec.jpg";
import assfinsec from "../images/executives/assistant_fin_sec.jfif";
import "./Members.css";

const Members = () => {
  const teamMembers = [
    { src: president, alt: "President", position: "President", name: "Mrs. Dorothy Adei Kotei-Yawson" },
    { src: vice, alt: "Vice President", position: "Vice President", name: "Mr. Philip Akuetteh Nai" },
    { src: organiser, alt: "Organiser", position: "Organiser", name: "Madam Sandra Kpobi" },
    { src: deputyorganiser, alt: "Deputy Organiser", position: "Deputy Organiser", name: "Miss Josephine Adjeley Adjei" },
    { src: secretary, alt: "Secretary", position: "Secretary", name: "Lawrencia Emmanuella Quarshie" },
    { src: financialsec, alt: "Financial Secretary", position: "Financial Secretary", name: "Meshack Okoe Oman" },
    { src: assfinsec, alt: "Assistant Financial Secretary", position: "Assistant Financial Secretary", name: "Clemencia Sefakor Opare" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const gridContainerRef = useRef(null);
  const itemRefs = useRef([]);
  const intervalRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % teamMembers.length);
      }, 4000);
    };

    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, [teamMembers.length]);

  // Handle scroll to active item with mobile optimization
  useEffect(() => {
    if (gridContainerRef.current && itemRefs.current[activeIndex]) {
      const container = gridContainerRef.current;
      const item = itemRefs.current[activeIndex];
      const containerWidth = container.offsetWidth;
      const itemWidth = item.offsetWidth;
      const itemLeft = item.offsetLeft;
      
      // Calculate scroll position to center the item
      let scrollTo = itemLeft - (containerWidth / 2) + (itemWidth / 2);
      
      // Ensure we don't scroll past the beginning or end
      scrollTo = Math.max(0, Math.min(scrollTo, container.scrollWidth - containerWidth));
      
      container.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  return (
    <section aria-labelledby="team-title" className="members-section">
      <h1 id="team-title" className="title">Meet Our Team</h1>
      <div className="grid-container" ref={gridContainerRef}>
        <div className="grid-scroll">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              ref={el => itemRefs.current[index] = el}
              className={`grid-item ${index === activeIndex ? 'active' : ''}`}
              aria-label={`${member.position}: ${member.name}`}
            >  
              <img
                src={member.src}
                alt={member.alt}
                className="image"
                onError={(e) => (e.target.src = "/images/default-placeholder.png")}
              />
              <div className={`overlay ${index === activeIndex ? 'active' : ''}`}>
                <h2>{member.position}</h2>
                <p>{member.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;