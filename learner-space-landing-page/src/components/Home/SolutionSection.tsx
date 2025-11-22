import React from "react";

const SolutionSection: React.FC = () => {
  return (
    <section className="solution-section">
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <h2 className="section-title">
          Your <span className="highlight">Smart Solution</span>
        </h2>

        <p className="section-subtitle">
          We've built the ultimate platform to cut through the noise and connect
          you with the perfect learning opportunities.
        </p>

        <div className="solution-grid">
          {/* CARD 1 */}
          <div className="solution-card">
            <div className="solution-icon">
              <i className="fas fa-search"></i>
            </div>

            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "15px",
                color: "var(--text-dark)",
              }}
            >
              Smart Discovery
            </h3>

            <p style={{ color: "var(--text-light)", lineHeight: "1.7" }}>
              Find relevant programs instantly with our AI-powered
              recommendation engine. No more endless scrolling.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="solution-card">
            <div className="solution-icon">
              <i className="fas fa-star"></i>
            </div>

            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "15px",
                color: "var(--text-dark)",
              }}
            >
              Verified Reviews
            </h3>

            <p style={{ color: "var(--text-light)", lineHeight: "1.7" }}>
              Make informed decisions with authentic reviews, ratings, and
              placement statistics from real learners.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="solution-card">
            <div className="solution-icon">
              <i className="fas fa-balance-scale"></i>
            </div>

            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "15px",
                color: "var(--text-dark)",
              }}
            >
              Comparison
            </h3>

            <p style={{ color: "var(--text-light)", lineHeight: "1.7" }}>
              Compare prices, learning modes, and certification options across
              institutions in one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
