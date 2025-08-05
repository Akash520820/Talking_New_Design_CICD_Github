import React from 'react';
import './FourthContent.css';

function FourthContent() {
  const CardContent2 = [
    {
      id: 1,
      imageurl:
        "https://talkengglobal.com/assets/images/spoken_english_and_personality_development_course.jpg",
      coursename: "Spoken English and Personality Development Program",
      coursedescription:
        "Designed for best value, this combo pack is specially crafted for you. ENROLL NOW! for the best value",
      raiting: "4.0",
    },
    {
      id: 2,
      imageurl:
        "https://talkengglobal.com/assets/images/English%20course%20for%20class%201%20and%202.webp",
      coursename: "English Mastery Program",
      coursedescription:
        "We are excited to introduce you to TalkEng's English Mastery Program, specially designed for students in...",
      raiting: "4.2",
    },
    {
      id: 3,
      imageurl:
        "https://talkengglobal.com/assets/images/English%20course%20for%20class%203,4%20and%205.webp",
      coursename: "English Enrichment Program",
      coursedescription:
        "The English Enrichment Program for classes 3-5 is a comprehensive language course aimed at...",
      raiting: "4.3",
    },
    {
      id: 4,
      imageurl:
        "https://talkengglobal.com/assets/images/English%20course%20for%20class%206,7%20and%208.webp",
      coursename: "English for Academic Success",
      coursedescription:
        "In this curriculum students from 6 to 8 to a rigorous curriculum, students will strengthen their reading...",
      raiting: "4.5",
    },
  ];

  return (
    <div className="courses-section">
      {/* Header Section */}
      <div className="header-container">
        <div className="title-section">
          <h2 className="main-title">
            <span className="coral">Special</span>{" "}
            <span className="blue">Courses</span>{" "}
            <span className="dark">To Meet Your</span>
          </h2>
          <h2 className="main-title">
            <span className="dark">Specific</span>{" "}
            <span className="coral">Learning Needs</span>
          </h2>
        </div>
        <h3 className="subtitle">
          SPECIAL COURSES
        </h3>
      </div>

      {/* Cards Section */}
      <div className="cards-container">
        <div className="cards-grid">
          {CardContent2.map((item) => (
            <div
              key={item.id}
              className="course-card"
            >
              {/* Image Container */}
              <div className="card-image-container">
                <img
                  src={item.imageurl}
                  className="card-image"
                  alt={item.coursename}
                />
              </div>
              
              {/* Card Content */}
              <div className="card-content">
                <h5 className="card-title">
                  {item.coursename}
                </h5>
                <p className="card-description">
                  {item.coursedescription}
                </p>
                
                {/* Rating and Button */}
                <div className="card-footer">
                  <span className="rating-badge">
                    ⭐ {item.raiting}
                  </span>
                  <button className="enroll-btn">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="view-all-container">
          <button className="view-all-btn">
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
}

export default FourthContent;