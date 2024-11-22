import React from "react";
import "./Hero.scss";
import basketImage from "../../assets/basket.png";
import hand from "../../assets/waving-hand-default.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div class="hero-left">
        <h2>Welcome to DreamLand</h2>
        <p>Your Dream Store</p>
        <div class="hero-hand-icon">
          <img src={hand} alt="Hand Icon" />
          <span>Wave to your dreams!</span>
        </div>
        <button class="hero-latest-btn">Shop Now</button>
      </div>

      <div className="hero-right">
        <img src={basketImage} />
      </div>
    </div>
  );
};

export default Hero;
