import React from 'react';
import './ApplyAsTutorFooter.css';

const ApplyAsTutorFooter = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row align-items-start">
          {/* Left Section - Company Info */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="company-info">
              {/* Logo and Brand */}
              <div className="brand-section">
                <div className="logo-wrapper">
                  <div className="logo">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <path d="M9 14h18M9 18h18M9 22h14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                      <circle cx="28" cy="8" r="3" fill="white" opacity="0.8"/>
                    </svg>
                  </div>
                  <div className="brand-text">
                    <img 
                      src="https://talkengglobal.com/assets/images/talkeng_main_logo.png" 
                      alt="TalkEng Global Logo" 
                      className="brand-logo-img"
                    />
                    <p className="brand-tagline">Learn Language Practically</p>
                  </div>
                </div>
              </div>

              {/* Company Description */}
              <p className="company-description">
                TalkEng's goal is to help everyone achieve perfection & fluency in English as easily as 
                their mother tongue by emphasizing the Listening-Observing-Speaking method through 
                our verified skilled English tutors.
              </p>

              {/* Sign Up Button */}
              <button className="btn-signup" onClick={() => window.location.href = '/signup'}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="user-icon">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Sign Up Today
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="arrow-icon">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className="col-lg-6 col-md-12">
            <div className="contact-info">
              <h2 className="contact-title">Get in Touch</h2>
              
              {/* Address */}
              <div className="contact-item">
                <div className="contact-icon address-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4 className="contact-label">Headquarters</h4>
                  <p className="contact-text">
                    5th Floor, STPI, IT Bhavan, ITI Road,<br/>
                    Agartala, West Tripura, Tripura 799006<br/>
                    India
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-item">
                <div className="contact-icon email-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4 className="contact-label">Email Support</h4>
                  <div className="email-links">
                    <a href="mailto:support@talkengglobal.com" className="email-link">
                      support@talkengglobal.com
                    </a>
                    <a href="mailto:info@talkengglobal.com" className="email-link">
                      info@talkengglobal.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ApplyAsTutorFooter;