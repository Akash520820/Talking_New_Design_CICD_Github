import React from "react";
import "./SecondContent.css";

function SecondContent() {
  return (
    <section className="goals-section">
      <div className="container">
        <div className="goals-header">
          <div className="badge-container">
            <div className="goals-badge">
              <span className="badge-icon">🎯</span>
              <span>Your Journey</span>
            </div>
          </div>
          
          <h2 className="goals-title">
            Start With Your <span className="highlight">Goals</span>
          </h2>
          
          <p className="goals-description">
            We recommend personalized lessons, engaging topics, and interactive activities 
            to help you reach your learning objectives. You choose the path that excites you 
            and makes meaningful progress toward your destination.
          </p>
          
          <button className="cta-button">
            <span className="btn-icon">🚀</span>
            <span>Start Learning</span>
            <div className="button-glow"></div>
          </button>
        </div>

        <div className="goals-content">
          <div className="goals-grid">
            <div className="goals-card-wrapper">
              <div className="goals-main-card">
                <div className="card-background">
                  <div className="floating-elements">
                    <div className="float-element element-1"></div>
                    <div className="float-element element-2"></div>
                    <div className="float-element element-3"></div>
                  </div>
                </div>
                
                <div className="goals-card">
                  <div className="card-icon">
                    💡
                  </div>
                  <h3 className="card-title">
                    What Are Your
                    <br />
                    <span className="title-accent">Learning Goals?</span>
                  </h3>
                  <div className="card-decoration"></div>
                </div>
              </div>
            </div>

            <div className="image-wrapper">
              <div className="image-container">
                <div className="goals-image">
                  <div style={{padding: '20px', textAlign: 'center'}}>
                    <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🎓</div>
                    <div>Students Learning Together</div>
                    <div style={{fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem'}}>
                      Image placeholder - replace with your actual image
                    </div>
                  </div>
                </div>
                <div className="image-overlay">
                  <div className="overlay-content">
                    <div className="stat-item">
                      <span className="stat-number">10K+</span>
                      <span className="stat-label">Happy Learners</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">95%</span>
                      <span className="stat-label">Success Rate</span>
                    </div>
                  </div>
                </div>
                <div className="image-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondContent;