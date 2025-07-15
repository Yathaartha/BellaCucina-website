import React from "react";
import "./App.css";
import cateringService from "./assets/images/catering-service.jpeg";
import dineInService from "./assets/images/dine-in-service.jpeg";
import takeoutService from "./assets/images/takeout-service.jpeg";
import Header from "./Header";
import Footer from "./Footer";

function About() {
  return (
    <div className="homepage-root">
      <Header />
      {/* Our Story Section */}
      <section className="menu-highlights" id="about-story">
        <h2 style={{ color: "#ffd700" }}>Our Story</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            background: "#111",
            borderRadius: 8,
            overflow: "hidden",
            margin: "32px 0",
          }}>
          <div style={{ flex: 1, minWidth: 260, padding: 32 }}>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "1.15rem" }}>
              At <b>Bella Cucina</b>, we bring a slice of Italy to your plate.
              Founded by lovers of Italian cuisine, our mission is to deliver
              the rich flavors, warm hospitality, and charm of Italy right here
              in your neighborhood.
              <br />
              <br />
              From handcrafted pasta to wood-fired pizzas, every dish is made
              with passion and care by our talented chefs who hail from Italy's
              culinary heartlands.
            </p>
          </div>
          <div style={{ flex: 1, minWidth: 260 }}>
            <img
              src={cateringService}
              alt="Our Story"
              style={{ width: "100%", height: 320, objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
      {/* Why Dine With Us Section */}
      <section className="services" id="about-why-dine">
        <h2 style={{ color: "#ffd700" }}>Why Dine With Us?</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            background: "#181818",
            borderRadius: 8,
            overflow: "hidden",
            margin: "32px 0",
          }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <img
              src={dineInService}
              alt="Why Dine With Us"
              style={{ width: "100%", height: 320, objectFit: "cover" }}
            />
          </div>
          <div style={{ flex: 1, minWidth: 260, padding: 32 }}>
            <ul
              style={{
                color: "#fff",
                fontSize: "1.1rem",
                listStyle: "disc inside",
                textAlign: "left",
              }}>
              <li>Authentic dishes prepared by native Italian chefs</li>
              <li>Fresh, seasonal ingredients — locally sourced & imported</li>
              <li>Romantic and family-friendly ambiance</li>
              <li>Perfect for special occasions and everyday indulgence</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Come Visit Us Section */}
      <section className="menu-highlights" id="about-visit">
        <h2 style={{ color: "#ffd700" }}>Come Visit Us</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            background: "#111",
            borderRadius: 8,
            overflow: "hidden",
            margin: "32px 0",
          }}>
          <div style={{ flex: 1, minWidth: 260, padding: 32 }}>
            <p style={{ color: "#fff", fontSize: "1.1rem" }}>
              We invite you to experience the warm flavors of Italy at Bella
              Cucina.
              <br />
              <br />
              <b>Location:</b> 1422 Main St, Agawam, MA
              <br />
              <br />
              <b>Opening Hours:</b>
              <br />
              Monday – Thursday: 11:30 AM – 9:00 PM
              <br />
              Friday – Sunday: 11:30 AM – 10:00 PM
            </p>
          </div>
          <div style={{ flex: 1, minWidth: 260 }}>
            <img
              src={takeoutService}
              alt="Come Visit Us"
              style={{ width: "100%", height: 320, objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;

