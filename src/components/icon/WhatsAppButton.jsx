// WhatsAppButton.jsx
import React from "react";
import "./WhatsAppButton.css";
// import whatsAppimg from '../../../public/whatsapp.png' // public img
import whatsAppimg from '../../assets/whatsapp.png'

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917070501157"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={whatsAppimg} alt="WhatsApp" className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
