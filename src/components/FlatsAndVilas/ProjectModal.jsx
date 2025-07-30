// ProjectModal.jsx
import React from "react";
import { motion } from "framer-motion";
import Touch from "../Property/Touch";
import "./Flats.css";

const ProjectModal = ({ onClose }) => {
  return (
    <div className="custom-modal-overlay" onClick={onClose}>
      <motion.div
        className="custom-modal-card"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="mb-3">Project Details</h3>
        <p>
          <strong>Mayura City</strong> at <strong>Shivala Chowk</strong> consists of 219
          flats in 1, 2, and 3 BHK formats. The layout is thoughtfully distributed:
        </p>
        <ul className="flat-info mb-3">
          <li>
            <strong>1 BHK:</strong> 650 & 900 sqft – <em>Block D</em>
          </li>
          <li>
            <strong>2 BHK:</strong> 1100 sqft – <em>Block B</em>
          </li>
          <li>
            <strong>3 BHK:</strong>
            <ul>
              <li>1268 & 1375 sqft – Block A</li>
              <li>1500 & 1615 sqft – Block C</li>
              <li>1600 sqft – Block B</li>
            </ul>
          </li>
        </ul>

        <h5 className="mt-3">Amenities</h5>
        <ul className="amenities-list">
          <li>270+ Parking Spaces</li>
          <li>Playground Area & Park</li>
          <li>Swimming Pool & Tennis Court</li>
          <li>50% Open Green Space</li>
          <li>24×7 Security Services</li>
          <li>24×7 CCTV Surveillance</li>
        </ul>

        <div className="contact-details mt-3">
          <p>
            <strong>Address:</strong> Shivala Chowk, Patna
          </p>
          <p>
            <strong>Email:</strong> info@99vihar.in
          </p>
          <p>
            <strong>Phone:</strong> +91 7070501157
          </p>
        </div>

        <Touch />
        <button className="btn btn-danger w-100 mt-4" onClick={onClose}>
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default ProjectModal;