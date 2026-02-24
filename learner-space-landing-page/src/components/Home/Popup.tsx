import React, { useState } from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData{
  email: string;
  degree: string;
  year: string;
  phoneNumber: string;

}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const [formdata, setFormData] = useState<FormData>({
    email: "",
    degree: "",
    year: "",
    phoneNumber: "",
  })

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formdata.email || !formdata.degree || !formdata.year|| !formdata.phoneNumber) {
      alert("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      access_key: "883916d3-43fe-4d83-8369-4d02f12bd806",
      form_type: "waitlist",
      email: formdata.email,
      degree: formdata.degree,
      year_of_graduation: formdata.year,
      phone_number: formdata.phoneNumber,
      subject: `New Waitlist Signup from ${formdata.email}`,
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
                value={formdata.email}
                onChange={(e) => setFormData({...formdata, email: e.target.value})}
                required
              />

              <input
                type="text"
                placeholder="Degree (e.g., B.Tech, MBA)"
                className="popup-input"
                value={formdata.degree}
                onChange={(e) => setFormData({...formdata, degree: e.target.value})}
                required
              />

              <input
                type="number"
                placeholder="Year of Graduation"
                className="popup-input"
                value={formdata.year}
                onChange={(e) => setFormData({...formdata, year: e.target.value})}
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="popup-input"
                value={formdata.phoneNumber}
                onChange={(e) => setFormData({...formdata, phoneNumber: e.target.value})}
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
