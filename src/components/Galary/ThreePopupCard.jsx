import React from "react";
import "./ThreePopupCard.css";

const ThreePopupCard = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <img src={data.src} alt={data.title} className="popup-image" />
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <button className="bottom-close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ThreePopupCard;
