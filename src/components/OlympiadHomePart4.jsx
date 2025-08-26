import React from 'react';
import './OlympiadHomePart4.css';

function OlympiadGalleryPart4() {
  return (
    <section className="olympiad-prizes-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="olympiad-prizes-title">Olympiad Prizes</h2>
          </div>
        </div>
        
        <div className="row justify-content-center g-4">
          {/* 1st Prize - Laptop */}
          <div className="col-lg-4 col-md-6">
            <div className="card prize-card h-100">
              <div className="card-body text-center p-4">
                <div className="prize-image-container mb-3">
                  <img 
                    src="https://olympiad.talkengglobal.com/images/GenericThinLaptop.png" 
                    alt="Laptop - 1st Prize" 
                    className="img-fluid prize-image"
                  />
                </div>
                <div className="prize-badge first-prize mb-3">
                  <h4 className="prize-title mb-0">1st prize (Laptop)</h4>
                </div>
                <p className="prize-value text-muted">+10k worth of Prize rewards</p>
              </div>
            </div>
          </div>

          {/* 2nd Prize - Tablet */}
          <div className="col-lg-4 col-md-6">
            <div className="card prize-card h-100">
              <div className="card-body text-center p-4">
                <div className="prize-image-container mb-3">
                  <img 
                    src="https://olympiad.talkengglobal.com/images/Layer4.png" 
                    alt="Tablet - 2nd Prize" 
                    className="img-fluid prize-image"
                  />
                </div>
                <div className="prize-badge second-prize mb-3">
                  <h4 className="prize-title mb-0">2nd prize (Tablet)</h4>
                </div>
                <p className="prize-value text-muted">+5k worth of Prize rewards</p>
              </div>
            </div>
          </div>

          {/* 3rd Prize - Cycle */}
          <div className="col-lg-4 col-md-6">
            <div className="card prize-card h-100">
              <div className="card-body text-center p-4">
                <div className="prize-image-container mb-3">
                  <img 
                    src="https://olympiad.talkengglobal.com/images/61fNoq7Y6L._AC_UF8941000_QL80_.jpg" 
                    alt="Cycle - 3rd Prize" 
                    className="img-fluid prize-image"
                  />
                </div>
                <div className="prize-badge third-prize mb-3">
                  <h4 className="prize-title mb-0">3rd Prize (Cycle)</h4>
                </div>
                <p className="prize-value text-muted">+2k worth of Prize rewards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OlympiadGalleryPart4;