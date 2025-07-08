import React from "react";
import Property from "./property";
import Hero from "../Hero/Hero";
import WhatsAppButton from "../icon/WhatsAppButton";
import SiteVisit from "../icon/SiteVisit";

const PropertyPage = () => {
  return (
    <>
      {/* <div className="Home">
        <div>
          <div className="white-grediant" />
          <Hero/>
        </div>
      </div> */}
      <Property />
      <WhatsAppButton/>
      <SiteVisit/>
    </>
  );
};

export default PropertyPage;
