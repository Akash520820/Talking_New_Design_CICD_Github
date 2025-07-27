import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css'
import React, { useState, useEffect } from 'react';
import { GiClockwork } from "react-icons/gi";
import { FaUserAstronaut } from "react-icons/fa";
import { CiMobile4 } from "react-icons/ci";
import { HiUserGroup } from "react-icons/hi";
import { FaRegFileVideo } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";

function Card() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const CardsContent = [
      {
        id: 1,
        title: "Your Busy Schedule Is Not A Problem",
        icon: <GiClockwork />,
        description: "Busy schedule? Not an issue here. You can choose your class at different convenient times everyday.",
        readMore: "Read more..."
      },
      {
        id: 2,
        title: "Learn From New Tutors Everyday",
        icon: <FaUserAstronaut />,
        description: "Bored of attending class with one tutor? Don't worry. At TalkEng you can choose a new tutor everyday.",
        readMore: "Read more..."
      },
      {
        id: 3,
        title: "One For All",
        icon: <CiMobile4 />,
        description: "Access TalkEng from anywhere through any Android smartphone and access the same account simultaneously.",
        readMore: "Read more..."
      },
      {
        id: 4,
        title: "Guided Public Speaking For FREE",
        icon: <HiUserGroup />,
        description: "Join Guided Public Speaking everyday for FREE. This helps you build confidence while talking to new people.",
        readMore: "Read more..."
      },
      {
        id: 5,
        title: "1-ON-1 Audio/Video Live Session",
        icon: <FaRegFileVideo />,
        description: "We understand that to become fluent in English, you need some constant personal guidance.",
        readMore: "Read more..."
      },
      {
        id: 6,
        title: "Get Your First Class For FREE",
        icon: <FaAward />,
        description: "Still concerned over value? No problem! This is why TalkEng gives you, your first class for FREE!",
        readMore: "Read more..."
      }
    ];
  
    // Auto-slideshow effect - moves to next slide every 2 seconds
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => 
            prevIndex === CardsContent.length - 1 ? 0 : prevIndex + 1
          );
        }, 2000); // Change slide every 2 seconds
    
        return () => clearInterval(interval); // Cleanup on unmount
      }, [CardsContent.length]);
    
      const goToSlide = (index) => {
        setCurrentIndex(index);
      };
    
      // Function to get visible cards for different screen sizes
      const getVisibleCards = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1200) {
          // Large screens: show 3 cards
          const cards = [];
          for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % CardsContent.length;
            cards.push({
              ...CardsContent[index],
              position: i,
              isCenter: i === 1
            });
          }
          return cards;
        } else if (screenWidth >= 768) {
          // Medium screens: show 2 cards
          const cards = [];
          for (let i = 0; i < 2; i++) {
            const index = (currentIndex + i) % CardsContent.length;
            cards.push({
              ...CardsContent[index],
              position: i,
              isCenter: i === 0
            });
          }
          return cards;
        } else {
          // Small screens: show 1 card
          return [{
            ...CardsContent[currentIndex],
            position: 0,
            isCenter: true
          }];
        }
      };
  return (
    <>
    <div className='container-fluid slideshow-container'>
        <div className="slideshow-wrapper">
          {/* Cards Container */}
          <div className="cards-container">
            {getVisibleCards().map((card, index) => (
              <div 
                key={`${card.id}-${index}`} 
                className={`card-slide ${card.isCenter ? 'center-card' : ''}`}
              >
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title crdtitle text-center">{card.title}</h5>
                    <h1 className="card-subtitle text-center">{card.icon}</h1>
                    <hr className="my-4 border border-dark border-1 opacity-80" />
                    <p className="card-text text-center">
                      {card.description}
                    </p>
                    <div className="text-center">
                      <button className="btn text-primary">{card.readMore}</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Dots Indicator */}
        <div className="dots-container">
          {CardsContent.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
     </div>
    </>
  );
}

export default Card;
