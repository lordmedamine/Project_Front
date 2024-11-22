import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to ower newletter and stay updated</p>
      <div>
        <input type="email" placeholder="Enter Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Footer;
