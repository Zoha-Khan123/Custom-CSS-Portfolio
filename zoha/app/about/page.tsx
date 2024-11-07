import React from "react";
import Nav from "../componant/Nav";
import Name from "../componant/Name";
import "./style.css";
import Marquee from "./Marquee";
import Image from "next/image";
import lngIcon from "../componant/Images/icons.png";
import Social from "../componant/Social";

const About = () => {
  return (
    <div className="mainCard">
      <Nav />

      <div className="about-card">
        <div>
          <h2>Zoha Khan</h2>
          <ul className="ul">
            <li>Name : Zoha Khan</li>
            <li>Email: zohakhan11004@gmail.com</li>
            <li>Address : Karachi Division, Sindh, Pakistan</li>
          </ul>
          <h2>Expert in</h2>
          <Image
            className="picns"
            alt="lng"
            src={lngIcon}
            width={1000}
            height={1000}
          />
        </div>

        <div className="mrqu">
          <Marquee></Marquee>
        </div>

        <div className="scl">
          <Social></Social>
        </div>
      </div>
    </div>
  );
};

export default About;
