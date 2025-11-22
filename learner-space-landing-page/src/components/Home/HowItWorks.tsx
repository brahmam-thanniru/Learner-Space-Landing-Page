import React from "react";

const HowItWorksSection: React.FC = () => {
  return (
    <section className="how-works-section" id="courses">
      <h2 className="section-title">
        How <span className="highlight">Learner</span> Space Works
      </h2>
      <p className="section-subtitle">
        Discover how Learner Space helps you find, compare, and choose the right
        courses effortlessly.
      </p>

      <div className="features-container">
        <div className="features-left">
          <div className="feature-item">
            <div className="feature-number light">1</div>
            <h3>Smart Filtering</h3>
            <p>Filter And Find Perfect Courses Without The Noise</p>
          </div>
          <div className="feature-item">
            <div className="feature-number dark">2</div>
            <h3>Course Selection</h3>
            <p>Choose from various Course types for your convenience.</p>
          </div>
        </div>

        <div className="center-phone">
          <div className="phone-screen">
            <img src="/Home.png" alt="Learner Space App Feature Screen" />
          </div>
        </div>

        <div className="features-right">
          <div className="feature-item">
            <div className="feature-number light">3</div>
            <h3>AI Guide</h3>
            <p>Safe and seamless Assistance option.</p>
          </div>
          <div className="feature-item">
            <div className="feature-number light">4</div>
            <h3>Course Ratings</h3>
            <p>Rate Courses to ensure quality service.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
