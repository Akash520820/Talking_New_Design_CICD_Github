import React from "react";
import "./OlympiadHomePart2.css";

const OlympiadGalleryPart2 = () => {
  return (
    <div className="olympiad-container">
      {/* Background Video */}
      <div className="video-background">
        <video 
          className="background-video" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          {/* Replace this src with your video URL when available */}
          <source src="your-video-url-here.mp4" type="video/mp4" />
          <source src="your-video-url-here.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Background decorative elements */}
      <div className="bg-decoration bg-decoration-1"></div>
      <div className="bg-decoration bg-decoration-2"></div>
      <div className="bg-decoration bg-decoration-3"></div>

      <div className="content-wrapper">
        {/* Left side - Branding */}
        <div className="branding-section">
          <div className="state-badge">
            <span className="state-text">TRIPURA'S</span>
            <span className="state-text">BIGGEST</span>
            <span className="state-text">STATE LEVEL</span>
            <span className="highlight-text">ENGLISH</span>
          </div>
        </div>

        {/* Center - Main Title */}
        <div className="main-title-section">
          <h1 className="olympiad-title">
            <span className="title-word">OLYMPIAD</span>
          </h1>
          <div className="title-gradient-line"></div>
        </div>

        {/* Right side - Registration Info */}
        <div className="registration-section">
          <div className="registration-card">
            <h2 className="registration-heading">
              <span className="heading-line">Unlock Your Potential:</span>
              <span className="heading-line">
                <span className="highlight">Register Now</span> for the State
              </span>
              <span className="heading-line">
                Level English Olympiad and Let Your Skills Shine!
              </span>
            </h2>

            <div className="info-cards">
              {/* Exam Date Card */}
              <div className="info-card exam-date-card">
                <div className="card-label">**Note:</div>
                <div className="card-content">
                  <p>
                    The exam for the State Level English Olympiad 2.0 will be
                    held on
                  </p>
                  <div className="date-highlight">
                    <span className="day">SUNDAY</span>
                    <span className="date">27th July</span>
                    <span className="year">2025.</span>
                  </div>
                </div>
              </div>

              {/* Exam Time Card */}
              <div className="info-card exam-time-card">
                <div className="card-content">
                  <p>
                    The exam time - <strong>12PM.</strong>
                  </p>
                  <p>
                    Reporting time <strong>1hr before</strong> the exam time
                  </p>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <button className="download-btn">
              <svg
                className="download-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 16L7 11L8.4 9.6L11 12.2V4H13V12.2L15.6 9.6L17 11L12 16Z"
                  fill="currentColor"
                />
                <path d="M5 20V18H19V20H5Z" fill="currentColor" />
              </svg>
              <span className="btn-text">DOWNLOAD ADMIT CARD</span>
            </button>

            {/* Organizer Info */}
            <div className="organizer-info">
              <span className="organizer-label">Organised By:</span>
              <div className="organizer-brand">
                <img
                  src="https://olympiad.talkengglobal.com/images/logo-forwebsite.png"
                  alt="Talk English Global Logo"
                  className="brand-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default OlympiadGalleryPart2;