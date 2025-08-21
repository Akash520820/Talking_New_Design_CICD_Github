import React from 'react';
import './OlympiadGalleryPart1.css';

const OlympiadGalleryPart1 = () => {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=200&fit=crop",
      alt: "Student with books and skull model"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=300&h=200&fit=crop",
      alt: "Young chess player concentrating"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=300&h=200&fit=crop",
      alt: "Science experiment with colorful liquids"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&h=200&fit=crop",
      alt: "Students working together on project"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      alt: "Student playing violin"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop",
      alt: "Students collaborating on laptops"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop",
      alt: "Student in science laboratory"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop",
      alt: "Student studying with books"
    }
  ];

  return (
    <div className="olympiad-gallery">
      <div className="container-fluid">
        <h2 className="gallery-title text-center text-white mb-4">
         <button className='btn btn-primary'>Watch Full Olympiad Gallery</button> 
        </h2>
        
        <div className="gallery-container position-relative">
          {/* Left Arrow */}
          <button className="gallery-nav gallery-nav-left btn p-0" aria-label="Previous images">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Gallery Images */}
          <div className="gallery-scroll d-flex">
            {galleryImages.map((image) => (
              <div key={image.id} className="gallery-item flex-shrink-0">
                <div className="gallery-image-container">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="gallery-image img-fluid"
                    loading="lazy"
                  />
                  <div className="gallery-overlay d-flex align-items-center justify-content-center">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="5,3 19,12 5,21" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="gallery-nav gallery-nav-right btn p-0" aria-label="Next images">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OlympiadGalleryPart1;