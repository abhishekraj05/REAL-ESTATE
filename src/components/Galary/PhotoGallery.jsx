import React, { useState } from "react";
import Masonry from "react-masonry-css";
import "./PhotoGallery.css";
import ThreePopupCard from "./ThreePopupCard";

import firstProperty from "../../assets/firstProperty.jpg";
import secondProperty from "../../assets/secondProperty.jpg";
import thirdProperty from "../../assets/thirdProperty.jpg";
import farmHouse from "../../assets/farmHouse.jpg";
import besugray from "../../assets/besugray.jpg";
import flat1bhk from "../../assets/f1.jpg";
import flat2bhk from "../../assets/f2.jpg";
import flat3bhk_1268 from "../../assets/f3.jpg";
import flat3bhk_1500 from "../../assets/f4.jpg";
import flat3bhk_1600 from "../../assets/f5.jpg";
import flat3bhk_1700 from "../../assets/f6.jpg";
import ekadashNagar from "../../assets/ekadashNagar.jpg";
import r3 from "../../assets/r3.png";
import flats from "../../assets/flats.jpg";

const images = [
  { src: firstProperty, title: "First Property", description: "Beautiful property with essential facilities." },
  { src: secondProperty, title: "Second Property", description: "Well-located with modern amenities." },
  { src: thirdProperty, title: "Third Property", description: "Spacious design in green surroundings." },
  { src: farmHouse, title: "Farm House", description: "Relaxing farm house with nature views." },
  { src: besugray, title: "Besu Gray", description: "Modern homes in a prime location." },

  // Flats
  { src: flat1bhk, title: "1BHK Flat", description: "Affordable and compact 1BHK unit." },
  { src: flat2bhk, title: "2BHK Flat", description: "Ideal for small families." },
  { src: flat3bhk_1268, title: "3BHK (1268 sqft)", description: "Spacious & smartly designed." },
  { src: flat3bhk_1500, title: "3BHK (1500 sqft)", description: "Premium with large balconies." },
  { src: flat3bhk_1600, title: "3BHK (1600 sqft)", description: "Bright with modern interiors." },
  { src: flat3bhk_1700, title: "3BHK (1700 sqft)", description: "Luxurious with top features." },

  // Locations
  {
    src: ekadashNagar,
    title: "99 Vihar — Ekadash Nagar",
    description: "Well-connected plots near Pagara Chowk."
  },
  {
    src: r3,
    title: "99 Vihar — Rosera",
    description: "Peaceful location with green parks."
  },
  {
    src: besugray,
    title: "99 Vihar — Begusarai",
    description: "Gated plots in a fast-growing area."
  },
  {
    src: flats,
    title: "99 Vihar — Illahibagh Patna",
    description: "2/3BHK flats with 24×7 facilities."
  },
  {
    src: farmHouse,
    title: "99 Vihar — Farm House City",
    description: "Green project with EMI options."
  }
];



const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  600: 2,
};

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="___pg__wrapper">
      <h2  className="___pg__title   display-4 "><strong> Projects Galary</strong></h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="___pg__grid"
        columnClassName="___pg__grid_column"
      >
        {images.map((item, index) => (
          <div key={index} className="___pg__item">
            <img src={item.src} alt={item.title} className="___pg__img" />
            <div className="___pg__overlay">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <button onClick={() => setSelectedImage(item)}>👁 View</button>
            </div>
          </div>
        ))}
      </Masonry>

      {selectedImage && (
        <ThreePopupCard data={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default PhotoGallery;
