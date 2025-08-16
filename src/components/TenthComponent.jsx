import "./TenthComponent.css";

function TenthComponent() {
  // Array of achievement data - you can replace these with your actual image paths
  const achievements = [
    {
      id: 1,
      image: "/path/to/tenthcomponentpic1.jpg", // Replace with your actual image path
      title: "Achievement One",
      description: "Description of the first major achievement and its impact on our organization's growth."
    },
    {
      id: 2,
      image: "/path/to/tenthcomponentpic2.jpg", // Replace with your actual image path
      title: "Achievement Two", 
      description: "Description of the second significant milestone and how it shaped our journey forward."
    },
    {
      id: 3,
      image: "/path/to/tenthcomponentpic3.jpg", // Replace with your actual image path
      title: "Achievement Three",
      description: "Description of the third remarkable accomplishment and its contribution to our success."
    },
    {
      id: 4,
      image: "/path/to/tenthcomponentpic4.jpg", // Replace with your actual image path
      title: "Achievement Four",
      description: "Description of the fourth outstanding achievement and its lasting impact on our mission."
    }
  ];

  return (
    <section className="tenth-achievements-section">
      <div className="tenth-achievements-container">
        {/* Header */}
        <div className="tenth-achievements-header">
          <h2 className="tenth-achievements-title">
            Explore <span className="tenth-title-highlight">Our</span>{" "}
            Achievements
          </h2>
          <p className="tenth-achievements-subtitle">TAKING ACHIEVEMENTS</p>
        </div>
        
        {/* Cards Grid */}
        <div className="tenth-cards-grid">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="tenth-card">
              <div className="tenth-card-image-container">
                <img 
                  src={achievement.image} 
                  className="tenth-card-image" 
                  alt={achievement.title}
                />
                <div className="tenth-card-overlay">
                  <div className="tenth-card-overlay-content">
                    <span className="tenth-view-more">View More</span>
                  </div>
                </div>
              </div>
              <div className="tenth-card-body">
                <h5 className="tenth-card-title">{achievement.title}</h5>
                <p className="tenth-card-text">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TenthComponent;