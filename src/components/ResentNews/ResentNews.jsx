import React from "react";
import "./ResentNews.css";

const newsItems = [
  {
    date: "07/03/2025",
    title: "99 Vihar — Ekadash Nagar, Dalsinghsarai (12 L)",
    link: "#",
    desc: "Located at Pagara Chowk — well connected & family-friendly. 17 & 19-ft roads, electricity & water, registry-ready plots near schools & hospitals."
  },
  {
    date: "07/03/2025",
    title: "99 Vihar — Harpur Ailoth, Samastipur (16.50 L)",
    link: "#",
    desc: "Just 5 mins from Samastipur city. 16-ft roads, gated boundary, 24x7 security, registry and immediate possession in a prime location."
  },
  {
    date: "07/03/2025",
    title: "99 Vihar — Ready Flats & Villas, Illahibagh Patna",
    link: "#",
    desc: "Near Bairiya Metro Station & New ISBT. 2 & 3BHK flats and duplex houses available. Project includes park, pool, CCTV, lifts, fire safety & 24x7 security. 200+ families already residing."
  }
];


const ResentNews = () => {
  return (
    <div className="scroll-wrapper">
      <div className="scroll-heading">📰 Recent News</div>
      <div className="scroll-track">
        {[...newsItems, ...newsItems].map((item, index) => (
          <div className="news-card" key={index}>
            <p className="news-date">
              <b>{item.date}&nbsp;:</b>&nbsp;
              <span style={{ color: "red" }}>{item.title}</span>
            </p>
            <p className="news-desc">{item.desc}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResentNews;
