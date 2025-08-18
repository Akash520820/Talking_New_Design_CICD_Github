import { useState } from "react";
import "./FAQSecondPart.css";

function FAQSecondPart() {
  const [activeVideo, setActiveVideo] = useState(null);
  
  const videos = {
    download: {
      id: 'vYUG7Fhe4_M',
      thumbnail: 'https://i.ytimg.com/vi/vYUG7Fhe4_M/sddefault.jpg',
      title: 'How Do I Download TalkEng And Get Started?',
      description: 'This tutorial explains how you can download TalkEng on your devices and launch the application.'
    },
    registration: {
      id: '-UyXq8PBFaM',
      thumbnail: 'https://i.ytimg.com/vi/-UyXq8PBFaM/maxresdefault.jpg',
      title: 'How Do I Sign In And Register As A Learner Or A Tutor?',
      description: 'This tutorial explains how you can sign up and register on TalkEng as either a learner or a tutor to start your journey.'
    }
  };

  const handleVideoClick = (videoKey) => {
    setActiveVideo(videoKey);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  const renderVideoPlayer = (videoKey) => {
    const video = videos[videoKey];
    const isActive = activeVideo === videoKey;
    
    if (isActive) {
      return (
        <div className="video-player-container">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button className="close-video-btn" onClick={closeVideo}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      );
    }

    return (
      <div 
        className="video-placeholder"
        onClick={() => handleVideoClick(videoKey)}
      >
        <img 
          src={video.thumbnail}
          alt={`${video.title} Thumbnail`}
          className="video-thumbnail"
        />
        <div className="video-overlay">
          <div className="play-button">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="30" cy="30" r="30" fill="#FF4444" />
              <circle
                cx="30"
                cy="30"
                r="25"
                fill="#FFFFFF"
                fillOpacity="0.1"
              />
              <path d="M25 20L40 30L25 40V20Z" fill="#FFFFFF" />
            </svg>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="talkeng-download-container">
              <div className="content-wrapper">
                <h1 className="main-title">
                  {videos.download.title}
                </h1>

                <p className="subtitle">
                  {videos.download.description}
                </p>

                <div className="video-container">
                  {renderVideoPlayer('download')}
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 col-sm-12">
            <div className="talkeng-download-container">
              <div className="content-wrapper">
                <h1 className="main-title">
                  {videos.registration.title}
                </h1>

                <p className="subtitle">
                  {videos.registration.description}
                </p>

                <div className="video-container">
                  {renderVideoPlayer('registration')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQSecondPart;