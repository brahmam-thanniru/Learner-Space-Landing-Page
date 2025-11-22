import React from "react";

interface TestimonialsSectionProps {
  onOpenPopup: () => void;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenPopup,
}) => {
  return (
    <section className="testimonials-section" id="blog">
      <div className="testimonials-header">
        <h2>What Our Learner Say</h2>
        <p>
          Hear from students who’ve found their perfect courses with Learner
          Space.
        </p>
      </div>

      <div className="testimonials-grid">
        <div className="testimonial-card">
          <div className="quote-icon">"</div>
          <p className="testimonial-text">
            Simple and easy to use. Helped me find the right course quickly!
          </p>
          <div className="stars">★★★★★</div>
          <div className="testimonial-author">
            <div className="author-avatar"></div>
            <div className="author-info">
              <h4>Rohit</h4>
              <p>Student</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="quote-icon">"</div>
          <p className="testimonial-text">
            Great app for comparing courses. Very helpful!
          </p>
          <div className="stars">★★★★★</div>
          <div className="testimonial-author">
            <div className="author-avatar"></div>
            <div className="author-info">
              <h4>Ananya Verma</h4>
              <p>Graduate</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="quote-icon">"</div>
          <p className="testimonial-text">
            Loved the AI suggestions saved me so much time.
          </p>
          <div className="stars">★★★★★</div>
          <div className="testimonial-author">
            <div className="author-avatar"></div>
            <div className="author-info">
              <h4>Vikram Iyer</h4>
              <p>Professional</p>
            </div>
          </div>
        </div>
      </div>

      <section className="cta-section" id="contact">
        <div className="cta-content">
          <div className="cta-text">
            <h2>
              Start your <span className="highlight">learning journey</span>{" "}
              today!
            </h2>
            <p>
              Download Learner Space and find the course that fits you best.
            </p>
            <button className="cta-btn" onClick={onOpenPopup}>
              Get Started
            </button>
          </div>

          <div className="cta-phones">
            <div className="cta-phone">
              <div className="phone-screen">
                <img src="/Login.png" alt="App Download Screen 1" />
              </div>
            </div>
            <div className="cta-phone">
              <div className="phone-screen">
                <img src="/SignUp.png" alt="App Download Screen 2" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default TestimonialsSection;
