import React, { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("weddings");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const images = {
    weddings: [
      "https://images.unsplash.com/photo-1515232389446-a17ce9ca7434?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlZGRpbmclMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1536392706976-e486e2ba97af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdlZGRpbmclMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1473177027534-53d906e9abcf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHdlZGRpbmclMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    corporate: [
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvb3BhcmF0ZSUyMGV2ZW50fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1681409178587-381f10eff3af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvb3BhcmF0ZSUyMGV2ZW50fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvb3BhcmF0ZSUyMGV2ZW50fGVufDB8fDB8fHww",
    ],
    birthdays: [
      "https://plus.unsplash.com/premium_photo-1661780496345-6aeee82ec4b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlydGhkYXklMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1681841639344-360d2a3afcf6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmlydGhkYXklMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1663051163426-a55fb4f113d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJpcnRoZGF5JTIwZXZlbnR8ZW58MHx8MHx8fDA%3D",
    ],
    specialOccasions: [
      "https://images.unsplash.com/photo-1510924199351-4e9d94df18a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNwZWNpYWwlMjBvY2Nhc2lvbnMlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHNwZWNpYWwlMjBvY2Nhc2lvbnMlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1517637633369-e4cc28755e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNwZWNpYWwlMjBvY2Nhc2lvbnMlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D",
    ],
  };

  return (
    <>
    <section className="gallery" id="gallery">
      <div className="gallery-content container">
        <h2>Event Gallery</h2>
        <div className="category-list">
          {/* Headings inline */}
          <h3
            onClick={() => handleCategoryClick("weddings")}
            className={selectedCategory === "weddings" ? "active" : ""}
          >
            Weddings
          </h3>
          <h3
            onClick={() => handleCategoryClick("corporate")}
            className={selectedCategory === "corporate" ? "active" : ""}
          >
            Corporate Events
          </h3>
          <h3
            onClick={() => handleCategoryClick("birthdays")}
            className={selectedCategory === "birthdays" ? "active" : ""}
          >
            Birthday Parties
          </h3>
          <h3
            onClick={() => handleCategoryClick("specialOccasions")}
            className={selectedCategory === "specialOccasions" ? "active" : ""}
          >
            Special Occasions
          </h3>
        </div>

        {/* Conditional rendering of images */}
        <div className="image-gallery">
          {selectedCategory && (
            images[selectedCategory].map((img, index) => (
              <LazyLoadImage key={index} src={img} alt={`${selectedCategory} ${index + 1}`} loading="lazy" effect="blur"   placeholderSrc="path-to-blurred-version.jpg"/>
            ))
          )}
        </div>
      </div>
    </section>
    <section className="process">
        <div className="container process-container">
            <div className="process-content">
            <h2>Our Process</h2>
            <p>At Confetti & Co., we believe in creating memorable events that reflect your unique style and vision. Our event planning process is designed to bring your ideas to life and ensure every detail is perfect.</p>
            </div>
            <div className="process-steps">
            <div className="process-step">
                <h3>Consultation</h3>
                <p>Our first step is to meet with you to discuss your event requirements, budget, and vision. We'll work together to create a plan that meets your needs and exceeds your expectations.</p>
            </div>
            <div className="process-step">
                <h3>Design</h3>
                <p>Once we understand your vision, we'll create a detailed design plan that includes themes, color schemes, and decor ideas. We'll work with you to finalize the design and make any necessary adjustments.</p>
            </div>
            <div className="process-step">
                <h3>Planning</h3>
                <p>Our team will handle all the logistics of your event, from booking vendors to creating a timeline. We'll keep you informed every step of the way and ensure everything is in place for a successful event.</p>
            </div>
            <div className="process-step">
                <h3>Execution</h3>
                <p>On the day of your event, we'll be there to oversee every detail and ensure everything runs smoothly. Our goal is to create a stress-free experience for you and your guests, so you can enjoy your special moment.</p>
            </div>
            </div>
        </div>
        </section>


        </>
  );
};

export default Gallery;
