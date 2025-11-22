import React from "react";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();

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
            <a
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/learnerspaceofficial/"
              target="_blank"
              aria-label="LinkedIn"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/learnerspace_ed?igsh=ZnowdHBjbHNxdzdo"
              target="_blank"
              aria-label="Instagram"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
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
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/contact");
                }}
              >
                Contact
              </a>
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
              <a href="#faq">FAQs</a>
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
