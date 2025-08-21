import React from 'react';
import './FAQThirdPart.css'; // Import the CSS file

const FAQThirdPart = () => {
  return (
    <section className="talkeng-section py-5">
      <div className="container">
        <div className="row align-items-center min-vh-75">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="logo-container mb-4">
              <div className="logo-icon">
                <div className="icon-shapes">
                  <div className="shape-orange"></div>
                  <div className="shape-blue"></div>
                </div>
                <span className="logo-text">TALKENG</span>
                <div className="tagline">LEARN LANGUAGE PRACTICALLY</div>
              </div>
            </div>
            
            <div className="content-section">
              <p className="description">
                TalkEng is the best platform to become fluent in English. Join live 1-ON-1 
                video/voice classes with expert tutors or guided Public Speaking for free. 
                This helps you become fluent in english as well as boost your confidence as 
                easily as you learned your mother tongue. <strong>LEARNING ENGLISH HAS NEVER BEEN EASIER.</strong>
              </p>
              
              <button className="btn-get-started" onClick={() => {
                // Add your click handler logic here
                console.log('Get Started clicked');
              }}>
                GET STARTED
              </button>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="contact-card">
              <h3 className="contact-title">Get in touch</h3>
              
              <div className="contact-item">
                <h5 className="contact-label">Agartala(HQ):</h5>
                <p className="contact-text">
                  5TH FLOOR, STPI, IT BHAVAN, ITI ROAD, AGARTALA,<br/>
                  West Tripura, Tripura, 799006
                </p>
              </div>
              
              <div className="contact-item">
                <h5 className="contact-label">Email:</h5>
                <div className="email-links">
                  <a href="mailto:support@talkengglobal.com" className="email-link">
                    support@talkengglobal.com
                  </a>
                  <span className="email-separator"> / </span>
                  <a href="mailto:info@talkengglobal.com" className="email-link">
                    info@talkengglobal.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQThirdPart;