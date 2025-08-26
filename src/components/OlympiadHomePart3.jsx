import React, { useState } from "react";
import "./OlympiadHomePart3.css";

function OlympiadGalleryPart3() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleSyllabusDownload = async () => {
    setIsDownloading(true);
    
    // Simulate download process
    setTimeout(() => {
      setIsDownloading(false);
      console.log("Syllabus download initiated!");
      // Add your actual download logic here
    }, 2000);
  };

  return (
    <section className="syllabus-download-section">
      <div className="syllabus-download-container-fluid">
        <div className="syllabus-download-content">
          <div className="syllabus-download-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10,9 9,9 8,9"/>
            </svg>
          </div>
          
          <h1 className="syllabus-download-title">
            Syllabus for State Level
            <span className="syllabus-download-highlight">English Olympiad 2.0</span>
          </h1>
          
          <p className="syllabus-download-description">
            Access the comprehensive syllabus for the upcoming State Level English Olympiad 2.0. 
            Get detailed insights into topics, exam patterns, marking schemes, and expert preparation strategies 
            designed to help you excel in the competition.
          </p>
          
          <button 
            className={`syllabus-download-btn ${isDownloading ? 'syllabus-download-btn-loading' : ''}`}
            onClick={handleSyllabusDownload}
            disabled={isDownloading}
          >
            <span className="syllabus-download-btn-icon">
              {isDownloading ? '⏳' : '📄'}
            </span>
            {isDownloading ? 'Preparing Download...' : 'Download Syllabus'}
            <span className="syllabus-download-btn-arrow">→</span>
          </button>
          
          <div className="syllabus-download-features">
            <div className="syllabus-download-feature-item">
              <span className="syllabus-download-feature-icon">✓</span>
              <span>Complete Topic Coverage</span>
            </div>
            <div className="syllabus-download-feature-item">
              <span className="syllabus-download-feature-icon">✓</span>
              <span>Detailed Exam Pattern</span>
            </div>
            <div className="syllabus-download-feature-item">
              <span className="syllabus-download-feature-icon">✓</span>
              <span>Expert Guidelines</span>
            </div>
            <div className="syllabus-download-feature-item">
              <span className="syllabus-download-feature-icon">✓</span>
              <span>Sample Questions</span>
            </div>
          </div>

          <div className="syllabus-download-stats">
            <div className="syllabus-download-stat">
              <span className="syllabus-download-stat-number">50+</span>
              <span className="syllabus-download-stat-label">Topics Covered</span>
            </div>
            <div className="syllabus-download-stat">
              <span className="syllabus-download-stat-number">100</span>
              <span className="syllabus-download-stat-label">Sample Questions</span>
            </div>
            <div className="syllabus-download-stat">
              <span className="syllabus-download-stat-number">25</span>
              <span className="syllabus-download-stat-label">Pages</span>
            </div>
          </div>
        </div>
        
        <div className="syllabus-download-decoration">
          <div className="syllabus-download-circle syllabus-download-circle-1"></div>
          <div className="syllabus-download-circle syllabus-download-circle-2"></div>
          <div className="syllabus-download-circle syllabus-download-circle-3"></div>
          <div className="syllabus-download-circle syllabus-download-circle-4"></div>
        </div>
      </div>
    </section>
  );
}

export default OlympiadGalleryPart3;