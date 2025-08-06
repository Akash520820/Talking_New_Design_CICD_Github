import './FifthContent.css';
import React, { useState, useEffect, useRef } from 'react';

function FifthContent() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ downloads: 0, ratings: 0, reviews: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Enhanced counter animation with better easing and staggered timing
  useEffect(() => {
    if (isVisible) {
      const targets = { downloads: 160, ratings: 4.8, reviews: 2500 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        // Smoother easing with bounce effect at the end
        const easeOut = progress < 0.9 
          ? 1 - Math.pow(1 - progress, 3)
          : 1 - Math.pow(1 - progress, 3) + Math.sin((progress - 0.9) * 50) * 0.02;

        setCounters({
          downloads: Math.floor(targets.downloads * easeOut),
          ratings: (targets.ratings * easeOut).toFixed(1),
          reviews: Math.floor(targets.reviews * easeOut)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters({
            downloads: targets.downloads,
            ratings: targets.ratings.toFixed(1),
            reviews: targets.reviews
          });
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <div className="fc-fifth-content-section" ref={sectionRef}>
      {/* Enhanced Background Elements */}
      <div className="fc-background-elements">
        <div className="fc-floating-orb fc-orb-1"></div>
        <div className="fc-floating-orb fc-orb-2"></div>
        <div className="fc-floating-orb fc-orb-3"></div>
        <div className="fc-grid-pattern"></div>
      </div>

      <div className="fc-container">
        <div className="fc-row">
          {/* Left Side - Mobile Phones with Enhanced Design */}
          <div className="fc-col-mobile">
            <div className={`fc-mobile-showcase ${isVisible ? 'fc-visible' : ''}`}>
              <div className="fc-mobile-glow-wrapper">
                <div className="fc-mobile-frame">
                  <img
                    src="https://talkengglobal.com/assets/images/teacherMobileLogosmall1.webp"
                    alt="TalkEng Mobile App Interface"
                    className="fc-mobile-image"
                    loading="lazy"
                  />
                  <div className="fc-mobile-reflection"></div>
                </div>
                <div className="fc-floating-icons">
                  <div className="fc-icon-bubble fc-icon-1">💬</div>
                  <div className="fc-icon-bubble fc-icon-2">🎯</div>
                  <div className="fc-icon-bubble fc-icon-3">⭐</div>
                  <div className="fc-icon-bubble fc-icon-4">🚀</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Content */}
          <div className="fc-col-content">
            <div className={`fc-content-wrapper ${isVisible ? 'fc-visible' : ''}`}>
              
              {/* Premium Badge */}
              <div className={`fc-premium-badge ${isVisible ? 'fc-visible' : ''}`}>
                <div className="fc-badge-icon">⚡</div>
                <span>Join TalkEng Community</span>
                <div className="fc-badge-shine"></div>
              </div>
              
              {/* Enhanced Main Heading */}
              <h1 className="fc-main-heading">
                <span className="fc-heading-line">
                  Download <span className="fc-text-gradient-blue">TalkEng</span>
                </span>
                <span className="fc-heading-line">
                  <span className="fc-text-gradient-purple">On Your Device</span>
                </span>
                <span className="fc-heading-line fc-cta-line">
                  <span className="fc-text-gradient-orange">Get Started Now!</span>
                  <div className="fc-heading-underline"></div>
                </span>
              </h1>

              {/* Enhanced Statistics */}
              <div className="fc-stats-showcase">
                <div className={`fc-stat-card ${isVisible ? 'fc-visible' : ''}`} data-delay="0.2">
                  <div className="fc-stat-icon">📱</div>
                  <div className="fc-stat-content">
                    <h3 className="fc-stat-number">{counters.downloads}k+</h3>
                    <p className="fc-stat-label">Active Downloads</p>
                  </div>
                  <div className="fc-stat-glow"></div>
                </div>
                
                <div className={`fc-stat-card ${isVisible ? 'fc-visible' : ''}`} data-delay="0.4">
                  <div className="fc-stat-icon">⭐</div>
                  <div className="fc-stat-content">
                    <h3 className="fc-stat-number">{counters.ratings}★</h3>
                    <p className="fc-stat-label">User Rating</p>
                  </div>
                  <div className="fc-stat-glow"></div>
                </div>
                
                <div className={`fc-stat-card ${isVisible ? 'fc-visible' : ''}`} data-delay="0.6">
                  <div className="fc-stat-icon">💬</div>
                  <div className="fc-stat-content">
                    <h3 className="fc-stat-number">{counters.reviews}+</h3>
                    <p className="fc-stat-label">Happy Reviews</p>
                  </div>
                  <div className="fc-stat-glow"></div>
                </div>
              </div>

              {/* Enhanced Description */}
              <div className="fc-description-section">
                <p className="fc-description-text">
                  Experience the future of English learning with <strong>TalkEng</strong> - 
                  your personal gateway to fluent communication. Connect with native speakers, 
                  practice in real-time, and transform your English skills with our 
                  AI-powered learning platform.
                </p>
                
                <div className="fc-feature-highlights">
                  <div className="fc-feature-item">
                    <span className="fc-feature-icon">🎯</span>
                    <span>Personalized Learning</span>
                  </div>
                  <div className="fc-feature-item">
                    <span className="fc-feature-icon">👥</span>
                    <span>Native Speakers</span>
                  </div>
                  <div className="fc-feature-item">
                    <span className="fc-feature-icon">⚡</span>
                    <span>Instant Feedback</span>
                  </div>
                </div>
              </div>

              {/* Premium Download Buttons */}
              <div className="fc-download-section">
                <h3 className="fc-download-title">Choose Your Platform</h3>
                <div className="fc-app-store-buttons">
                  <a 
                    href="#" 
                    className={`fc-app-store-button fc-google-play ${isVisible ? 'fc-visible' : ''}`}
                    aria-label="Download TalkEng on Google Play Store"
                  >
                    <div className="fc-button-content">
                      <div className="fc-store-icon-wrapper">
                        <svg className="fc-store-icon" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                        </svg>
                      </div>
                      <div className="fc-store-text">
                        <span className="fc-store-subtitle">Get it on</span>
                        <span className="fc-store-title">Google Play</span>
                      </div>
                    </div>
                    <div className="fc-button-shine"></div>
                  </a>
                  
                  <a 
                    href="#" 
                    className={`fc-app-store-button fc-app-store ${isVisible ? 'fc-visible' : ''}`}
                    aria-label="Download TalkEng on Apple App Store"
                  >
                    <div className="fc-button-content">
                      <div className="fc-store-icon-wrapper">
                        <svg className="fc-store-icon" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71,19.5C17.88,20.74 17,22 15.66,22.03C14.32,22.06 13.89,21.24 12.37,21.24C10.84,21.24 10.37,22.01 9.1,22.05C7.79,22.1 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.42,12.63C17.45,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                        </svg>
                      </div>
                      <div className="fc-store-text">
                        <span className="fc-store-subtitle">Download on the</span>
                        <span className="fc-store-title">App Store</span>
                      </div>
                    </div>
                    <div className="fc-button-shine"></div>
                  </a>
                </div>
                
                <div className="fc-download-note">
                  <span className="fc-note-icon">🔒</span>
                  <span>Free download • No subscription required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthContent;