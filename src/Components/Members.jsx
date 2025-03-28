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
  const membersSectionRef = useRef(null);
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsComponentVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (membersSectionRef.current) {
      observer.observe(membersSectionRef.current);
    }

    return () => {
      if (membersSectionRef.current) {
        observer.unobserve(membersSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isComponentVisible) return;

    const scrollInterval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 4000);

    return () => clearInterval(scrollInterval);
  }, [isComponentVisible, teamMembers.length]);

  return (
    <section aria-labelledby="team-title" className="backcolor" ref={membersSectionRef}>
      <h1 id="team-title" style={{ textAlign: "center", margin: "1rem 0" }}>Meet Our Team</h1>
      <div className="grid-container" ref={gridContainerRef}>
        <div className="grid-scroll">
          {teamMembers.map((member, index) => (
            <div key={index} className="grid-item" aria-label={`${member.position}: ${member.name}`}>  
              <img
                src={member.src}
                alt={member.alt}
                className="image"
                onError={(e) => (e.target.src = "/images/default-placeholder.png")}
              />
              <div className={`overlay ${activeIndex === index ? "active" : ""}`}>
                <h2 style={{ color: 'orange' }}>{member.position}</h2>
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
