import React, { useState, useRef } from "react";
import "./OlympiadGallery.css";
import OlympiadGalleryFooter from "./OlympiadGalleryFooter";

function OlympiadGallery() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  const imageUrl = "https://olympiad.talkengglobal.com/gallery-olympiad/images/IMG_2169.jpg";
  const imageArray = Array.from({ length: 12 });

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    if (videoRef.current) {
      const iframe = videoRef.current.querySelector("iframe");
      if (iframe) {
        // Add autoplay parameter to the YouTube URL
        const currentSrc = iframe.src;
        if (!currentSrc.includes("autoplay=1")) {
          iframe.src = currentSrc + "&autoplay=1";
        }
      }
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="modern-video-section">
        <div className="video-hero-container">
          {/* Background decorative elements */}
          <div className="video-bg-decorations">
            <div className="floating-orb orb-1"></div>
            <div className="floating-orb orb-2"></div>
            <div className="floating-orb orb-3"></div>
            <div className="gradient-mesh"></div>
          </div>

          <div
            className={`video-display-container ${
              isVideoPlaying ? "playing" : ""
            } ${isHovered ? "hovered" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={videoRef}
          >
            {/* Main video frame */}
            <div className="video-frame">
              <div className="video-inner-frame">
                <iframe
                  src="https://www.youtube.com/embed/HuXNYM3K15c?start=5&rel=0&modestbranding=1"
                  title="English Olympiad 2.0 | 2024"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="video-iframe"
                ></iframe>

                {/* Custom video overlay */}
                {!isVideoPlaying && (
                  <div
                    className="video-custom-overlay"
                    onClick={handlePlayVideo}
                  >
                    {/* Play button with ripple effect */}
                    <div className="play-button-container">
                      <div className="play-ripple-1"></div>
                      <div className="play-ripple-2"></div>
                      <div className="play-ripple-3"></div>
                      <button className="modern-play-button">
                        <div className="play-icon">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </button>
                    </div>

                    {/* Video info overlay */}
                    <div className="video-info-overlay">
                      <div className="video-badge">
                        <span className="live-indicator"></span>
                        HD Quality
                      </div>
                      <h3 className="overlay-title">
                        Olympiad 2024 Highlights
                      </h3>
                      <p className="overlay-subtitle">
                        Experience the excitement and join the competition
                      </p>

                      <div className="video-meta">
                        <div className="meta-item">
                          <div className="meta-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                          </div>
                          <span>50K+ Participants</span>
                        </div>
                        <div className="meta-item">
                          <div className="meta-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          </div>
                          <span>₹10L+ Prizes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative frame elements */}
              <div className="frame-decoration top-left"></div>
              <div className="frame-decoration top-right"></div>
              <div className="frame-decoration bottom-left"></div>
              <div className="frame-decoration bottom-right"></div>
            </div>

            {/* Side statistics panel */}
            <div className="stats-panel">
              <div className="stats-header">
                <div className="stats-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                  </svg>
                </div>
                <span>Live Stats</span>
              </div>
              <div className="stat-row">
                <div className="stat-label">Registered</div>
                <div className="stat-value">
                  <span className="stat-number">47,832</span>
                  <div className="stat-bar">
                    <div className="stat-fill" style={{ width: "78%" }}></div>
                  </div>
                </div>
              </div>
              <div className="stat-row">
                <div className="stat-label">Schools</div>
                <div className="stat-value">
                  <span className="stat-number">156</span>
                  <div className="stat-bar">
                    <div className="stat-fill" style={{ width: "65%" }}></div>
                  </div>
                </div>
              </div>
              <div className="stat-row">
                <div className="stat-label">Prize Pool</div>
                <div className="stat-value">
                  <span className="stat-number">₹12L</span>
                  <div className="stat-bar">
                    <div className="stat-fill" style={{ width: "95%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive timeline */}
            <div className="video-timeline">
              <div className="timeline-header">Event Timeline</div>
              <div className="timeline-items">
                <div className="timeline-item active">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-title">Registration Open</div>
                    <div className="timeline-date">Jan 15, 2024</div>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-title">Preliminary Round</div>
                    <div className="timeline-date">Feb 20, 2024</div>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-title">Final Round</div>
                    <div className="timeline-date">Mar 15, 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="video-actions">
            <button className="action-btn primary-action">
              <div className="btn-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
              </div>
              <span>Register Now</span>
              <div className="btn-glow"></div>
            </button>
            <button className="action-btn secondary-action">
              <div className="btn-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>
      <div className="OlympiadGallerycon container">
        <h1 className="OlympiadGalleryh1">Previous Year Olympiad Glimpses</h1>
      <div className="row">
        {imageArray.map((_, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 OlympiadGallerycol" key={index}>
            <img
              src={imageUrl}
              className="img-fluid"
              alt={`Olympiad Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
    <OlympiadGalleryFooter />
    </>
  );
}

export default OlympiadGallery;
