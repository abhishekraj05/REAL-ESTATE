import React from "react";
import "./SiteVisit.css";
// import site_visit from '../../../public/site_visit.png' // public img

import site_visit from '../../assets/site_visit.png'

const SiteVisit = () => {
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLScyDM8IQqk1v6BoqE3QzGNT6DMAaG0JmTpWnVDYTOT8Jct4fg/viewform?usp=header" // Replace with your form link
      className="site-visit-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={site_visit}
        alt="Site Visit"
        className="site-visit-icon"
      />
    </a>
  );
};

export default SiteVisit;
