import React from 'react';
import './NinethComponent.css';

const NinethComponent = () => {
  return (
    <div className="container-fluid" style={{backgroundColor:'whitesmoke'}}>
      <section className="company-about-section">
        <div className="row justify-content-center">
            <div className="col-12 text-center mb-4">
              <div className="company-about-section-badge">
                <i className="fas fa-info-circle"></i>
                <span>About</span>
              </div>
              <h2 className="company-about-section-title">Our Company</h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-11 col-xl-10 col-xxl-9">
              <div className="company-about-content-card">
                <div className="company-about-feature-icon mb-3">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                
                <p className="company-about-paragraph">
                  Welcome to <span className="company-about-highlight-text">TalkEng Online Learning Solutions Private Limited</span>, your premier destination for online language learning. Our platform is a dedicated language learning app designed to empower you with the ability to speak confidently through communication with expert tutors. We specialize in live 1-ON-1 sessions with experienced tutors who are committed to enhancing your communication skills.
                </p>

                <p className="company-about-paragraph">
                  At TalkEng, we understand the importance of effective communication in today's globalized world. Our platform is tailored to provide <span className="company-about-highlight-text">personalized guidance</span>, ensuring that you receive targeted support to improve your spoken English proficiency. Our team of expert tutors is dedicated to creating a supportive and interactive learning environment to help you achieve your language learning goals.
                </p>

                <p className="company-about-paragraph">
                  Currently, we are proud to offer <span className="company-about-highlight-text">Spoken English courses</span> with our team of experienced tutors who bring a wealth of knowledge and expertise to guide you on your language learning journey. With TalkEng, you're not just learning a language; you're engaging in a dynamic and personalized learning experience that focuses on practical communication skills.
                </p>

                <p className="company-about-paragraph">
                  Embark on your language learning adventure with <span className="company-about-highlight-text">TalkEng</span>, where we are committed to helping you build confidence and fluency in spoken English. Download our app today and start your journey towards effective communication!
                </p>

                {/* Stats Section */}
                <div className="company-about-stats-container">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="company-about-stat-item">
                        <span className="company-about-stat-number">1000+</span>
                        <div className="company-about-stat-label">Happy Students</div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="company-about-stat-item">
                        <span className="company-about-stat-number">50+</span>
                        <div className="company-about-stat-label">Expert Tutors</div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="company-about-stat-item">
                        <span className="company-about-stat-number">95%</span>
                        <div className="company-about-stat-label">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="company-about-cta-section">
                  <button className="company-about-cta-button btn">
                    <i className="fas fa-mobile-alt me-2"></i>
                    Download Our App Today
                  </button>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default NinethComponent;
