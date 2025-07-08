import React from "react";
import { motion } from "framer-motion";
import "./LeftProperty.css";

const LeftProperty = ({ imageurl, leftHeading, content }) => {
  return (
    <div className="lp-card container my-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <motion.div
          className="col-12 col-md-6 order-1 order-md-1 mb-4 mb-md-0 d-flex justify-content-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className="image-container"> 
            <img src={imageurl} alt="images" className="img-fluid" />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="col-12 col-md-6 order-2 order-md-2 p-4 text-center text-md-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="lp-heading text-warning mb-3">{leftHeading}</h1>
          <div className="lp-text">{content}</div>
        </motion.div>
      </div>
    </div>
  );
};

export default LeftProperty;
