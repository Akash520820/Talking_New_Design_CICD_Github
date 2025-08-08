import React, { useState, useEffect } from 'react';
import './FourthContent.css';

function FourthContent() {
  const [screenSize, setScreenSize] = useState('large');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setScreenSize('large');
      } else if (window.innerWidth >= 768) {
        setScreenSize('medium');
      } else {
        setScreenSize('mobile');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const courseData = [
    {
      id: 1,
      imageurl:
        "https://talkengglobal.com/assets/images/spoken_english_and_personality_development_course.jpg",
      coursename: "Spoken English and Personality Development Program",
      coursedescription:
        "Designed for best value, this combo pack is specially crafted for you. ENROLL NOW! for the best value",
      rating: "4.0",
    },
    {
      id: 2,
      imageurl:
        "https://talkengglobal.com/assets/images/English%20course%20for%20class%201%20and%202.webp",
      coursename: "English Mastery Program",
      coursedescription:
        "We are excited to introduce you to TalkEng's English Mastery Program, specially designed for students in...",
      rating: "4.2",
    },
    {
      id: 3,
      imageurl:
        "https://talkengglobal.com/assets/images/English%20course%20for%20class%203,4%20and%205.webp",
      coursename: "English Enrichment Program",
      coursedescription:
        "The English Enrichment Program for classes 3-5 is a comprehensive language course aimed at...",
      rating: "4.3",
    },
    {
      id: 4,
      imageurl:
        "https://talkengglobal.com/assets/images/English%20course%20for%20class%206,7%20and%208.webp",
      coursename: "English for Academic Success",
      coursedescription:
        "In this curriculum students from 6 to 8 to a rigorous curriculum, students will strengthen their reading...",
      rating: "4.5",
    },
  ];

  return (
    <section className={`special-courses-section ${screenSize}-screen`}>
      {/* Header Area */}
      <div className="course-header-wrapper">
        <div className="course-title-area">
          {screenSize === 'mobile' ? (
            <>
              <h2 className="primary-heading mobile-heading">
                <span className="accent-coral">Special</span>{" "}
                <span className="accent-emerald">Courses</span>
              </h2>
              <h2 className="primary-heading mobile-heading">
                <span className="accent-dark">For Your Learning</span>
              </h2>
            </>
          ) : (
            <>
              <h2 className="primary-heading">
                <span className="accent-coral">Special</span>{" "}
                <span className="accent-emerald">Courses</span>{" "}
                <span className="accent-dark">To Meet Your</span>
              </h2>
              <h2 className="primary-heading">
                <span className="accent-dark">Specific</span>{" "}
                <span className="accent-coral">Learning Needs</span>
              </h2>
            </>
          )}
        </div>
        <h3 className="section-tagline">
          <span className="tagline-decoration">•</span>
          SPECIAL COURSES
          <span className="tagline-decoration">•</span>
        </h3>
      </div>

      {/* Course Cards Area */}
      <div className="course-cards-wrapper">
        <div className={`course-cards-grid ${screenSize}-grid`}>
          {courseData.map((course, index) => (
            <div
              key={course.id}
              className={`single-course-card ${screenSize}-card`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Course Image Section */}
              <div className="course-image-wrapper">
                <img
                  src={course.imageurl}
                  className="course-thumbnail"
                  alt={course.coursename}
                  loading="lazy"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <span className="course-category">English Course</span>
                  </div>
                </div>
              </div>
              
              {/* Course Details Section */}
              <div className="course-info-container">
                <div className="course-header-info">
                  <h5 className="course-heading">
                    {course.coursename}
                  </h5>
                  <div className="course-meta">
                    <span className="course-duration">12 weeks</span>
                    <span className="course-level">Beginner</span>
                  </div>
                </div>
                
                <p className="course-summary">
                  {course.coursedescription}
                </p>
                
                {/* Course Footer with Rating and CTA */}
                <div className="course-actions-bar">
                  <div className="rating-section">
                    <span className="course-rating-tag">
                      ⭐ {course.rating}
                    </span>
                    <span className="rating-count">(124)</span>
                  </div>
                  <button className="course-enroll-button">
                    {screenSize === 'mobile' ? 'Enroll' : 'Enroll Now'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses CTA */}
        <div className="view-all-wrapper">
          <button className="view-all-courses-btn">
            <span className="btn-textCourse">View All Courses</span>
            <span className="btn-icon">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default FourthContent;