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
      setResult("✅ Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(`❌ ${data.message}`);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Have any questions? Fill out the form and we’ll respond as soon as possible.
        </p>
        <form onSubmit={onSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
            className="contact-input"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="contact-textarea"
          ></textarea>
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
        {result && <p className="contact-result">{result}</p>}
      </div>
    </div>
  );
}
