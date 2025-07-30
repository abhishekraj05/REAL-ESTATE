import React from "react";
import brochure from "../../assets/Mayura City_Broucher.pdf";

const Brochure = () => (
  <div className="container text-center my-5">
    <a href={brochure} download className="btn btn-outline-primary brochure-btn">
      Download Project Brochure (PDF)
    </a>
  </div>
);

export default Brochure;
