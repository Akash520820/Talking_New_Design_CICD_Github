import "./ApplyAsTutorFirstPart.css";
import lmsVideo from "../Photo & Videos/lmsVideo.mp4";


function ApplyAsTutorFirstPart() {
  const benefits = [
    {
      icon: "💰",
      title: "Flexible Income",
      description: "Earn money on your own schedule"
    },
    {
      icon: "🕒",
      title: "Work From Home",
      description: "Teach from anywhere, anytime"
    },
    {
      icon: "📚",
      title: "Share Knowledge",
      description: "Help students achieve their goals"
    }
  ];

  return (
    <>
      <div className="container-fluid TutorContainer">
        <div className="container">
          <div className="row row1">
            <div className="col-lg-6 tutor-content">
              <h1 className="h1heading">
                SEARCHING FOR <br />
                YOUR <span className="highlight">DREAM JOB</span>?
              </h1>
              
              <p className="tutor-subtitle">
                Transform your expertise into income. Join thousands of tutors who are already earning while making a difference in students' lives.
              </p>

              <div className="benefits-list">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="benefit-item"
                    style={{ '--delay': `${0.4 + index * 0.1}s` }}
                  >
                    <div className="benefit-icon">
                      {benefit.icon}
                    </div>
                    <div className="benefit-text">
                      <h4 className="benefit-title">{benefit.title}</h4>
                      <p className="benefit-desc">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="earning-highlight">
                <div className="earning-amount">₹100,000/Month**</div>
                <div className="earning-text">Average Monthly Earning Potential</div>
              </div>

              <button className="btn row1endbutton">
                <span>BECOME A TUTOR</span>
                <span className="button-icon">→</span>
              </button>
            </div>
            
            <div className="col-lg-6">
              <div className="video-container">
                <div className="video-wrapper">
                  <video
                    className="tutor-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src={lmsVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="video-overlay">
                    <span className="live-dot"></span>
                    <span>Live Sessions</span>
                  </div>
                  <div className="video-glow"></div>
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