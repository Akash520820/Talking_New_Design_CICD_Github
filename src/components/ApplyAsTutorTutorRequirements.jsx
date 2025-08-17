import React from 'react';
import './ApplyAsTutorTutorRequirements.css';

const ApplyAsTutorTutorRequirements = () => {
  return (
    <section className="tutor-requirements-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
            <div className="content-wrapper">
              <h1 className="main-title">
                Things To Keep In Mind
                <br />
                <span className="highlight-text">for TalkEng Tutors</span>
              </h1>
              <p className="description">
                While conducting classes in TalkEng, keep these four things in mind as they 
                will directly hinder the quality of your classes
              </p>
              <button className="btn-become-tutor">
                <span className="play-icon">▷</span>
                BECOME A TUTOR
                <span className="arrow-icon">→</span>
              </button>
            </div>
          </div>

          {/* Right Grid */}
          <div className="col-lg-6 col-md-12">
            <div className="requirements-grid">
              {/* Devices Card */}
              <div className="requirement-card devices-card">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 21h8" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 17v4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="card-title">DEVICES</h3>
                <p className="card-description">
                  Tutor should have either a Smartphone or Tablet with TalkEng installed.
                </p>
              </div>

              {/* Stable Internet Card */}
              <div className="requirement-card internet-card">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="card-title">STABLE INTERNET</h3>
                <p className="card-description">
                  TalkEng classes are conducted live online. Therefore, a good internet 
                  connection is highly recommended for cleaner and richer conversations.
                </p>
              </div>

              {/* Headset Card */}
              <div className="requirement-card headset-card">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" stroke="currentColor" strokeWidth="2"/>
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="card-title">HEADSET</h3>
                <p className="card-description">
                  Use either a headphone or a earphone with a built-in mic for 
                  stable audio input and output.
                </p>
              </div>

              {/* Noise Free Zone Card */}
              <div className="requirement-card noise-free-card">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M23 9l-6 6" stroke="currentColor" strokeWidth="2"/>
                    <path d="M17 9l6 6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="card-title">NOISE FREE ZONE</h3>
                <p className="card-description">
                  Ensure you are in a silent and well lit environment with no noise or 
                  distraction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyAsTutorTutorRequirements;