import React, { useState } from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [degree, setDegree] = useState("");
  const [year, setYear] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !degree || !year) {
      alert("Please fill in all fields");
      return;
    }

    // You can integrate API here later
    setSubmitted(true);
  };

  return (
    <div
      className="popup-overlay"
      id="popup-overlay"
      style={{ display: "flex" }}
      onClick={onClose}
    >
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        {!submitted ? (
          <>
            <div className="popup-header">
              <h3>Drop Your Email</h3>
            </div>

            <p>
              Our <strong>Learner Space</strong> app is almost ready! Leave your
              details and we’ll notify you the moment it launches.
            </p>

            <form onSubmit={handleSubmit} className="popup-form">
              <input
                type="email"
                placeholder="Email address"
                className="popup-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="text"
                placeholder="Degree (e.g., B.Tech, MBA)"
                className="popup-input"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
              />

              <input
                type="number"
                placeholder="Year of Graduation"
                className="popup-input"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />

              <button type="submit" className="popup-btn submit-btn">
                Notify Me
              </button>
            </form>
          </>
        ) : (
          <div className="success-container">
            <span className="popup-emoji">✅</span>
            <h3>You're on the List!</h3>
            <p>We’ll notify you as soon as the app is live</p>

            <button className="popup-btn" onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
