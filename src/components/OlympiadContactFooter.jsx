import React from 'react';
import './OlympiadContactFooter.css';

function OlympiadContactFooter() {
  return (
    <>
      {/* Contact Us Section */}
      <section className="olympiad-contact-section">
        <div className="olympiad-contact-overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="olympiad-contact-title">Get In Touch</h2>
              <p className="olympiad-contact-subtitle">We're here to help you with any questions about the English Olympiad</p>
            </div>
          </div>
          
          <div className="row justify-content-center">
            {/* Call Us */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="olympiad-contact-card">
                <div className="olympiad-contact-icon-wrapper">
                  <span className="olympiad-contact-emoji">📞</span>
                </div>
                <h4 className="olympiad-contact-card-title">Call Us</h4>
                <p className="olympiad-contact-card-detail">+91-7085238085</p>
                <div className="olympiad-contact-card-description">
                  Available Mon-Fri, 9 AM - 6 PM
                </div>
              </div>
            </div>

            {/* Email Us */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="olympiad-contact-card">
                <div className="olympiad-contact-icon-wrapper">
                  <span className="olympiad-contact-emoji">📧</span>
                </div>
                <h4 className="olympiad-contact-card-title">Email Us</h4>
                <p className="olympiad-contact-card-detail">support@talkengglobal.com</p>
                <div className="olympiad-contact-card-description">
                  We'll respond within 24 hours
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="olympiad-contact-card">
                <div className="olympiad-contact-icon-wrapper">
                  <span className="olympiad-contact-emoji">📍</span>
                </div>
                <h4 className="olympiad-contact-card-title">Visit Us</h4>
                <p className="olympiad-contact-card-detail">IT Bhavan 5th Floor</p>
                <div className="olympiad-contact-card-description">
                  799006, West Tripura, India
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="olympiad-footer-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="olympiad-footer-brand">
                <h1 className="olympiad-footer-logo">
                  ENGLISH <span className="olympiad-footer-logo-highlight">OLYMPIAD</span>
                </h1>
                <div className="olympiad-footer-version">2.0</div>
              </div>
              
              <p className="olympiad-footer-organizer">
                Organised by <span className="olympiad-footer-company">Agatsya Edutech Private Limited</span>
              </p>
              
              <div className="olympiad-footer-divider"></div>
              
              <div className="olympiad-footer-bottom">
                <div className="row align-items-center">
                  <div className="col-md-6 text-md-start text-center mb-3 mb-md-0">
                    <p className="olympiad-footer-copyright">
                      © 2024-2025 English Olympiad. All Rights Reserved.
                    </p>
                  </div>
                  <div className="col-md-6 text-md-end text-center">
                    <div className="olympiad-footer-links">
                      <a href="https://olympiad.talkengglobal.com/index.html" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="olympiad-footer-website-link">
                        Visit Our Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default OlympiadContactFooter;