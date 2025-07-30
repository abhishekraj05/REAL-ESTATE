import React, { useState } from "react";
import "./Flats.css";
import Banner from "./Banner";
import ProjectInfo from "./ProjectInfo";
import ProjectCarousel from "./ProjectCarousel";
import ProjectModal from "./ProjectModal";
import Brochure from "./Brochure";

import WhatsAppButton from "../icon/WhatsAppButton";
import SiteVisit from "../icon/SiteVisit";
import GalleryPage from "../Galary/GalleryPage";

function Flats() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="flats-section">
      <Banner />
      <ProjectInfo setShowModal={setShowModal} />
      <ProjectCarousel setShowModal={setShowModal} />
      {showModal && <ProjectModal onClose={() => setShowModal(false)} />}
      <Brochure />
      <GalleryPage />
       <WhatsAppButton/>
         <SiteVisit/>
    </section>
  );
}

export default Flats;
