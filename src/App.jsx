import React from 'react';
import CookieConsent from "./components/CookieConsent";
import Navbar from './components/Navbar';
import Services from './components/Services';
import Gallery from './components/Gallery';
import TestimonialsCarousel from './components/Testimonials';
import Contact from './components/Contact.JSX';

function App() {
  return (
    <>
    <div>
    <CookieConsent />
    <Navbar />
    <Services />
    <Gallery />
    <TestimonialsCarousel />
    <Contact />
    </div>
    </>
  )
}

export default App
