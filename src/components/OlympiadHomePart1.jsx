import React, { useState, useRef, useEffect } from 'react';
import './OlympiadHomePart1.css';

const OlympiadGalleryPart1 = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=280&fit=crop&auto=format",
      alt: "Student with books and skull model"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=280&fit=crop&auto=format",
      alt: "Young chess player concentrating"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=280&fit=crop&auto=format",
      alt: "Science experiment with colorful liquids"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=280&fit=crop&auto=format",
      alt: "Students working together on project"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=280&fit=crop&auto=format",
      alt: "Student playing violin"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=280&fit=crop&auto=format",
      alt: "Students collaborating on laptops"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=280&fit=crop&auto=format",
      alt: "Student in science laboratory"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=280&fit=crop&auto=format",
      alt: "Student studying with books"
    }
  ];

  const itemWidth = 320; // Width of each gallery item including gap
  const visibleItems = 4; // Number of items visible at once

  const updateScrollState = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      
      // Update current index based on scroll position
      const newIndex = Math.round(scrollLeft / itemWidth);
      setCurrentIndex(newIndex);
    }
  };

  const scrollTo = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = itemWidth * 2; // Scroll 2 items at a time
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? Math.max(0, currentScroll - scrollAmount)
        : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const targetScroll = index * itemWidth;
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateScrollState);
      updateScrollState(); // Initial state

      return () => {
        scrollContainer.removeEventListener('scroll', updateScrollState);
      };
    }
  }, []);

  const handleImageClick = (image) => {
    console.log('Image clicked:', image);
    // Add your image click logic here (e.g., open modal, navigate, etc.)
  };

  const totalPages = Math.ceil(galleryImages.length / visibleItems);

  return (
    <div className="olympiad-gallery">
      {/* Animated Background */}
      <div className="gallery-background">
        <div className="galaxy-particles"></div>
      </div>

      <div className="gallery-content">
        {/* Header Section */}
        <div className="gallery-header">
          <h2 className="gallery-title">
            Our <span className="title-highlight">Olympiad</span> Champions
          </h2>
          <p className="gallery-subtitle">
            Celebrating excellence across multiple disciplines and achievements
          </p>
          <button className="gallery-cta-btn" onClick={() => console.log('Watch full gallery')}>
            <div className="btn-shine"></div>
            <span className="btn-text">Watch Full Gallery</span>
          </button>
        </div>

        {/* Gallery Container */}
        <div className="gallery-container">
          {/* Left Navigation */}
          <button 
            className={`gallery-nav gallery-nav-left ${!canScrollLeft ? 'disabled' : ''}`}
            onClick={() => scrollTo('left')}
            disabled={!canScrollLeft}
            aria-label="Previous images"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Gallery Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="gallery-scroll"
          >
            {galleryImages.map((image, index) => (
              <div key={image.id} className="gallery-item">
                <div 
                  className="gallery-image-container"
                  onClick={() => handleImageClick(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="gallery-image"
                    loading="lazy"
                  />
                  <div className="image-border"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Navigation */}
          <button 
            className={`gallery-nav gallery-nav-right ${!canScrollRight ? 'disabled' : ''}`}
            onClick={() => scrollTo('right')}
            disabled={!canScrollRight}
            aria-label="Next images"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Gallery Indicators */}
        <div className="gallery-indicators">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`indicator ${Math.floor(currentIndex / visibleItems) === index ? 'active' : ''}`}
              onClick={() => scrollToIndex(index * visibleItems)}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OlympiadGalleryPart1;