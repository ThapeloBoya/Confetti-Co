import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    eventType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eym5ibd", // Replace with your Service ID from EmailJS
        "template_f48bz0v", // Replace with your Template ID from EmailJS
        e.target, // Sends the form
        "EmqhrqmQpuNOFHAio" // api key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Error sending message. Please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className="contact-header" >
        <div className="container">
          <h1 className="contact-header-title">Your event...Our expertise</h1>
          <p className="contact-header-para">
            Let us take care of all the details & make your event extraordinary
          </p>
         <a href="#contact-form"><button className="contact-header-button">Book a consultation</button></a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <p className="contact-para">
            We’d love to hear from you! Fill out the form below and we’ll get
            back to you as soon as possible.
          </p>

          <div className="contact-content">
            {/* Form Section */}
            <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group">
  <input
    type="date"
    id="date"
    name="date"
    value={formData.date}
    onChange={handleChange}
    min={new Date().toISOString().split("T")[0]} // disables past dates
    required
    className="date-input"
  />
</div>

              <div className="form-group">
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="baby-shower">Special Occasions</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Additional Information"
                ></textarea>
              </div>
              <button type="submit" className="btn">
                Send
              </button>
            </form>

            {/* Contact Details */}
            <div className="contact-details">
              <p className="contact-phone">Phone: 000 000 0000</p>
              <p className="contact-email">Email: info@confettiandco.com</p>
              <p className="contact-address">Address: 123 Celebration Lane, Party City</p>

              <div className="contact-map">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.374135811366!2d-79.38423868449936!3d43.64867597912172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34c5b3a0b4e7%3A0x6c3f1b8e3c3c0d5e!2sConfetti%20%26%20Co.!5e0!3m2!1sen!2sca!4v1626160132304!5m2!1sen!2sca"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          <p className="footer">© 2025 Confetti & Co. All rights reserved.</p>
        </div>
      </section>
    </>
  );
}
