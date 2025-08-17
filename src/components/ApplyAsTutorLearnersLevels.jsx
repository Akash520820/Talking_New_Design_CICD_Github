import React from 'react';
import './ApplyAsTutorLearnersLevels.css';

function ApplyAsTutorLearnersLevels() {
  const learnerLevels = [
    {
      id: 1,
      title: "LEVEL-1",
      description: "Focus on improving the listening skills of learners, help them build confidence and engage more.",
      time: "Time: 1 Month",
      icon: (
        <svg className="level-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "LEVEL-2",
      description: "Encouraging learners to engage more in conversations and introduction to new vocabularies.",
      time: "Time: 2 Months",
      icon: (
        <svg className="level-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "LEVEL-3",
      description: "Engage learners in more complex conversations to get the learner fluent in the language.",
      time: "Time: 3 Months",
      icon: (
        <svg className="level-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "LEVEL-4",
      description: "This level will primarily focus on teaching British / American accents to the learners.",
      time: "Time: 4 Months",
      icon: (
        <svg className="level-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "LEVEL-5",
      description: "This is the final level where the learners focus on perfecting their fluency and accent.",
      time: "Time: 2 Months",
      icon: (
        <svg className="level-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="learners-levels-section">
      <div className="container">
        <h2 className="levels-section-title">5 Levels Of The Learners</h2>
        
        <div className="row justify-content-center">
          {learnerLevels.map((level, index) => (
            <div 
              key={level.id} 
              className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-8 col-12 mb-4 level-connector"
            >
              <div className="level-card h-100">
                <div className="level-icon-container">
                  {level.icon}
                </div>
                <div className="level-title">{level.title}</div>
                <p className="level-description">{level.description}</p>
                <div className="level-time">{level.time}</div>
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
                background: 'linear-gradient(135deg, #ff6b35, #4285f4)',
                border: 'none',
                borderRadius: '45px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: '0 6px 20px rgba(255, 107, 53, 0.3)',
                transition: 'all 0.3s ease',
                fontSize: '0.9rem'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 30px rgba(255, 107, 53, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 6px 20px rgba(255, 107, 53, 0.3)';
              }}
            >
              Start Learning Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApplyAsTutorLearnersLevels;