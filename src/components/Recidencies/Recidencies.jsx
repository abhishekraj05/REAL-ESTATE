import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "./Recidencies.css";

import r1 from "../../assets/r1.png";
import ekadashNagar from "../../assets/ekadashNagar.jpg";
import r3 from "../../assets/r3.png";
import besugray from "../../assets/besugray.jpg";
import r2 from "../../assets/r2.png";

SwiperCore.use([Autoplay]);

const Recidencies = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const data = [
    {
      name: "99 Vihar — Harpur Ailoth, Samastipur",
      price: "7 L",
      detail:
        "5 minutes from Samastipur city — ideal for building your dream home. 16-ft wide roads, gated boundary with 24x7 security, registry & immediate possession.",
      image: r1,
    },
    {
      name: "99 Vihar — Ekadash Nagar, Dalsinghsarai",
      price: "12 L",
      detail:
        "Located at Pagara Chowk — well connected & family-friendly. 17 & 19-ft roads, electricity & water, registry-ready plots near schools & hospitals.",
      image: ekadashNagar,
    },
    {
      name: "99 Vihar — Rosera",
      price: "14 L",
      detail:
        "Premium plots in peaceful surroundings. Wide internal roads, green parks, and ready for registry & construction — perfect for modern families.",
      image: r3,
    },
    {
      name: "99 Vihar — Begusarai",
      price: "8.89 L",
      detail:
        "Prime location with fast-growing property value. Gated boundary, wide roads, electricity & water — registry-ready, ideal for investment.",
      image: besugray,
    },
    {
      name: "99 Vihar — Industrial Plotting Project",
      price: "10.90 L",
      detail:
        "Located on a 4-lane highway — ideal for industries/warehouses. 25 & 30-ft wide roads, electricity, and private industrial zones with infrastructure ready.",
      image: r2,
    },
  ];

  // ✅ Show detail view
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
          <span style={{marginLeft: "5px"}} className="orangeText r-head">Best Choice</span>
          <span style={{marginLeft: "5px"}} className="primaryText r-head">Popular Recidencies</span>
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
                  onClick={(e) => e.stopPropagation()} // prevent detail view on button click
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
