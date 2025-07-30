import React from "react";
import masterPlan from "../../assets/hero1.jpg";
import { motion } from "framer-motion";

const ProjectInfo = ({ setShowModal }) => (
  <div className="container py-5">
    <div className="row g-4 align-items-center">
      <motion.div
        className="col-md-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img src={masterPlan} alt="Master Plan" className="img-fluid rounded shadow" />
      </motion.div>

      <motion.div
        className="col-md-6 d-flex flex-column justify-content-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="section-heading">Mayura City – Shivala Chowk</h3>
        <p><strong>Mayura City</strong> is a residential project offering <strong>219 thoughtfully designed flats</strong> by <strong>Maa Tara City Homes Pvt Ltd</strong>.</p>
        <ul className="list-unstyled project-quick-info mb-3">
          <li><strong>Location:</strong> Shivala Chowk, Patna</li>
          <li><strong>Flat Configurations:</strong> 1, 2 & 3 BHK</li>
          <li><strong>Flat Sizes:</strong> 650 – 1615 sqft</li>
          <li><strong>Status:</strong> Under Construction</li>
          <li><strong>Developer:</strong> Maa Tara City Homes Pvt Ltd</li>
        </ul>
        <button className="view-more-btn-blue" onClick={() => setShowModal(true)}>
          View More
        </button>
      </motion.div>
    </div>
  </div>
);

export default ProjectInfo;
