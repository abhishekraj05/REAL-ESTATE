import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./NavContact.css";

const NavContact = () => {
  const [loading, setLoading] = useState(true);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <section className="container py-5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="row g-4 align-items-start shadow p-4 rounded-4"
        style={{
          backgroundColor: "#fff",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        }}
      >
        {/* Left Side */}
        <motion.div variants={fadeUp} custom={1} className="col-lg-6 col-md-12">
          <h3 className="fw-bold mb-3">CONTACT US</h3>
          <div
            style={{
              height: "3px",
              width: "80px",
              backgroundColor: "#f4a259",
              marginBottom: "1.5rem",
            }}
          />
          <p className="text-muted mb-4">
            हमसे संपर्क करें! चाहे आप अपना सपनों का घर खरीदना चाहते हों, साइट
            विज़िट बुक करनी हो, या किसी भी प्रकार की जानकारी लेनी हो — हमारी टीम
            आपकी मदद के लिए हमेशा तैयार है। आप हमें कॉल, ईमेल या नीचे दिए गए
            फॉर्म के ज़रिए संपर्क कर सकते हैं। हम जल्द से जल्द आपसे संपर्क
            करेंगे।
          </p>

          <div className="d-flex align-items-start gap-3 mb-4 text-muted">
            <FaMapMarkerAlt
              size={20}
              style={{ color: "#f4a259", marginTop: "4px" }}
            />
            <p className="mb-0">
              1th Floor Haripur Allouth, Musrigharari, Near Vastu Vihar
              <br />
              Samastipur, Bihar, 848101
            </p>
          </div>

          <div className="d-flex align-items-center gap-3 mb-4 text-muted">
            <FaPhoneAlt size={18} style={{ color: "#f4a259" }} />
            <p className="mb-0 fw-medium">+91 7070501157</p>
          </div>

          <div className="d-flex align-items-center gap-3 mb-2 text-muted">
            <FaEnvelope size={18} style={{ color: "#f4a259" }} />
            <p className="mb-0 fw-medium">info@99vihar.in</p>
          </div>

          <div className=" d-flex align-items-center gap-3 mb-2 text-muted ">
            <i
              style={{ color: "#f4a259" }}
              className="fa-solid fa-location-dot"
            ></i>
            <a
              href="https://maps.app.goo.gl/KRrJE3eGv8yvEDBD8"
              className="map"
              style={{ textDecoration: "none" }}
            >
              View on Map .{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </motion.div>

        {/* Right Side - Google Form + Spinner */}
        <motion.div variants={fadeUp} custom={2} className="col-lg-6 col-md-12">
          <div
            style={{
              width: "100%",
              height: "500px",
              borderRadius: "12px",
              border: "1px solid #e0e0e0",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Spinner */}
            {loading && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 10,
                }}
              >
                <div className="spinner"></div>
              </div>
            )}

            {/* Google Form iframe */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfrN76xD1mh2KdijPowU2rwnzUP9NLOBdFDkE8TPJ-XbbIPMw/viewform?embedded=true"
              title="Google Form"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="yes"
              onLoad={() => setLoading(false)}
              style={{
                border: "none",
                display: loading ? "none" : "block",
              }}
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NavContact;
