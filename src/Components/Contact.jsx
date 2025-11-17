import React from "react";
import "./About.css";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p>Have questions or suggestions? We'd love to hear from you!</p>

      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Your email" />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows="5"
          placeholder="Write your message..."
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
