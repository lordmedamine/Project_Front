import React from "react";
import "./Main-Footer.scss";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const MainFooter = () => {
  return (
    <div className="main-footer">
      <div className="footer-logo">
        <h1>DreamLand</h1>
        <p>Where All Your Dreams Come True</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <Facebook fontSize="large" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <Twitter fontSize="large" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <Instagram fontSize="large" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DreamLand. All rights reserved.</p>
      </div>
    </div>
  );
};

export default MainFooter;
