import React, { useState } from "react";
import "../../style/Contact.css";
import { useNavigate } from "react-router-dom";

const Contact: React.FC = () => {
  const navigate = useNavigate();

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    // We wrap everything in a container to apply the global font and background
    <div className="contact-page-container">
      {/* --- Navigation --- */}
      <nav className="contact-nav">
        <div className="logo">
          <span>Learner</span> Space
        </div>

        <div className="hamburger" onClick={toggleNav}>
          <i className="fas fa-bars"></i>
        </div>

        <ul className={`nav-links ${isNavOpen ? "show" : ""}`}>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              Home
            </a>
          </li>

          <li>
            <a href="/contact" className="active">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* --- Contact Section --- */}
      <section className="contact-section">
        <h1>Contact Us</h1>
        <p>
          We’re here to help! Whether you have questions about partnerships,
          support, or collaborations, our team is always ready to assist.
        </p>

        <div className="contact-grid">
          {/* Card 1: Call Us */}
          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3>Call Us</h3>
            <p>+91 63932 46953</p>
          </div>

          {/* Card 2: Email Us */}
          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email Us</h3>
            <p>
              <a
                href="mailto:info@learnerspace.in"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                info@learnerspace.in
              </a>
              <br />
              We usually respond within 24 hours.
            </p>
          </div>

          {/* Card 3: Follow Us */}
          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-globe"></i>
            </div>
            <h3>Follow Us</h3>

            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href="https://www.linkedin.com/company/learnerspaceofficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com/learnerspace_ed"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="contact-footer">
        © 2025 <span className="highlight">Learner Space</span>. All Rights
        Reserved.
      </footer>
    </div>
  );
};

export default Contact;
