import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "./Recidencies.css";


import ekadashNagar from "../../assets/ekadashNagar.jpg";
import r3 from "../../assets/r3.png";
import besugray from "../../assets/besugray.jpg";
import flats from "../../assets/flats.jpg";
import farmHouse from "../../assets/farmHouse.jpg";

SwiperCore.use([Autoplay]);

const Recidencies = () => {
  const [selectedCard, setSelectedCard] = useState(null);

const data = [
  {
    name: "99 Vihar — Ekadash Nagar, Dalsinghsarai",
    price: "On Request",
    detail:
      "Located at Pagara Chowk — well connected & family-friendly. 17 & 19-ft roads, electricity & water, registry-ready plots near schools & hospitals.",
    image: ekadashNagar,
  },
  {
    name: "99 Vihar — Rosera",
    price: "On Request",
    detail:
      "Premium plots in peaceful surroundings. Wide internal roads, green parks, and ready for registry & construction — perfect for modern families.",
    image: r3,
  },
  {
    name: "99 Vihar — Begusarai",
    price: "On Request",
    detail:
      "Prime location with fast-growing property value. Gated boundary, wide roads, electricity & water — registry-ready, ideal for investment.",
    image: besugray,
  },
  {
    name: "99 Vihar — Ready Flats & Villas, Illahibagh Patna",
    price: "On Request",
    detail:
      "Near Bairiya Metro & ISBT. 2BHK/3BHK flats and duplex houses available with park, pool, CCTV, lift, 24×7 security & more. 200+ families already living.",
    image: flats, 
  },
  {
    name: "99 Vihar — Farm House City",
    price: "On Request",
    detail:
      "20-ft roads, green surroundings, flexible EMI options (up to 60 months), 24×7 security, swimming pool, water & electricity — perfect weekend escape or investment opportunity.",
    image: farmHouse, 
  }
];




  if (selectedCard !== null) {
    const card = data[selectedCard];
    return (
      <div className="property-details-page fade-in">
        <button onClick={() => setSelectedCard(null)} className="back-button">
          ⬅ Go Back
        </button>
        <h2>{card.name}</h2>
        <img
          src={card.image}
          alt={card.name}
          style={{ maxWidth: "100%", borderRadius: "10px", marginBottom: "1rem" }}
        />
        <p>
          <strong>Price:</strong> ₹ {card.price}
        </p>
        <p style={{ marginTop: "1rem" }}>{card.detail}</p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScyDM8IQqk1v6BoqE3QzGNT6DMAaG0JmTpWnVDYTOT8Jct4fg/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="enquire-button"
        >
          Enquire Now <span style={{ fontWeight: "bold" }}>⬇</span>
        </a>
      </div>
    );
  }

  // ✅ Default swiper with all cards
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span style={{marginLeft: "10px"}} className="orangeText r-head">Best Choice</span>
          <span style={{marginLeft: "10px"}} className="primaryText r-head">Popular Recidencies</span>
        </div>

        <Swiper
          loop={true}
          speed={4000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
        >
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="property-card" style={{ cursor: "pointer" }}>
                <img
                  src={card.image}
                  alt="property"
                  className="property-img"
                  onClick={() => setSelectedCard(i)}
                />

                <div className="property-details" onClick={() => setSelectedCard(i)}>
                  <div className="property-title">
                    <span role="img" aria-label="home">🏠</span>&nbsp;
                    <b>{card.name}</b>
                  </div>
                  <div className="property-price">
                    <strong>Price:</strong>
                    <span style={{ color: "#ffa500" }}> ₹ {card.price}</span>
                  </div>
                </div>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScyDM8IQqk1v6BoqE3QzGNT6DMAaG0JmTpWnVDYTOT8Jct4fg/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="enquire-button"
                  onClick={(e) => e.stopPropagation()}
                >
                  Enquire Now <span style={{ fontWeight: "bold" }}>⬇</span>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Recidencies;
