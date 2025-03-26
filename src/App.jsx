import React, { Suspense, lazy } from 'react';
import CookieConsent from "./components/CookieConsent";
import Navbar from './components/Navbar';
import Services from './components/Services';

// Lazy loaded components
const Gallery = lazy(() => import('./components/Gallery'));
const TestimonialsCarousel = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact.JSX'));

function App() {
  return (
    <div>
      <CookieConsent />
      <Navbar />
      <Services />

      <Suspense fallback={<div>Loading gallery...</div>}>
        <Gallery />
      </Suspense>

      <Suspense fallback={<div>Loading testimonials...</div>}>
        <TestimonialsCarousel />
      </Suspense>

      <Suspense fallback={<div>Loading contact section...</div>}>
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
