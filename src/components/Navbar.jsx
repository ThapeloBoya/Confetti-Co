import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Navbar */}
      <section className="navbar">
        <div className="container navbar-container">
          <div className="logo">
            <h2>Confetti<span>&</span>Co.</h2>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className={`menu ${menuOpen ? "active" : ""}`}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
              <li className="menu-button"><a href="#contact-form">Book a consultation</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="header">
        <div className="container header-container">
          <div className="header-content">
            <h1>Making your events unforgettable.</h1>
            <a href="#contact-form" className="header-button">Request a quote</a>
          </div>
        </div>
      </section>
    </>
  );
}
