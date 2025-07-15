import React from "react";
import "./App.css";
import chocolateCake from "./assets/images/chocolate-cake.jpg";
import nyCheeseCake from "./assets/images/ny-cheese-cake.jpg";
import pannaCota from "./assets/images/panna-cota.jpg";
import cannoli from "./assets/images/cannoli.webp";
import spaghettiAndMeatballs from "./assets/images/spaghetti-n-meatballs.jpg";
import pastaButterGarlic from "./assets/images/pasta-butter-garlic.jpg";
import dineInService from "./assets/images/dine-in-service.jpeg";
import takeoutService from "./assets/images/takeout-service.jpeg";
import cateringService from "./assets/images/catering-service.jpeg";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import Reservation from "./Reservation";
import Menu from "./Menu";

const menuHighlights = [
  {
    title: "Chocolate Cake",
    price: "$10.95",
    img: chocolateCake,
    category: "Desserts",
  },
  {
    title: "New York Cheese Cake",
    price: "$9.95",
    img: nyCheeseCake,
    category: "Desserts",
  },
  {
    title: "Panna Cotta",
    price: "$8.95",
    img: pannaCota,
    category: "Desserts",
  },
  {
    title: "Cannoli",
    price: "$8.95",
    img: cannoli,
    category: "Desserts",
  },
  {
    title: "Spaghetti and Meatballs",
    price: "$8.95",
    img: spaghettiAndMeatballs,
    category: "Pasta",
  },
  {
    title: "Pasta Butter Garlic",
    price: "$6.95",
    img: pastaButterGarlic,
    category: "Kids Menu",
  },
];

const services = [
  {
    title: "Dine-In Experience",
    desc: "Enjoy traditional Italian ambiance and freshly prepared dishes served with warm hospitality.",
    img: dineInService,
  },
  {
    title: "Takeout Orders",
    desc: "Order your favorite dishes to go. Fast, convenient, and full of flavor—just like at our table.",
    img: takeoutService,
  },
  {
    title: "Catering Services",
    desc: "From weddings to private parties, let Bella Cucina bring authentic Italian cuisine to your next event.",
    img: cateringService,
  },
];

const testimonials = [
  {
    name: "John D.",
    text: "An amazing experience! The food was delicious and the atmosphere was warm and inviting. I will definitely be back.",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Sarah T.",
    text: "I ordered takeout, and it was just as good as dining in. Fast service and perfectly cooked dishes. Highly recommend!",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Michael B.",
    text: "We hired Bella Cucina for our wedding catering. The food was a hit, and the staff was so professional. Couldn’t have asked for a better experience!",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="homepage-root">
            <Header />

            {/* Hero Section */}
            <section className="hero" id="home">
              <div className="hero-overlay">
                <div className="hero-content">
                  <div className="hero-subtitle">GOOD FOOD. GOOD MOOD.</div>
                  <h1 className="hero-title">
                    A Really Good Place to Eat
                    <br />
                    In the City of Agawam
                  </h1>
                  <p className="hero-desc">
                    "Bella Cucina serves authentic Italian cuisine crafted by
                    native chefs, offering a warm, family-friendly, and
                    unforgettable dining experience."
                  </p>
                  <a href="#menu" className="btn btn-primary">
                    EXPLORE OUR MENU
                  </a>
                </div>
              </div>
            </section>

            {/* Reservation Section */}
            <section className="reservation" id="reservation">
              <h2>Reservation</h2>
              <p>
                Experience authentic Italian dining in the Heart of Agawam. Book
                your table today — we’ll save you a seat!
              </p>
              <Link to="/reservation" className="btn btn-secondary">
                BOOK A TABLE NOW
              </Link>
              <div className="reservation-phone">
                <div>Telephone Reservations</div>
                <div className="reservation-number">(413)-750-9877</div>
              </div>
            </section>

            {/* Menu Highlights */}
            <section className="menu-highlights" id="menu">
              <h2>
                <span>Our Menu Highlights</span>
              </h2>
              <div className="menu-grid">
                {menuHighlights.map((item, idx) => (
                  <div className="menu-card" key={idx}>
                    <img src={item.img} alt={item.title} />
                    <div className="menu-card-info">
                      <div className="menu-card-category">{item.category}</div>
                      <div className="menu-card-title">{item.title}</div>
                      <div className="menu-card-price">{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Services Section */}
            <section className="services">
              <h2>Our Services</h2>
              <div className="services-grid">
                {services.map((service, idx) => (
                  <div className="service-card" key={idx}>
                    <img src={service.img} alt={service.title} />
                    <div className="service-card-title">{service.title}</div>
                    <div className="service-card-desc">{service.desc}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
              <h2>What Our Customers Say</h2>
              <div className="testimonials-list">
                {testimonials.map((t, idx) => (
                  <div className="testimonial-card" key={idx}>
                    <img
                      src={t.img}
                      alt={t.name}
                      className="testimonial-avatar"
                    />
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-text">{t.text}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer */}
            <Footer />
          </div>
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}

export default App;

