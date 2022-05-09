import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Button } from "../../Styles";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <Link to="/signup">How it works</Link>
            <Link to="/about">About</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </div>
      </div>

      <div class="footer-copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <p>Copyright Firecrest © 2022. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
