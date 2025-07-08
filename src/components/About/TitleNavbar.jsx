// src/components/About/TitleNavbar.jsx
import React from "react";
import bannerImg from "../../assets/hero-image.png";
import "./About.css";

const TitleNavbar = ({ tab }) => {
  const titles = {
    about: "ABOUT THE COMPANY",
    story: "OUR SUCCESS STORY",
    vision: "VISION & MISSION",
    chairman: "CHAIRMAN’S MESSAGE",
    quality: "QUALITY POLICY",
  };

  return (
    <div
      className="about-banner full-width-banner text-white position-relative d-flex align-items-center justify-content-center custom-banner"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="overlay"></div>
      <div className="text-center position-relative z-1 p-3">
        <h3 className="text-uppercase orangeText">99 VIHAR</h3>
        <h2 className="fw-bold text-uppercase m-0">{titles[tab]}</h2>
        <div className=" border-bottom border-warning mx-auto mt-2"></div>
      </div>
    </div>
  );
};

export default TitleNavbar;
