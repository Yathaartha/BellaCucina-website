import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import "./App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="Bella Cucina Logo" />
          </Link>
          <div className="footer-desc">
            "Bella Cucina serves authentic Italian cuisine crafted by native
            chefs, offering a warm, family-friendly, and unforgettable dining
            experience."
          </div>
        </div>
        <div className="footer-info">
          <div className="footer-col">
            <div className="footer-title">Our Location</div>
            <div>1422 Main Street, Agawam, MA, 01001</div>
            <div>(413)-750-9877</div>
            <a href="/contact#map">Get Direction</a>
          </div>
          <div className="footer-col">
            <div className="footer-title">Quick Link</div>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="footer-col">
            <div className="footer-title">Opening Hours</div>
            <div>
              Monday to Thursday
              <br />
              11:00 AM - 9:00 PM
            </div>
            <div>
              Thursday, Friday, Saturday
              <br />
              11:00 AM - 9:00 PM
            </div>
            <Link
              to="/reservation"
              className="btn btn-secondary"
              style={{ width: "80%" }}>
              RESERVATION
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>Copyright © 2025 Bellacucina</div>
        <div>Powered by Bellacucina</div>
      </div>
    </footer>
  );
}

export default Footer;

