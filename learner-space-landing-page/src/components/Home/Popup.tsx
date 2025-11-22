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
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !degree || !year) {
      alert("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      access_key: "883916d3-43fe-4d83-8369-4d02f12bd806",
      email: email,
      degree: degree,
      year_of_graduation: year,
      subject: `New Waitlist Signup from ${email}`,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        alert("Submission failed. Try again later.");
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
                required
              />

              <input
                type="text"
                placeholder="Degree (e.g., B.Tech, MBA)"
                className="popup-input"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                required
              />

              <input
                type="number"
                placeholder="Year of Graduation"
                className="popup-input"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
              />

              <button
                type="submit"
                className="popup-btn submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Notify Me"}
              </button>
            </form>
          </>
        ) : (
          <div className="success-container">
            <span className="popup-emoji">✅</span>
            <h3>You're on the List!</h3>
            <p>We’ll notify you as soon as the app is live 🚀</p>

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
