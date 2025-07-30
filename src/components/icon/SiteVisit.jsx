import React, { useState } from "react";
import "./SiteVisit.css";
import site_visit from "../../assets/site_visit.png";
import GoogleEmbedFormModal from "../Form/GoogleEmbedForm";

const SiteVisit = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="site-visit-button" onClick={() => setShowForm(true)}>
        <img src={site_visit} alt="Site Visit" className="site-visit-icon" />
      </div>

      {showForm && (
        <GoogleEmbedFormModal onClose={() => setShowForm(false)} />
      )}
    </>
  );
};

export default SiteVisit;