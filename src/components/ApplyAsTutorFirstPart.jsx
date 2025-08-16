import "./ApplyAsTutorFirstPart.css";
import lmsVideo from "../Photo & Videos/lmsVideo.mp4";


function ApplyAsTutorFirstPart() {
  const benefits = [
    {
      icon: "ðŸ'°",
      title: "Flexible Income",
      description: "Earn money on your own schedule"
    },
    {
      icon: "ðŸ•'",
      title: "Work From Home",
      description: "Teach from anywhere, anytime"
    },
    {
      icon: "ðŸ",
      title: "Share Knowledge",
      description: "Help students achieve their goals"
    }
  ];

  return (
    <>
      <div className="container-fluid apply-as-tutor-container">
        <div className="container">
          <div className="row apply-as-tutor-main-row">
            <div className="col-lg-6 apply-as-tutor-content">
              <h1 className="apply-as-tutor-main-heading">
                SEARCHING FOR <br />
                YOUR <span className="apply-as-tutor-highlight">DREAM JOB</span>?
              </h1>
              
              <p className="apply-as-tutor-subtitle">
                Transform your expertise into income. Join thousands of tutors who are already earning while making a difference in students' lives.
              </p>

              <div className="apply-as-tutor-benefits-list">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="apply-as-tutor-benefit-item"
                    style={{ '--delay': `${0.4 + index * 0.1}s` }}
                  >
                    <div className="apply-as-tutor-benefit-icon">
                      {benefit.icon}
                    </div>
                    <div className="apply-as-tutor-benefit-text">
                      <h4 className="apply-as-tutor-benefit-title">{benefit.title}</h4>
                      <p className="apply-as-tutor-benefit-desc">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="apply-as-tutor-earning-highlight">
                <div className="apply-as-tutor-earning-amount">â‚¹100,000/Month**</div>
                <div className="apply-as-tutor-earning-text">Average Monthly Earning Potential</div>
              </div>

              <button className="btn apply-as-tutor-cta-button">
                <span>BECOME A TUTOR</span>
                <span className="apply-as-tutor-button-icon">â†'</span>
              </button>
            </div>
            
            <div className="col-lg-6">
              <div className="apply-as-tutor-video-container">
                <div className="apply-as-tutor-video-wrapper">
                  <video
                    className="apply-as-tutor-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src={lmsVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="apply-as-tutor-video-overlay">
                    <span className="apply-as-tutor-live-dot"></span>
                    <span>Live Sessions</span>
                  </div>
                  <div className="apply-as-tutor-video-glow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default ApplyAsTutorFirstPart;