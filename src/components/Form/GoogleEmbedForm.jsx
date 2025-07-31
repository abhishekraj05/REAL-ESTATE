import React, { useState } from "react";
import "./GoogleEmbedForm.css";

const GoogleEmbedFormModal = ({ onClose }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="form-modal-overlay" onClick={onClose}>
      <div className="form-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Top Close Button */}
        <button className="form-close-btn" onClick={onClose}>
          &times;
        </button>

        <h5 className="form-pretitle">ENQUIRY US</h5>
        <h2 className="form-title">
          SCHEDULE <span className="highlight">A VISIT</span>
        </h2>

        <div className="contact-info">
          <span>📞 +91 7070501157</span>
          <span>✉ info@99vihar.in</span>
        </div>

        {/* Spinner while form is loading */}
        {loading && (
          <div className="form-spinner-container">
            <div className="form-spinner-square"></div>
          </div>
        )}

        {/* Google Form */}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfqZuPlrETteR7f2cXGosAu8rz5KyZhpqp1zDaaP4IMgXYsuw/viewform?embedded=true"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="embedded-form"
          title="Schedule a Visit"
          onLoad={() => setLoading(false)}
          style={{ display: loading ? "none" : "block" }}
        >
          Loading…
        </iframe>

        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <button className="form-fancy-close-btn" onClick={onClose}>
            ✖ Close Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleEmbedFormModal;
