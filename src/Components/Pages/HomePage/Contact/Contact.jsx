import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    
    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2 className="contact-title">Contact Us</h2>
        <form onSubmit={onSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="contact-textarea"
          ></textarea>
          <button
            type="submit"
            className="contact-button"
          >
            Submit
          </button>
        </form>
        {result && (
          <p className="contact-result">{result}</p>
        )}
      </div>
    </div>
  );
}
