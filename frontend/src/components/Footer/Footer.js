import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Button } from "../../globalStyles";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <Link to="/signup">How it works</Link>
            <Link to="/about">About</Link>
            <Link to="/book">Book</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items-subscription">
            <p className="footer-subscription-text">
              You can unsubscribe at any time.
            </p>
            <div className="input-areas">
              <form className="input-areas">
                <input
                  className="footer-input"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                />
              </form>
              <Button buttonStyle="btn--outline">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
