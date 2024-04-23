import React from "react";
import "../../Style/Home/hero.css"
import HeroImage from "../../assets/Home/Rectangle1.svg";

const Hero = () => {
  return (
    <div className="hero-general-div">
      <div className=" container hero-div-2">
        <h1 className="hero-h1">Stay Curious.</h1>
        <p className="hero-p" >
          Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur
          egestas massavelit aliquam. Molestim bibendum
          hnt ipsum orci, platea aliquam id ut.{" "}
        </p>
        <button className="d-none d-lg-block d-md-block hero-btn">Get Started</button>
      </div>
      <img src={HeroImage} alt="Big Hero image" className="img-fluid w-100" />
    </div>
  );
};

export default Hero;
