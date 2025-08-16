import React, { useState, useEffect } from 'react';
import './EightComponent.css';

const EightComponent = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.eight-component-testimonials-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      id: 1,
      type: "Testimonial By Miss Supriya",
      name: "Miss Supriya",
      badge: "S",
      videoId: "60uowA9z2uU",
      videolink: "https://www.youtube.com/embed/60uowA9z2uU?si=ET7utWXfxixakebK"
    },
    {
      id: 2,
      type: "Ms. Reema's Success Story",
      name: "Ms. Reema",
      badge: "R",
      videoId: "zx-DLOwPzE0",
      videolink: "https://www.youtube.com/embed/zx-DLOwPzE0?si=ZBIM-TnKosPufPFj"
    },
    {
      id: 3,
      type: "Voice Of Aurangabad",
      name: "Prateek Kumar",
      badge: "P",
      videoId: "F-i__KdAvgk",
      videolink: "https://www.youtube.com/embed/F-i__KdAvgk?si=3kONNSeS4SMxY885"
    },
    {
      id: 4,
      type: "Voice of Tripura",
      name: "Aman Singh",
      location: "Tripura",
      badge: "A",
      videoId: "Ky_0yFGU6dM",
      videolink: "https://www.youtube.com/embed/Ky_0yFGU6dM?si=FX-H7oJiw-dTO0Ar"
    },
    {
      id: 5,
      type: "Learner Testimonial",
      name: "Subham Sharma",
      badge: "S",
      videoId: "8k4RMCaGpxQ",
      videolink: "https://www.youtube.com/embed/8k4RMCaGpxQ?si=LbYV-8BlM9pr3roG"
    },
    {
      id: 6,
      type: "Learner Testimonial",
      name: "Senion Debbarna",
      badge: "S",
      videoId: "D-o4gKcJSOA",
      videolink: "https://www.youtube.com/embed/D-o4gKcJSOA?si=Qmw51Apfm7mXAqWV"
    },
    {
      id: 7,
      type: "Learner Testimonial",
      name: "Yuvraj Singh Jhala",
      badge: "Y",
      videoId: "xBbNBuNh53g",
      videolink: "https://www.youtube.com/embed/xBbNBuNh53g?si=pPK9soH4refkcMKx"
    },
    {
      id: 8,
      type: "Learner Testimonial",
      name: "Sanju",
      badge: "S",
      videoId: "9B0Kyz4fzIQ",
      videolink: "https://www.youtube.com/embed/9B0Kyz4fzIQ?si=Za-kn2awN3XpN-ra"
    }
  ];

  const clients = [
    { id: 1, name: "Infosys", logoImage: "e1.jpg", category: "Technology" },
    { id: 2, name: "Startup Tripura", logoImage: "e2.jpg", category: "Incubator" },
    { id: 3, name: "VAC", logoImage: "e3.jpg", category: "Consulting" },
    { id: 4, name: "Supreme Incubator", logoImage: "e4.jpg", category: "Incubator" },
    { id: 5, name: "Innovation Hub", logoImage: "e5.jpg", category: "Technology" }
  ];

  const handleVideoToggle = (testimonialId) => {
    setPlayingVideo(playingVideo === testimonialId ? null : testimonialId);
  };

  return (
    <div className="eight-component-wrapper">
      {/* Testimonials Section */}
      <section className={`eight-component-testimonials-section ${isVisible ? 'eight-component-animate-in' : ''}`}>
        <div className="eight-component-container">
          <div className="eight-component-section-header">
            <h2 className="eight-component-section-title">
              Explore <span className="eight-component-highlight-blue">Testimonials</span> From Our
              <br />
              <span className="eight-component-highlight-red">Learners</span>
            </h2>
          </div>

          <div className="eight-component-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`eight-component-testimonial-card eight-component-card-${index % 4}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="eight-component-card-inner">
                  {playingVideo === testimonial.id ? (
                    <div className="eight-component-video-container">
                      <iframe
                        src={`${testimonial.videolink}&autoplay=1`}
                        title={`${testimonial.name} testimonial`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="eight-component-testimonial-video"
                      />
                      <button 
                        className="eight-component-close-video-btn"
                        onClick={() => setPlayingVideo(null)}
                        aria-label="Close video"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div 
                      className="eight-component-video-thumbnail-container" 
                      onClick={() => handleVideoToggle(testimonial.id)}
                    >
                      <img 
                        src={`https://img.youtube.com/vi/${testimonial.videoId}/maxresdefault.jpg`}
                        alt={`${testimonial.name} testimonial thumbnail`}
                        className="eight-component-video-thumbnail"
                        loading="lazy"
                      />
                      <div className="eight-component-play-overlay">
                        <div className="eight-component-play-button">
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="eight-component-card-content">
                    <h5 className="eight-component-testimonial-type">{testimonial.type}</h5>
                    <div className="eight-component-testimonial-info">
                      <span className="eight-component-testimonial-name">{testimonial.name}</span>
                      {testimonial.location && (
                        <>
                          <span className="eight-component-location-separator">•</span>
                          <span className="eight-component-testimonial-location">{testimonial.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="eight-component-clients-section">
        <div className="eight-component-container">
          <div className="eight-component-section-header">
            <h2 className="eight-component-clients-title">
              Our Recent <span className="eight-component-highlight-red">Clients</span>
              <br />
              & <span className="eight-component-highlight-blue">Partners</span>
            </h2>
          </div>

          <div className="eight-component-clients-container">
            <div className="eight-component-clients-grid">
              {clients.map((client, index) => (
                <div 
                  key={client.id} 
                  className="eight-component-client-card"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="eight-component-client-inner">
                    <div className="eight-component-client-logo-container">
                      <img 
                        src={`./src/Photo & Videos/${client.logoImage}`} 
                        alt={`${client.name} logo`}
                        className="eight-component-client-logo-image"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="eight-component-logo-fallback" style={{display: 'none'}}>
                        {client.name.charAt(0)}
                      </div>
                    </div>
                    <div className="eight-component-client-info">
                      <h4 className="eight-component-client-name">{client.name}</h4>
                      <span className="eight-component-client-category">{client.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EightComponent;