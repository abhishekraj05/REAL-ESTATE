import React from "react";
import Hero from "../Hero/Hero";
import About from "./About";
import WhatsAppButton from "../icon/WhatsAppButton";
import SiteVisit from "../icon/SiteVisit";

const AboutPage = () => {
  return (
    <>
      {/* <div className="Home">
        <div>
          <div className="white-grediant" />
          <Hero />
        </div>
      </div> */}
      <About/>
       <WhatsAppButton/>
         <SiteVisit/>
    </>
  );
};

export default AboutPage;
