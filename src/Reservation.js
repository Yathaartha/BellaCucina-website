import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

function Reservation() {
  return (
    <div className="homepage-root">
      <Header />
      <div className="reservation-page">
        <h1>Reserve A Table At Bella Cucina</h1>
        <form className="reservation-form">
          <label>
            Name <span style={{ color: "red" }}>*</span>
            <input type="text" name="name" placeholder="Name" required />
          </label>
          <label>
            Phone Number <span style={{ color: "red" }}>*</span>
            <input
              type="tel"
              name="phone"
              placeholder="(999) 999-9999"
              required
            />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="Email" />
          </label>
          <label>
            Number of Guests
            <input
              type="number"
              name="guests"
              placeholder="Number of Guests"
              min={1}
            />
          </label>
          <label>
            Date <span style={{ color: "red" }}>*</span>
            <input type="date" name="date" required />
          </label>
          <label>
            Time <span style={{ color: "red" }}>*</span>
            <input type="time" name="time" required />
          </label>
          <label>
            Special Request
            <textarea name="request" placeholder="Message" rows={3} />
          </label>
          <button type="submit">RESERVE TABLE</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Reservation;

