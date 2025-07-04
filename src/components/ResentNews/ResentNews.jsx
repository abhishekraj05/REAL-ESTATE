import React from "react";
import "./ResentNews.css";

const newsItems = [
  {
    date: "07/03/2025",
    title: "99 Vihar — Harpur Ailoth, Samastipur (7 L)",
    link: "#",
    desc: "5 minutes from Samastipur city — ideal for building your dream home. 16-ft wide roads, gated boundary with 24x7 security, registry & immediate possession."
  },
  {
    date: "07/03/2025",
    title: "99 Vihar — Ekadash Nagar, Dalsinghsarai (12 L)",
    link: "#",
    desc: "Located at Pagara Chowk — well connected & family-friendly. 17 & 19-ft roads, electricity & water, registry-ready plots near schools & hospitals."
  },
  {
    date: "07/03/2025",
    title: "99 Vihar — Rosera (14 L)",
    link: "#",
    desc: "Premium plots in peaceful surroundings. Wide internal roads, green parks, and ready for registry & construction — perfect for modern families."
  },
  {
    date: "07/03/2025",
    title: "99 Vihar — Begusarai (8.89 L)",
    link: "#",
    desc: "Prime location with fast-growing property value. Gated boundary, wide roads, electricity & water — registry-ready, ideal for investment."
  },
  {
    date: "07/03/2025",
    title: "99 Vihar — Industrial Plotting Project (10.90 L)",
    link: "#",
    desc: "Located on a 4-lane highway — ideal for industries/warehouses. 25 & 30-ft wide roads, electricity, and private industrial zones with infrastructure ready."
  },
  {
    date: "07/03/2025",
    title: "99 Vihar — Harpur Ailoth, Samastipur (16.50 L)",
    link: "#",
    desc: "Just 5 mins from Samastipur city. 16-ft roads, gated boundary, 24x7 security, registry and immediate possession in a prime location."
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
