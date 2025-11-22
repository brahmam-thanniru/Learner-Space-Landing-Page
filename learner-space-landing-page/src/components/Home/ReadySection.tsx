import React from "react";

const ReadySection: React.FC = () => {
  return (
    <section className="ready-section" id="explore">
      <h2 className="section-title">
        Ready to <span className="highlight">Learn?</span>
      </h2>
      <p className="section-subtitle">
        Start your journey with personalized courses, real learner insights, and
        flexible learning options—all in one place.
      </p>

      <div className="ready-container">
        <div className="phones-stack">
          <div className="orange-circle"></div>

          <div className="stacked-phone">
            <div className="phone-screen">
              <img src="./App1.png" alt="App Screen 1" />
            </div>
          </div>

          <div className="stacked-phone">
            <div className="phone-screen">
              <img src="./App2.png" alt="App Screen 2" />
            </div>
          </div>
        </div>

        <div className="ready-features">
          <div className="feature-box">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div>
              <h3>Trusted Reviews</h3>
              <p>
                Explore authentic learner ratings and reviews before enrolling.
              </p>
            </div>
          </div>

          <div className="feature-box">
            <div className="feature-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div>
              <h3>Flexible Learning</h3>
              <p>
                Choose from online, hybrid, or self-paced options that suit you
                best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadySection;
