import React from 'react';
import './ApplyAsTutorHowToApply.css';

function ApplyAsTutorHowToApply() {
  const applicationSteps = [
    {
      id: 1,
      stepNumber: "STEP-1",
      title: "Download TalkEng From Google Play Store & SignUp as a Tutor.",
      icon: (
        <svg className="step-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      )
    },
    {
      id: 2,
      stepNumber: "STEP-2",
      title: "Create a 2-mins Intro Video, Speaking in English & Following the Guidelines.",
      icon: (
        <svg className="step-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/>
        </svg>
      )
    },
    {
      id: 3,
      stepNumber: "STEP-3",
      title: "Watch The Full Training Video Carefully and its Mandatory.",
      icon: (
        <svg className="step-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
        </svg>
      )
    },
    {
      id: 4,
      stepNumber: "STEP-4",
      title: "Attend Demo Classes with the TalkEng team and Wait For Approval.",
      icon: (
        <svg className="step-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-6h3v-4h2c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.1-.45 2.1-1.17 2.83L15 12.83V18h-2v-3h-3v3H4zm14-8.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
        </svg>
      )
    },
    {
      id: 5,
      stepNumber: "STEP-5",
      title: "If Approved, Start Your Journey as a Tutor at TalkEng as a Basic Tutor.",
      icon: (
        <svg className="step-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="how-to-apply-section">
      <div className="container">
        <h2 className="section-title">HOW TO APPLY?</h2>
        
        <div className="row justify-content-center">
          {applicationSteps.map((step, index) => (
            <div 
              key={step.id} 
              className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4 step-connector"
            >
              <div className="step-card h-110">
                <div>
                  <div className="step-icon-container">
                    {step.icon}
                  </div>
                  <div className="step-number">{step.stepNumber}</div>
                  <h5 className="step-title">{step.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Optional Call to Action */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <button 
              className="btn btn-primary btn-lg px-5 py-3"
              style={{
                background: 'linear-gradient(135deg, #4285f4, #34a853)',
                border: 'none',
                borderRadius: '50px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: '0 8px 25px rgba(66, 133, 244, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 12px 35px rgba(66, 133, 244, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 25px rgba(66, 133, 244, 0.3)';
              }}
            >
              Start Your Application
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApplyAsTutorHowToApply;