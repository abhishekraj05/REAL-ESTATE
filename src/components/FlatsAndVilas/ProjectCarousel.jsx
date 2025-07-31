import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { flatImages } from "./flatsData";
import GoogleEmbedFormModal from "../Form/GoogleEmbedForm"; // ✅ Import Modal

SwiperCore.use([Autoplay, Pagination]);

const ProjectCarousel = ({ setShowModal }) => {
  const [showForm, setShowForm] = useState(false); // ✅ Modal state

  return (
    <div className="container">
      <motion.h3
        className="text-center section-heading mb-4 mt-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Project <span className="text-primary">Models</span>
      </motion.h3>

      <Swiper
        loop={true}
        spaceBetween={20}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {flatImages.map((img, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              className="carousel-card card-style position-relative overflow-hidden mb-5"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img src={img} alt={`Model ${idx + 1}`} className="img-fluid" />
              <div className="hover-card">
                <div className="hover-content">
                  <p><strong>3 BHK</strong></p>
                  <p style={{ color: "orange" }}>₹ On Request</p>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => setShowModal(true)} // ✅ View Detail
                  >
                    View Detail
                  </button>
                </div>
                <div className="hover-footer">
                  <button
                    className="btn btn-outline-warning btn-sm mt-2"
                    onClick={() => setShowForm(true)} // ✅ Enquire Now
                  >
                    Enquire Now <span style={{ fontWeight: "bold" }}>⬇</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Google Form Modal */}
      {showForm && <GoogleEmbedFormModal onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default ProjectCarousel;
