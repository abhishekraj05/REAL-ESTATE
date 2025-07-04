import React from "react";
import NavContact from "./NavContact";
import Hero from "../Hero/Hero";
import WhatsAppButton from "../icon/WhatsAppButton";
import SiteVisit from "../icon/SiteVisit";

const NavContactPage = () => {
  return (
    <>
      <div className="Home">
        <div>
          <div className="white-grediant" />
          <Hero />
        </div>
      </div>
      <NavContact />
      <WhatsAppButton/>
      <SiteVisit/>
    </>
  );
};

export default NavContactPage;
