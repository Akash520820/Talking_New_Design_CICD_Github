import React, { useState } from 'react';
import './SeventhContent.css';

const SeventhContent = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const packageOptions = [
    {
      id: 'trial',
      name: 'Trial Session',
      description: 'Start A Trial',
      cost: '₹99',
      regularCost: '₹149',
      actionText: 'GET STARTED',
      highlighted: false,
      icon: '⭐',
      color: 'emerald',
      serviceList: [
        { description: 'Select a tutor as per your preference', available: true },
        { description: 'Select either Basic or Premium tutor', available: true },
        { description: 'Personalized feedback and support', available: true },
        { description: 'Book International tutor', available: false },
        { description: 'Enjoy prioritized tutor booking with a unique PIN', available: false }
      ]
    },
    {
      id: 'basic',
      name: 'Basic Video Plan',
      description: 'For Every Beginners',
      cost: '₹4,970',
      regularCost: '₹7,100',
      actionText: 'GET STARTED',
      highlighted: true,
      icon: '⚡',
      color: 'orange',
      serviceList: [
        { description: 'Unlimited Validity', available: true },
        { description: 'Take Multiple Session in a Day', available: true },
        { description: 'Random tutor selection', available: true },
        { description: 'Personalized feedback and support', available: true },
        { description: 'Select a tutor as per your preference', available: false },
        { description: 'Book premium tutor', available: false },
        { description: 'Enjoy prioritized tutor booking with a unique PIN', available: false },
        { description: 'Book International tutor', available: false }
      ]
    },
    {
      id: 'premium',
      name: 'Premium Video Plan',
      description: 'Unlimited Possibilities',
      cost: '₹7,700',
      regularCost: '₹11,000',
      actionText: 'GET STARTED',
      highlighted: false,
      icon: '🛡️',
      color: 'blue',
      serviceList: [
        { description: 'All the features available on Basic Video', available: true },
        { description: 'Select a tutor as per your preference', available: true },
        { description: 'Book premium tutor', available: true },
        { description: 'Personalized feedback and support', available: true },
        { description: 'Book International tutor', available: true },
        { description: 'Enjoy prioritized tutor booking with a unique PIN', available: true },
        { description: '100% Money-Back Guarantee for 168 sessions', available: true }
      ]
    }
  ];

  const calculateSavings = (current, regular) => {
    const currentPrice = parseInt(current.replace(/[₹,]/g, ''));
    const regularPrice = parseInt(regular.replace(/[₹,]/g, ''));
    return Math.round((1 - currentPrice / regularPrice) * 100);
  };

  return (
    <div className="pricing-container">
      <div className="pricing-wrapper">
        {/* Enhanced Header */}
        <div className="header-section">
          <div className="header-badge">
            <span className="badge-icon">⚡</span>
            Pricing Plans
          </div>
          <h1 className="main-title">
            Let's find a way together
          </h1>
          <p className="subtitle">
            Specialized plans tailored to your learning journey. Choose the perfect option to unlock your potential.
          </p>
        </div>

        {/* Enhanced Cards Grid */}
        <div className="cards-grid">
          {packageOptions.map((pkg) => {
            const isHovered = hoveredCard === pkg.id;
            const savings = calculateSavings(pkg.cost, pkg.regularCost);
            
            return (
              <div
                key={pkg.id}
                className={`card-container ${pkg.highlighted ? 'featured-card' : ''}`}
                onMouseEnter={() => setHoveredCard(pkg.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Popular Badge */}
                {pkg.highlighted && (
                  <div className="popular-badge">
                    <div className="badge-content">
                      🔥 MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`
                  pricing-card 
                  ${pkg.color}-theme
                  ${isHovered ? 'hovered' : ''}
                  ${pkg.highlighted ? 'highlighted' : ''}
                `}>
                  
                  {/* Gradient Top Bar */}
                  <div className={`card-accent ${pkg.color}-gradient`}></div>
                  
                  {/* Card Header */}
                  <div className="card-header">
                    <div className={`icon-container ${pkg.color}-icon`}>
                      <span className="plan-icon">{pkg.icon}</span>
                    </div>
                    
                    <h3 className="plan-name">{pkg.name}</h3>
                    <p className={`plan-description ${pkg.color}-text`}>{pkg.description}</p>
                    
                    {/* Pricing */}
                    <div className="pricing-section">
                      <div className="price-container">
                        <span className="current-price">{pkg.cost}</span>
                        <span className="original-price">{pkg.regularCost}</span>
                      </div>
                      <div className="savings-badge">
                        <span className="savings-text">Save {savings}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="features-section">
                    <ul className="features-list">
                      {pkg.serviceList.map((service, index) => (
                        <li key={index} className="feature-item">
                          <div className={`feature-icon ${service.available ? 'available' : 'unavailable'}`}>
                            <span className="check-icon">
                              {service.available ? '✓' : '✗'}
                            </span>
                          </div>
                          <span className={`feature-text ${service.available ? '' : 'disabled'}`}>
                            {service.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <div className="button-section">
                    <button className={`action-button ${pkg.color}-button`}>
                      {pkg.actionText}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bottom-cta">
          <div className="cta-card">
            <h3 className="cta-title">
              Still have questions?
            </h3>
            <p className="cta-description">
              Our team is here to help you find the perfect plan for your learning journey.
            </p>
            <button className="support-button">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeventhContent;