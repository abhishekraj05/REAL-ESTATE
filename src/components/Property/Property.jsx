import React from "react";
import RightProperty from "./RightProperty";
import LeftProperty from "./LeftProperty";
import { TbListDetails } from "react-icons/tb";
import Touch from "./Touch";
import Head from "./Head";

// import firstProperty from '../../../public/firstProperty.jpg'
// import secondProperty from '../../../public/secondProperty.jpg'
// import thirdProperty from '../../../public/thirdProperty.jpg'
// import fourthProperty from '../../../public/fourthProperty.jpg'

import firstProperty from '../../assets/firstProperty.jpg'
import secondProperty from '../../assets/secondProperty.jpg'
import thirdProperty from '../../assets/thirdProperty.jpg'
import fourthProperty from '../../assets/fourthProperty.jpg'


const Property = () => {
  return (
    <>
    <Head />
      <RightProperty
        RightHeading="99 Vihar — Harpur Ailoth, Samastipur"
        content={
          <>
            <p>
              Just 5 minutes from Samastipur city — an ideal location to build
              your dream home with convenience and comfort.
            </p>
            <h5>Key Features:</h5>
            <ul
              style={{
                textAlign: "left",
                listStyleType: "none",
                paddingLeft: "1.2rem",
              }}
            >
              <li><TbListDetails className="text-warning"/> 16-feet wide internal roads for easy access</li>
              <li><TbListDetails className="text-warning"/> Gated boundary with 24x7 security</li>
              <li><TbListDetails className="text-warning"/> Registry available with immediate possession</li>
              <li><TbListDetails className="text-warning"/> Located close to Samastipur city center</li>
            </ul>
          </>
        }
        imageurl={firstProperty}
      />
      <Touch/>
      <LeftProperty
        leftHeading="99 Vihar — Ekadash Nagar, Dalsinghsarai"
        content={
          <>
            <p>Located at Pagara Chowk — well connected and family-friendly.</p>
            <h5>Key Features:</h5>
            <ul
              style={{
                textAlign: "left",
                listStyleType: "none",
                paddingLeft: "1.2rem",
              }}
            >
              <li> <TbListDetails className="text-warning" /> 17 & 19-feet wide roads</li>
              <li> <TbListDetails className="text-warning" /> Electricity and water connection</li>
              <li> <TbListDetails className="text-warning" /> Close to schools, hospitals, and markets</li>
              <li> <TbListDetails className="text-warning" /> Registry-ready plots</li>
            </ul>
          </>
        }
        imageurl={secondProperty}
      />
       <Touch/>
      <RightProperty
        RightHeading="   99 Vihar — Rosera"
        content={
          <>
            <p>
              Premium plots in Rosera’s peaceful surroundings — perfect for
              modern families.
            </p>
            <h5>Key Features:</h5>
            <ul
              style={{
                textAlign: "left",
                listStyleType: "none",
                paddingLeft: "1.2rem",
              }}
            >
              <li><TbListDetails className="text-warning" /> Wide internal roads</li>
              <li> <TbListDetails className="text-warning" /> Green spaces and open parks</li>
              <li> <TbListDetails className="text-warning"/> Ready for registry and construction</li>
            </ul>
          </>
        }
        imageurl={thirdProperty}
      />
       <Touch/>
      <LeftProperty
        leftHeading="  99 Vihar — Begusarai"
        content={
          <>
            <p>
              Prime location in Begusarai with fast-growing property values —
              ideal for investment.
            </p>
            <h5>Key Features:</h5>
            <ul
              style={{
                textAlign: "left",
                listStyleType: "none",
                paddingLeft: "1.2rem",
              }}
            >
             <li><TbListDetails className="text-warning"/> Wide roads</li>
             <li> <TbListDetails className="text-warning"/> Gated boundary and secure community</li>
             <li> <TbListDetails className="text-warning"/> All basic facilities — electricity & water</li>
             <li><TbListDetails className="text-warning"/> Registry-ready plots</li>
            </ul>
          </>
        }
        imageurl={fourthProperty}
      />{" "}
       <Touch/>
       <RightProperty
            RightHeading="99 Vihar — Farm House City"
            content={
              <>
                <p>
                  99 VIHAR Farm House City is your dream getaway destination where you can experience peaceful, beautiful, and natural surroundings — perfect for a relaxing lifestyle.
                </p>
                <h5>Project Highlights:</h5>
                <ul
                  style={{
                    textAlign: "left",
                    listStyleType: "none",
                    paddingLeft: "1.2rem",
                  }}
                >
                  <li><TbListDetails className="text-warning" /> 20-feet wide internal roads</li>
                  <li><TbListDetails className="text-warning" /> Easy EMI option up to 60 months</li>
                  <li><TbListDetails className="text-warning" /> Located in a lush green environment</li>
                  <li><TbListDetails className="text-warning" /> 24x7 security with gated boundaries</li>
                  <li><TbListDetails className="text-warning" /> Uninterrupted water and electricity supply</li>
                  <li><TbListDetails className="text-warning" /> Facilities like swimming pool and more</li>
                  <li><TbListDetails className="text-warning" /> Starting at just ₹7,99,999 per unit</li>
                </ul>
              </>
            }
            imageurl={fourthProperty}
          />

      <Touch/>

    </>
  );
};

export default Property;
