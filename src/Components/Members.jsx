import React from "react";
import { motion } from "framer-motion";
import president from "../images/executives/president.jpg";
import vice from "../images/executives/vice.jpg";
import organiser from "../images/executives/organiser.jpg";
import deputyorganiser from "../images/executives/deputyorganiser.jpg";
import secretary from "../images/executives/secretary.jpg";
import financialsec from "../images/executives/financialsec.jpg";
import assfinsec from "../images/executives/assistant_fin_sec.jfif";
import "./Members.css";

const Members = () => {
  const images = [
    {
      src: president,
      alt: "President",
      position: "President",
      name: "Mrs. Dorothy Adei Kotei-Yawson",
    },
    {
      src: vice,
      alt: "Vice President",
      position: "Vice President",
      name: "Mr. Philip Akuetteh Nai",
    },
    {
      src: organiser,
      alt: "Organiser",
      position: "Organiser",
      name: "Madam Sandra Kpobi",
    },
    {
      src: deputyorganiser,
      alt: "Deputy Organiser",
      position: "Deputy Organiser",
      name: "Miss Josephine Adjeley Adjei",
    },
    {
      src: secretary,
      alt: "Secretary",
      position: "Secretary",
      name: "Lawrencia Emmanuella Quarshie",
    },
    {
      src: financialsec,
      alt: "Financial Secretary",
      position: "Financial Secretary",
      name: "Meshack Okoe Oman",
    },
    {
      src: assfinsec,
      alt: "Assistant Financial Secretary",
      position: "Assistant Financial Secretary",
      name: "Clemencia Sefakor Opare",
    },
  ];

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Meet Our Team</h1>
      </div>
      <div className="grid-container">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="grid-item"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            variants={animationVariants}
          >
            <img src={image.src} alt={image.alt} className="image" />
            <div className="overlay">
              <h2>{image.position}</h2>
              <p>{image.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Members;
