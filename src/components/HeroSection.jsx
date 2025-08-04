import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import { FaSignal } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdRecordVoiceOver } from "react-icons/md";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      tag: "PUBLIC SPEAKING",
      title: "Join Guided Public Speaking Daily",
      description: "Practice English speaking with your friends & an expert tutor for FREE everyday & become more fluent & gain confident!",
      primaryButton: "Get Started",
      showPhone: false
    },
    {
      tag: "TALKENG ENGLISH SESSION",
      title: "Live 1-ON-1 Session Daily With Tutors",
      description: "Become fluent faster through one-on-one video & voice Session tailored to your goals daily!",
      primaryButton: "Book Now",
      showPhone: false
    },
    {
      tag: "SPECIAL OFFER",
      title: "Avail your first 1-1 Session for",
      titlePrice: true,
      originalPrice: "₹149",
      discountedPrice: "₹99!",
      description: "We are so confident that we provide you a 1-ON-1 Premium Video Class with an expert English tutor for just ₹99",
      primaryButton: "Get Started",
      showPhone: true,
      phoneNumber: "+91-7085-23-8085"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((currentSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleSlideChange = (newSlide) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(newSlide);
      setIsAnimating(false);
    }, 200);
  };

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    handleSlideChange((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hero-container">
      {/* Video Background - KEPT AS REQUESTED */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="hero-video"
      >
        <source src="https://camblycdnimages.camblycdn.com/brandvideo/480x500-Video_02_v02_241024.mp4" type="video/mp4" />
      </video>
      
      {/* Enhanced Gradient Overlay */}
      <div className="hero-overlay"></div>

      {/* Main Content */}
      <div className="hero-content">
        <div className="hero-inner">
          <div className="hero-wrapper">
            {/* Content with Animation */}
            <div className={`slide-content ${isAnimating ? 'animating' : ''} ${currentSlide === 2 ? 'special-offer' : ''}`}>
              {/* Tag */}
              <div className="tag-container">
                <span className="tag">
                  {slides[currentSlide].tag}
                </span>
              </div>

              {/* Title with Highlight */}
              <h1 className="title">
                {slides[currentSlide].titlePrice ? (
                  <>
                    {slides[currentSlide].title}{' '}
                    <span className="price-wrapper">
                      <span className="original-price">{slides[currentSlide].originalPrice}</span>{' '}
                      <span className="highlight-word">{slides[currentSlide].discountedPrice}</span>
                    </span>
                  </>
                ) : (
                  slides[currentSlide].title.split(' ').map((word, index) => {
                    // Highlight different words based on slide
                    const highlightWords = ['Daily', 'Tutors'];
                    const isHighlight = highlightWords.some(hw => word.includes(hw));
                    
                    return isHighlight ? (
                      <span key={index} className="highlight-word">{word} </span>
                    ) : (
                      <span key={index}>{word} </span>
                    );
                  })
                )}
              </h1>

              {/* Description */}
              <p className="description">
                {slides[currentSlide].description}
              </p>

              {/* Buttons */}
              <div className="button-container">
                <button className="primary-button">
                  <span className="button-play-icon">▶</span> {slides[currentSlide].primaryButton}
                </button>
                
                {slides[currentSlide].showPhone && (
                  <button className="phone-button">
                    <span className="phone-icon">📞</span> {slides[currentSlide].phoneNumber}
                  </button>
                )}
              </div>

              {/* App Store Buttons */}
              <div className="app-store-container">
                <a href="#" className="app-store-link">
                  <div className="app-store-button">
                    <div className="app-icon">
                      <div className="icon-wrapper google-play">
                        <span className="icon-emoji">📱</span>
                      </div>
                    </div>
                    <div className="app-info">
                      <div className="app-subtitle">GET IT ON</div>
                      <div className="app-title">Google Play</div>
                    </div>
                  </div>
                </a>
                
                <a href="#" className="app-store-link">
                  <div className="app-store-button">
                    <div className="app-icon">
                      <div className="icon-wrapper apple-store">
                        <span className="icon-emoji">🍎</span>
                      </div>
                    </div>
                    <div className="app-info">
                      <div className="app-subtitle">Download on the</div>
                      <div className="app-title">App Store</div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Enhanced Slide Indicators */}
              <div className="slide-indicators">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleSlideChange(index)}
                    className={`indicator ${currentSlide === index ? 'active' : ''}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Features Section */}
      <div className="bottom-features">
        <div className="container">
          <div className="features-row">
            <div className="feature-col">
              <div className="feature-item">
                <span className="feature-icon"><FaSignal /></span>
                <span className="feature-text">All levels welcome</span>
              </div>
            </div>
            <div className="feature-col">
              <div className="feature-item">
                <span className="feature-icon"><MdRecordVoiceOver /></span>
                <span className="feature-text">Real conversations with native speakers</span>
              </div>
            </div>
            <div className="feature-col">
              <div className="feature-item">
                <span className="feature-icon"><IoLocation /></span>
                <span className="feature-text">Anytime, anywhere, 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;