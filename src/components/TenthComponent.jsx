import React from "react";
import "./TenthComponent.css";

function TenthComponent() {
  const achievementCards = [
    {
      id: 1,
      imageUrl: "https://talkengglobal.com/TalkEng-Gallery/images/Achievement_google.png",
      title: "Top 100 Startup at Google",
      altText: "Google Top 100 Startup Achievement"
    },
    {
      id: 2,
      imageUrl: "https://talkengglobal.com/TalkEng-Gallery/images/Achievement_talkeng_list.png",
      title: "Best Mobile App 2022",
      altText: "Best Mobile App 2022 Award"
    },
    {
      id: 3,
      imageUrl: "https://talkengglobal.com/TalkEng-Gallery/images/chunauti.png",
      title: "Selected at Chunauti 2.0",
      altText: "Chunauti 2.0 Selection Achievement"
    },
    {
      id: 4,
      imageUrl: "https://talkengglobal.com/TalkEng-Gallery/images/iimneedp.png",
      title: "Selected for NEEDP",
      altText: "NEEDP Program Selection Achievement"
    }
  ];

  const handleViewAllClick = () => {
    // Add your navigation logic here
    console.log("View All Achievements clicked");
  };

  const handleImageError = (e) => {
    // Fallback image or hide image on error
    e.target.style.display = 'none';
  };

  return (
    <section className="tenth-component">
      <div className="tenth-container">
        {/* Header Section */}
        <header className="tenth-header">
          <h1 className="tenth-title">
            <span className="text-danger">Explore</span>{" "}
            <span className="text-primary">Our</span>{" "}
            <span className="text-dark">Achievements</span>
          </h1>
          <h2 className="tenth-subtitle">TalkEng Achievements</h2>
        </header>

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {achievementCards.map((achievement) => (
            <article key={achievement.id} className="achievement-card">
              <div className="card-image-container">
                <img
                  src={achievement.imageUrl}
                  alt={achievement.altText}
                  className="card-image"
                  loading="lazy"
                  onError={handleImageError}
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">{achievement.title}</h3>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button 
            className="view-all-btn" 
            onClick={handleViewAllClick}
            aria-label="View all achievements"
          >
            View All Achievements
          </button>
        </div>
      </div>
    </section>
  );
}

export default TenthComponent;