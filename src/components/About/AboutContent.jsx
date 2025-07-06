// src/components/About/AboutContent.jsx
import React from "react";
import logo from "../../assets/99-Vihar-Logo.png";
import firstProperty from "../../assets/success.jpg";
import secondProperty from "../../assets/mission.avif";
import thirdProperty from "../../assets/chairmanmes.jpg";
import fourthProperty from "../../assets/quality .jpg";

const AboutContent = ({ tab }) => {
  const renderRowSection = (title, content, img, useHTML = false) => (
    <section className="about-wrapper">
      <div className="about-main-container">
        <div className="about-left">
          <h3 className="links-heading">
            {title}
            <span className="highlight">99VIHAR</span>
          </h3>
          <hr className="blue-line" />
          <div className="about-row">
            <img src={img} alt="Visual" className="about-logo " />
            <div className="about-text">
              {useHTML ? (
                <div dangerouslySetInnerHTML={{ __html: content }} />
              ) : (
                <p>{content}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  switch (tab) {
    case "about":
      return (
        <section className="about-wrapper">
          <div className="about-main-container">
            <div className="about-left">
              <h3 className="links-heading">
                About Us of <span className="highlight">99VIHAR</span>
              </h3>
              <hr className="blue-line" />
              <div className="about-row">
                <img src={logo} alt="Logo" className="about-logo" />
                <div className="about-text">
                  <p>
                    Launched in 2019, 99Vihar.in is one of India’s most trusted
                    and user-friendly online property portals. It is designed to
                    meet the complete needs of today’s real estate buyers,
                    sellers, brokers, and investors with ease and efficiency.
                  </p>
                  <p>
                    99Vihar.in offers a seamless digital platform where users
                    can buy and sell property, post listings, explore verified
                    property options, and even build dedicated microsites to
                    promote real estate projects. Whether you are a first-time
                    homebuyer, an experienced investor, or a builder seeking
                    visibility, 99Vihar.in provides powerful tools to support
                    your journey.
                  </p>
                  <p>
                    Our mission is to simplify property transactions and make
                    them quicker, more transparent, and highly affordable. We
                    bring together property owners, developers, agents, and
                    buyers on a single platform to ensure informed decisions and
                    smoother dealings.
                  </p>
                  <p>
                    With a growing presence across Bihar and other regions,
                    99Vihar.in stands for trust, transparency, and
                    technology-driven solutions in the real estate space. We
                    continue to innovate and expand to serve our users better
                    every day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      );

    case "story":
      return renderRowSection(
        "Success Story of ",
        `What began as a single plotting initiative in Harpur Ailoth, Samastipur, soon transformed into a remarkable journey of trust and development.<br /><br />
With a vision to provide affordable and legally secure plots, 99 Vihar Group launched its first residential project just 5 minutes from Samastipur city.<br />
The location, though underdeveloped at the time, had great potential. Through proper planning, clear titles, and infrastructure like wide roads and gated boundaries, the colony quickly became a preferred choice for homebuyers.<br /><br />
Within a short span, over 150 plots were successfully registered and several families began building their dream homes. The area is now a vibrant community with access to utilities, security, and growing commercial activity.<br /><br />
The success of this project not only boosted buyer confidence but also laid the foundation for further developments in Dalsinghsarai, Rosera, Begusarai, and beyond.<br /><br />
Today, 99 Vihar Group stands as a symbol of trust and transformation, committed to building not just plots, but lasting communities across Bihar.`,
        firstProperty,
        true
      );

    case "vision":
      return renderRowSection(
        "Vision of ",
        `At 99 Vihar Group, our vision goes beyond selling land. We are committed to transforming emerging locations into well-planned, livable, and progressive communities. With each project, we aim to contribute to Bihar’s urban growth by offering legally clear plots, strong infrastructure, and a safe environment for families and businesses.<br /><br />
Our focus is to develop residential and industrial zones that offer more than just value — they offer opportunity. We envision a future where every buyer, whether an individual or an investor, finds trust, growth, and satisfaction with 99 Vihar Group.<br /><br />
Through continuous innovation, customer-first service, and a commitment to quality, we strive to make real estate in Bihar transparent, affordable, and future-ready — one project at a time.`,
        secondProperty,
        true
      );

    case "chairman":
      return renderRowSection(
        "Chairman Message of ",
        `Dear Visitors,<br /><br />
When we laid the foundation of 99 Vihar Group, our mission was clear — to make land ownership accessible, transparent, and secure for every family and investor in Bihar. Real estate has long been a sector filled with uncertainty for common people. We wanted to change that.<br /><br />
Over the years, we have built not just colonies, but trust. Every project we deliver reflects our core values — honesty, planning, and long-term value for our customers. We take pride in offering plots that are legally verified, well-connected, and thoughtfully developed.<br /><br />
Our journey so far has been driven by your faith in us. From our first project in Samastipur to our expansion across Dalsinghsarai, Rosera, Begusarai, and industrial corridors — every milestone has been possible because of the people who believed in our vision.<br /><br />
At 99 Vihar Group, we are not just building property — we are building futures. And we promise to continue this journey with even more commitment, care, and clarity in the years ahead.<br /><br />
Thank you for being a part of our story.<br /><br />
Sincerely,<br />
Chairman — 99 Vihar Group`,
        thirdProperty,
        true
      );

    case "quality":
      return renderRowSection(
        "Quality of ",
        `Built on Trust, Backed by Quality<br /><br />
At 99 Vihar Group, quality is the foundation of everything we build. From site selection to final possession, every step is planned and executed with precision, transparency, and care. We understand that when a customer invests in land, they are investing in their future — and we take that responsibility seriously.<br /><br />
Our plots are developed with:<br /><br />
• Legally verified and clear land titles<br />
• Well-constructed wide roads and proper drainage<br />
• Gated boundaries for safety and security<br />
• Ready access to water, electricity, and other basic amenities<br />
• Proximity to essential services like schools, hospitals, and markets<br /><br />
We follow a zero-compromise approach when it comes to quality — whether it’s about documentation, layout planning, or after-sales support. Every 99 Vihar project is built to deliver lasting value, peace of mind, and a better lifestyle for our customers.<br /><br />
With a focus on long-term satisfaction, we continuously improve our processes, adopt modern practices, and deliver projects that match the expectations of today’s homebuyers and investors.<br /><br />
Quality is not just what we deliver — it’s what we live by.`,
        fourthProperty,
        true
      );

    default:
      return null;
  }
};

export default AboutContent;
