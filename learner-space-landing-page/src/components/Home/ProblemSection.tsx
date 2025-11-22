import React from "react";

const ProblemSection: React.FC = () => {
  return (
    <section className="problem-section">
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h2 className="section-title">
          The Challenge <span className="highlight">You Face</span>
        </h2>
        <p className="section-subtitle">
          Navigating today's crowded learning marketplace shouldn't be
          overwhelming. We understand your struggles.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            marginTop: "60px",
          }}
        >
          <div
            className="problem-card"
            style={{
              background: "linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%)",
              padding: "40px",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "20px" }}>🔍</div>
            <h3
              style={{
                fontSize: "1.4rem",
                color: "var(--text-dark)",
                marginBottom: "15px",
              }}
            >
              Discovery Chaos
            </h3>
            <p style={{ color: "var(--text-light)", lineHeight: "1.7" }}>
              Finding the right course in a crowded market is like searching for
              a needle in a haystack.
            </p>
          </div>

          <div
            className="problem-card"
            style={{
              background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
              padding: "40px",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "20px" }}>📢</div>
            <h3
              style={{
                fontSize: "1.4rem",
                color: "var(--text-dark)",
                marginBottom: "15px",
              }}
            >
              Information Overload
            </h3>
            <p style={{ color: "var(--text-light)", lineHeight: "1.7" }}>
              Too many options, too much noise separating quality from quantity
              is exhausting.
            </p>
          </div>

          <div
            className="problem-card"
            style={{
              background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
              padding: "40px",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "20px" }}>🤔</div>
            <h3
              style={{
                fontSize: "1.4rem",
                color: "var(--text-dark)",
                marginBottom: "15px",
              }}
            >
              Platform Dependency
            </h3>
            <p style={{ color: "var(--text-light)", lineHeight: "1.7" }}>
              Relying on search engines and social media to find relevant
              programs limits your options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
