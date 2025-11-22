import React from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="popup-overlay"
      id="popup-overlay"
      style={{ display: "flex" }}
      onClick={onClose}
    >
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <span className="popup-emoji">🚀</span>
          <h3>Exciting Things Are Coming!</h3>
        </div>

        <p>
          The <strong>Learner Space</strong> mobile app is almost ready to
          launch.
          <br />
          Get ready to explore smarter learning anytime, anywhere!
        </p>

        <div className="popup-footer">
          <button id="close-popup" className="popup-btn" onClick={onClose}>
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
