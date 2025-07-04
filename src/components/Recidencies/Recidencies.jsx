import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "./Recidencies.css";

// Import images
// import r1 from "../../../public/r1.png";
// import ekadashNagar from "../../../public/ekadashNagar.jpg";
// import r3 from "../../../public/r3.png";
// import besugray from "../../../public/besugray.jpg";
// import r2 from "../../../public/r2.png";

import r1 from "../../assets/r1.png";
import ekadashNagar from "../../assets/ekadashNagar.jpg";
import r3 from "../../assets/r3.png";
import besugray from "../../assets/besugray.jpg";
import r2 from "../../assets/r2.png";

// Enable Autoplay
SwiperCore.use([Autoplay]);

const Recidencies = () => {
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
    {
      name: "99 Vihar — Harpur Ailoth, Samastipur",
      price: "16.50 L",
      detail:
        "Just 5 mins from Samastipur city. 16-ft roads, gated boundary, 24x7 security, registry and immediate possession in a prime location.",
      image: r3,
    },
  ];

  return (
    <section className="r-wraper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText r-head">Best Choice</span>
          <span className="primaryText r-head">Popular Recidencies</span>
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
              <div className="property-card top">
                <img src={card.image} alt="property" className="property-img" />

                <div className="property-details">
                  <div className="property-title">
                    <span role="img" aria-label="home">
                      🏠
                    </span>
                    &nbsp;
                    <b>{card.name}</b>
                  </div>
                  <div className="property-price">
                    <strong>Price:</strong> <span style={{color: "#ffa500" }}> &nbsp; ₹ {card.price}</span>
                  </div>
                </div>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScyDM8IQqk1v6BoqE3QzGNT6DMAaG0JmTpWnVDYTOT8Jct4fg/viewform?usp=header"
                  className="enquire-button"
                >
                  Enquire Now <span style={{ fontWeight: "bold" }}>⬇️</span>
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
