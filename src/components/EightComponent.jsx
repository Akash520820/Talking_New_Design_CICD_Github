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

    const element = document.querySelector('.testimonials-section');
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
    <div className="testimonials-wrapper">
      {/* Testimonials Section */}
      <section className={`testimonials-section ${isVisible ? 'animate-in' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Explore <span className="highlight-blue">Testimonials</span> From Our
              <br />
              <span className="highlight-red">Learners</span>
            </h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`testimonial-card card-${index % 4}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-inner">
                  {playingVideo === testimonial.id ? (
                    <div className="video-container">
                      <iframe
                        src={`${testimonial.videolink}&autoplay=1`}
                        title={`${testimonial.name} testimonial`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="testimonial-video"
                      />
                      <button 
                        className="close-video-btn"
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
                      className="video-thumbnail-container" 
                      onClick={() => handleVideoToggle(testimonial.id)}
                    >
                      <img 
                        src={`https://img.youtube.com/vi/${testimonial.videoId}/maxresdefault.jpg`}
                        alt={`${testimonial.name} testimonial thumbnail`}
                        className="video-thumbnail"
                        loading="lazy"
                      />
                      <div className="play-overlay">
                        <div className="play-button">
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="card-content">
                    <h5 className="testimonial-type">{testimonial.type}</h5>
                    <div className="testimonial-info">
                      <span className="testimonial-name">{testimonial.name}</span>
                      {testimonial.location && (
                        <>
                          <span className="location-separator">•</span>
                          <span className="testimonial-location">{testimonial.location}</span>
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
      <section className="clients-section">
        <div className="container">
          <div className="section-header">
            <h2 className="clients-title">
              Our Recent <span className="highlight-red">Clients</span>
              <br />
              & <span className="highlight-blue">Partners</span>
            </h2>
          </div>

          <div className="clients-container">
            <div className="clients-grid">
              {clients.map((client, index) => (
                <div 
                  key={client.id} 
                  className="client-card"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="client-inner">
                    <div className="client-logo-container">
                      <img 
                        src={`./src/Photo & Videos/${client.logoImage}`} 
                        alt={`${client.name} logo`}
                        className="client-logo-image"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="logo-fallback" style={{display: 'none'}}>
                        {client.name.charAt(0)}
                      </div>
                    </div>
                    <div className="client-info">
                      <h4 className="client-name">{client.name}</h4>
                      <span className="client-category">{client.category}</span>
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