import React from "react";
import Hero from "../Hero/Hero";
import Recidencies from "../Recidencies/Recidencies";
import Value from "../Value/Value";
import GetStarted from "../GetStarted/GetStarted";
import Contact from "../Contact/Contact";
import "./Home.css";
import Mission from "../Mission/Mission";
import ResentNews from "../ResentNews/ResentNews";
import WhatsAppButton from "../icon/WhatsAppButton";
import SiteVisit from "../icon/SiteVisit";


const Home = () => {
  return (
    <>
      <div className="Home">
        <div>
          <div className="white-grediant" />
          <Hero />
        </div>
      </div>
      <WhatsAppButton />
      <SiteVisit />
      <Recidencies />
      <ResentNews />
      <Value />
      <Contact />
      {/* <GetStarted /> video ka hai */}
      <Mission />
    </>
  );
};

export default Home;
