import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
// import homeimg from "../../../public/hero.jpg";  // public
import homeimg from "../../assets/hero.jpg"

const Hero = () => {
  return (
    <section className="hero-wraper">
      <div className="flexCenter paddings innerWidth hero-container">
        {/* Left Side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Find Your Dream <br /> Property Perfectly <br /> Matched to Your <br /> Lifestyle.
            </motion.h1>
          </div>

          <div className="flexColStart hero-des">
            <h2 className="secondaryText">जो दिखेगा, वही मिलेगा</h2>
            <h2 className="secondaryText">सिर्फ़ सही और असली प्रॉपर्टी।</h2>
          </div>

          {/* Uncomment if you want the search bar */}
          {/* <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" placeholder="Search location..." />
            <button className="button">Search</button>
          </div> */}

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1800} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Connected people</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={450} end={500} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Sold property</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={25} end={35} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Current working</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "2rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 4,
              type: "spring",
            }}
            className="image-container"
          >
            <img src={homeimg} alt="Hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
