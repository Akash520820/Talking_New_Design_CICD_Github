import React from "react";
import "./KeyFeatures.css";
import { SiBookstack } from "react-icons/si";
import { FaFileVideo } from "react-icons/fa6";
import { FaRegFileVideo } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { SiImessage } from "react-icons/si";
import { FaGifts } from "react-icons/fa6";
import { FcAlarmClock } from "react-icons/fc";
import { LuUsers } from "react-icons/lu";
import { CiCalendarDate } from "react-icons/ci";
import { GiAudioCassette } from "react-icons/gi";
import { CiMobile4 } from "react-icons/ci";
import { GiLoveMystery } from "react-icons/gi";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { ImMobile } from "react-icons/im";
import { GiMoon } from "react-icons/gi";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";

function KeyFeatures() {
  const KeyFeaturesData = [
    {
      id: 1,
      icon: <SiBookstack />,
      title: "Learn English Easy",
      description: "TalkEng helps you learn English as easily as your mother tongue through a scientifically proven technique.",
    },
    {
      id: 2,
      icon: <FaFileVideo />,
      title: "1-ON-1 Live Sessions",
      description: "We understand that to become fluent in English, you need constant personal guidance.",
    },
    {
      id: 3,
      icon: <FaRegFileVideo />,
      title: "Video or Audio",
      description: "Attend classes everyday either over interactive video or audio depending on your circumstances.",
    },
    {
      id: 4,
      icon: <FaUsers />,
      title: "Expert Tutors",
      description: "TalkEng makes sure you get proper education, that's why only verified expert tutors are accepted.",
    },
    {
      id: 5,
      icon: <SiImessage />,
      title: "Chat With Tutors",
      description: "Got a query? Just message your favourite tutors through TalkEng mobile app and get your answer.",
    },
    {
      id: 6,
      icon: <FaGifts />,
      title: "First Class is FREE!",
      description: "Still concerned over value? No problem! This is why TalkEng gives you your first class for FREE!",
    },
    {
      id: 7,
      icon: <FcAlarmClock />,
      title: "Convenient Timing",
      description: "Busy schedule? Not an issue here. You can choose your class at different convenient times everyday.",
    },
    {
      id: 8,
      icon: <LuUsers />,
      title: "New Tutors Daily",
      description: "Bored of attending class with one tutor? Don't worry. At TalkEng you can choose a new tutor everyday.",
    },
    {
      id: 9,
      icon: <CiCalendarDate />,
      title: "Cancel Sessions",
      description: "TalkEng gives you the option to cancel booked sessions anytime before 20 mins of starting and get refunded.",
    },
    {
      id: 10,
      icon: <GiAudioCassette />,
      title: "Public Speaking",
      description: "Join Public Speaking Discussions everyday for FREE. This helps you build confidence while talking to new people.",
    },
    {
      id: 11,
      icon: <CiMobile4 />,
      title: "One For All",
      description: "Access TalkEng from anywhere through any Android smartphone and access the same account simultaneously.",
    },
    {
      id: 12,
      icon: <GiLoveMystery />,
      title: "Follow / Favourite",
      description: "Like a tutor a lot? Now, you can follow and mark them as your favourites which will reflect in your dashboard.",
    },
    {
      id: 13,
      icon: <FaHandHoldingDollar />,
      title: "Income Source",
      description: "TalkEng provides a massive earning platform for anyone with great English fluency and tutoring skills.",
    },
    {
      id: 14,
      icon: <FaRegShareFromSquare />,
      title: "Refer & Earn",
      description: "Got a friend? Share your unique promocode with your friends & get great discounts.",
    },
    {
      id: 15,
      icon: <ImMobile />,
      title: "Institution Classes",
      description: "Now, any English institution can conduct their online sessions through TalkEng app for absolutely FREE!",
    },
    {
      id: 16,
      icon: <GiMoon />,
      title: "Dark/Light Mode",
      description: "TalkEng really cares for your eyes. That's why TalkEng gives you the option to switch between dark/light modes.",
    },
    {
      id: 17,
      icon: <IoCloudDownloadSharp />,
      title: "Pocket Friendly",
      description: "TalkEng is approx 5X cheaper than any other live English speaking platform while providing the best value.",
    },
    {
      id: 18,
      icon: <FaHeadphones />,
      title: "24/7 Support",
      description: "Facing problems? Worry not, TalkEng's 24x7 support has got you covered. Contact us anytime.",
    },
  ];

  return (
    <section className="key-features-section">
      <div className="features-container">
        <div className="features-header">
          <div className="section-badge">
            <span className="badge-icon">⚡</span>
            <span>Key Features</span>
          </div>
          
          <h1 className="section-title">
            Why Choose <span className="highlight">TalkEng</span>?
          </h1>
          
          <p className="section-subtitle">
            Discover the revolutionary features that make <span className="app-name">TalkEng</span> the 
            most effective English learning platform in the world. Built with cutting-edge technology 
            and proven teaching methodologies.
          </p>
          
          <div className="rating-section">
            <div className="rating-container">
              <div className="stars-container">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
              </div>
              <span className="rating-text">Trusted by 50,000+ learners worldwide</span>
            </div>
          </div>
        </div>

        <div className="features-grid">
          {KeyFeaturesData.map((feature, index) => (
            <div 
              key={feature.id} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="card-icon-container">
                <span className="card-icon">{feature.icon}</span>
              </div>
              
              <h3 className="card-title">{feature.title}</h3>
              
              <p className="card-description">{feature.description}</p>
              
              <button className="card-button">
                <span>Learn More</span>
                <FaArrowRight className="button-arrow" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KeyFeatures;