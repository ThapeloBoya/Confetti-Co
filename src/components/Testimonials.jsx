import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const TestimonialsCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);

  // Simulate fetching from CMS/API
  useEffect(() => {
    // Simulate async call
    const fetchTestimonials = async () => {
      const data = [
        {
          id: 1,
          name: "James Carter",
          message: "Confetti & Co. made our wedding day absolutely magical. Everything was handled with such care and professionalism.",
          avatar: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww",
          rating: 5
        },
        {
          id: 2,
          name: "Daniel Harris",
          message: "From start to finish, the team was incredible. They truly understood what we wanted and delivered beyond expectations.",
          avatar: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
          rating: 4
        },
        {
          id: 3,
          name: "William Reed",
          message: "Their attention to detail is unmatched. Our corporate event was stunning and stress-free thanks to the amazing team.",
          avatar: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
          rating: 5
        },
        {
          id: 4,
          name: "Michael Bennett",
          message: "Their attThe team at Confetti & Co. brought our anniversary party to life. Their professionalism and attention to detail made the entire experience seamless and unforgettable.",
          avatar: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
          rating: 5
        },
        {
          id: 5,
          name: "Thomas Walker",
          message: "Planning our charity gala felt effortless with Confetti & Co. on board. They understood our goals and delivered a truly elegant and impactful event",
          avatar: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
          rating: 5
        }
      ];
      setTestimonials(data);
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="testimonials" id='testimonials'>
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="testimonials-para">We take pride in bringing our clients’ visions to life. Here’s what some of them had to say about their experience with Confetti & Co.</p>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card">
                <LazyLoadImage
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                   loading="lazy"
                />
                <p className="testimonial-message">"{testimonial.message}"</p>
                <div className="testimonial-rating">
                  {Array(testimonial.rating).fill().map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <h4 className="testimonial-name">— {testimonial.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
