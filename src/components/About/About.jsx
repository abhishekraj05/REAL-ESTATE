// src/components/About/About.jsx
import React, { useState, useRef, useEffect } from "react";
import "./About.css";
import AboutContent from "./AboutContent";
import TitleNavbar from "./TitleNavbar";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");
  const contentRef = useRef(null); // 👈 Reference for scrolling

  useEffect(() => {
    // Scroll to content area when tab changes
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeTab]);

  return (
    <div>
      {/* Global Top Banner */}
      <TitleNavbar tab={activeTab} />

      {/* Main Content with Flex Layout */}
      <div className="about-container">
        {/* Left Side – Dynamic Content */}
        <div className="about-content-area" ref={contentRef}> {/* 👈 Added ref here */}
          <AboutContent tab={activeTab} />
        </div>

        {/* Right Side – Tabs */}
        <div className="about-right">
          <h3 className="links-heading topc">
            MORE <span style={{ color: "orange" }}>LINKS</span>
          </h3>
          <hr className="blue-line leftc" />
          <ul className="links-list">
            <li
              onClick={() => setActiveTab("about")}
              className={activeTab === "about" ? "active-link" : ""}
            >
              ABOUT US
            </li>
            <li
              onClick={() => setActiveTab("story")}
              className={activeTab === "story" ? "active-link" : ""}
            >
              SUCCESS STORY
            </li>
            <li
              onClick={() => setActiveTab("vision")}
              className={activeTab === "vision" ? "active-link" : ""}
            >
              VISION & MISSION
            </li>
            <li
              onClick={() => setActiveTab("chairman")}
              className={activeTab === "chairman" ? "active-link" : ""}
            >
              CHAIRMAN'S MESSAGE
            </li>
            <li
              onClick={() => setActiveTab("quality")}
              className={activeTab === "quality" ? "active-link" : ""}
            >
              QUALITY POLICY
            </li>
            <li
              onClick={() => setActiveTab("video")}
              className={activeTab === "video" ? "active-link" : ""}
            >
              VIDEO
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
