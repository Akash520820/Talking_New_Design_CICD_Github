import React, { useState, useEffect } from 'react';
import './ApplyAsTutorSecondPartgreen.css';

const ApplyAsTutorSecondPartgreen = () => {
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  // Smooth entrance animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animated counter for statistics
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentStat((prev) => (prev + 1) % 3);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const stats = [
    { number: '1000+', label: 'Active Tutors', icon: '👩‍🏫' },
    { number: '50+', label: 'Countries', icon: '🌍' },
    { number: '95%', label: 'Success Rate', icon: '📈' }
  ];

  const benefits = [
    {
      icon: '⏰',
      title: 'Flexible Schedule',
      description: 'Work when you want',
      color: '#22c55e'
    },
    {
      icon: '🌍',
      title: 'Global Impact',
      description: 'Teach worldwide',
      color: '#16a34a'
    },
    {
      icon: '💰',
      title: 'Great Earnings',
      description: 'Competitive pay',
      color: '#14532d'
    }
  ];

  return (
    <div className={`tutoring-container ${isVisible ? 'visible' : ''}`}>
      <div className="tutoring-wrapper">
        {/* Main Content Section */}
        <section className="main-content-section">
          <div className="content-area">
            <div className="premium-badge">
              <span className="badge-icon">🎓</span>
              <span className="badge-text">Join TalkEng Today</span>
            </div>
            
            <h1 className="main-heading">
              Why Become A <span className="brand-highlight">TalkEng</span><br />
              English Tutor?
            </h1>
            
            <p className="main-description">
              Transform lives through language learning while building your career as an online English tutor. 
              Join our global community of educators and make a meaningful impact worldwide!
            </p>
            
            <div className="action-buttons-container">
              <button className="primary-action-btn">
                <span className="btn-icon">📥</span>
                <span>Download Our Guide</span>
              </button>
              <button className="secondary-action-btn">
                <span>Learn More</span>
              </button>
            </div>
            
            {/* Statistics Section */}
            <div className="statistics-container">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`stat-item ${currentStat === index ? 'active' : ''}`}
                  style={{ 
                    opacity: currentStat === index ? 1 : 0.7,
                    transform: currentStat === index ? 'scale(1.05)' : 'scale(1)',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Media Section */}
        <section className="media-content-section">
          <div className="video-showcase">
            <div 
              className={`video-card ${isVideoHovered ? 'video-hovered' : ''}`}
              onMouseEnter={() => setIsVideoHovered(true)}
              onMouseLeave={() => setIsVideoHovered(false)}
            >
              <div className="video-header">
                <div className="live-status">
                  <span className="live-indicator"></span>
                  <span className="live-label">Watch Now</span>
                </div>
                <div className="video-title">
                  Learn perfect English and achieve fluency without grammar
                </div>
              </div>
              
              <div className="video-player-area2">
                <div className="video-overlay2">
                  <div className="play-control">
                    <div className="play-icon">
                      <div className="play-arrow"></div>
                    </div>
                  </div>
                  <div className="video-details">
                    <h4>TalkEng Introduction</h4>
                    <p>Discover Online Tutor Opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefits Cards */}
          <div className="benefits-container">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`benefit-card benefit-${index + 1}`}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = benefit.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                }}
              >
                <div 
                  className="benefit-icon"
                  style={{ 
                    background: `linear-gradient(135deg, ${benefit.color} 0%, ${benefit.color}dd 100%)`
                  }}
                >
                  {benefit.icon}
                </div>
                <div className="benefit-info">
                  <h5>{benefit.title}</h5>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="background-decorations">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
    </div>
  );
};

export default ApplyAsTutorSecondPartgreen;