import React from "react";
import "./OlympiadGalleryFooter.css";

const OlympiadGalleryFooter = () => {
  return (
    <footer className="olympiad-footer text-center py-4">
      <div className="container">
        <h5 className="footer-title mb-2">
          <span className="text-primary">STATE LEVEL ENGLISH</span>{" "}
          <strong className="text-white">OLYMPIAD</strong>
          <span className="footer-star">⭐</span>
          <span className="text-danger">2.0</span>
        </h5>
        <p className="footer-org text-warning mb-3">
          Organised By TalkEng Online Learning Solution Private Limited
        </p>
        <hr className="footer-divider" />
        <p className="footer-copy text-light mb-0">
          © 2024 English Olympiad. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default OlympiadGalleryFooter;
