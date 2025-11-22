import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo">
            <span>Learner</span> <span>Space</span>
          </div>
          <p>
            Your personal guide to success. Join the growing community of
            learners shaping their future one skill at a time.
          </p>
          <div className="social-links">
            <a href="#">
              <i className="fab">f</i>
            </a>
            <a href="#">
              <i className="fab">t</i>
            </a>
            <a href="#">
              <i className="fab">in</i>
            </a>
            <a href="#">
              <i className="fab">ig</i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#courses">How It Works</a>
            </li>
            <li>
              <a href="#explore">Explore</a>
            </li>
            <li>
              <a href="#blog">Reviews</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 <span className="highlight">Learner Space</span>. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
