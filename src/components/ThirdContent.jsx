import "./ThirdContent.css";
import { FaUsersLine } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { LiaTrophySolid } from "react-icons/lia";
import { IoMdClock } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa";
import { TfiMobile } from "react-icons/tfi";
import { FaArrowRight } from "react-icons/fa";

function ThirdContent() {
  const servicesData = [
    {
      id: 1,
      icon: FaUsersLine,
      title: "Guided Public Speaking For FREE",
      description:
        "Join Guided Public Speaking everyday for FREE. This helps you build confidence while talking to new people.",
      color: "#3b82f6"
    },
    {
      id: 2,
      icon: FaMobileAlt,
      title: "1-ON-1 Audio/Video Live Session",
      description:
        "We understand that to become fluent in English, you need some constant personal guidance.",
      color: "#10b981"
    },
    {
      id: 3,
      icon: LiaTrophySolid,
      title: "Get Your First Class For FREE",
      description:
        "Still concerned over value? No problem! This is why TalkEng gives you, your first class for FREE!",
      color: "#f59e0b"
    },
    {
      id: 4,
      icon: IoMdClock,
      title: "Your Busy Schedule Is Not A Problem",
      description:
        "Busy schedule? Not an issue here. You can choose your class at different convenient times everyday.",
      color: "#8b5cf6"
    },
    {
      id: 5,
      icon: FaUserGraduate,
      title: "Learn From New Tutors Everyday",
      description:
        "Bored of attending class with one tutor? Don't worry. At TalkEng you can choose a new tutor everyday.",
      color: "#ef4444"
    },
    {
      id: 6,
      icon: TfiMobile,
      title: "One For All",
      description:
        "Access TalkEng from anywhere through any Android smartphone and access the same account simultaneously.",
      color: "#06b6d4"
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="hero-section">
          <div className="hero-badge">Our Services</div>
          <h1 className="hero-title">
            Why <span className="highlight">Choose</span> TalkEng
            <br />
            For Your <span className="highlight">English Journey</span>?
          </h1>
          <p className="hero-subtitle">
            Discover the unique features that make TalkEng the perfect choice for mastering English speaking skills
          </p>
        </div>
        
        <div className="services-grid">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                className="service-card" 
                key={service.id}
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div className="card-inner">
                  <div className="icon-container" style={{ '--icon-color': service.color }}>
                    <IconComponent className="service-icon" />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <button className="learn-more-btn">
                    <span>Learn More</span>
                    <FaArrowRight className="arrow-icon" />
                  </button>
                </div>
                <div className="card-glow"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ThirdContent;