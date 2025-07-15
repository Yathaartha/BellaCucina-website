import React from "react";
import "./App.css";
import contactBg from "./assets/images/contact-us-bg-img.jpg";
import Header from "./Header";
import Footer from "./Footer";

function Contact() {
  return (
    <div className="homepage-root">
      <Header />
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "auto",
        }}>
        <div className="hero-overlay" style={{ padding: 60 }}>
          <div className="hero-content">
            <h1 className="hero-title" style={{ fontSize: "3rem", margin: 0 }}>
              Contact Us
            </h1>
          </div>
        </div>
      </section>
      {/* Contact Info Section */}
      <section
        style={{
          background: "#111",
          color: "#fff",
          maxWidth: 900,
          margin: "0 auto",
          borderRadius: 8,
          marginTop: 40,
          boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
          padding: 32,
        }}>
        <div
          style={{
            fontWeight: 700,
            color: "#ffd700",
            fontSize: "1.5rem",
            marginBottom: 16,
          }}>
          Bella Cucina
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <div style={{ marginBottom: 8 }}>
              <span role="img" aria-label="address">
                📍
              </span>{" "}
              <b>Address:</b> 1422 Main St, Agawam, MA
            </div>
            <div style={{ marginBottom: 8 }}>
              <span role="img" aria-label="phone">
                📞
              </span>{" "}
              <b>Phone:</b> (413) 750-9877
            </div>
            <div style={{ marginBottom: 8 }}>
              <span role="img" aria-label="email">
                ✉️
              </span>{" "}
              <b>Email:</b> bellacucina2025@gmail.com
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section
        style={{
          background: "#111",
          color: "#fff",
          maxWidth: 900,
          margin: "32px auto 0 auto",
          borderRadius: 8,
          boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
          padding: 32,
        }}>
        <div
          style={{
            fontWeight: 700,
            color: "#ffd700",
            fontSize: "1.2rem",
            marginBottom: 16,
          }}>
          Find Us on the Map
        </div>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=1422+Main+St,+Agawam,+MA+01001&output=embed"
          width="100%"
          height="250"
          frameBorder="0"
          style={{ border: 0, borderRadius: 8 }}
          allowFullScreen=""
          aria-hidden="false"
          id="map"
          tabIndex="0"></iframe>
      </section>
      {/* Enquiry Form Section */}
      <section
        style={{
          background: "#111",
          color: "#fff",
          maxWidth: 900,
          margin: "32px auto 32px auto",
          borderRadius: 8,
          boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
          padding: 32,
        }}>
        <div
          style={{
            fontWeight: 700,
            color: "#ffd700",
            fontSize: "1.2rem",
            marginBottom: 16,
          }}>
          Send an Enquiry
        </div>
        <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <label style={{ color: "#ffd700", fontWeight: 500 }}>
            Name
            <input
              type="text"
              name="name"
              style={{
                width: "100%",
                padding: 12,
                borderRadius: 4,
                border: "none",
                marginTop: 4,
                fontSize: "1rem",
              }}
            />
          </label>
          <label style={{ color: "#ffd700", fontWeight: 500 }}>
            Email
            <input
              type="email"
              name="email"
              style={{
                width: "100%",
                padding: 12,
                borderRadius: 4,
                border: "none",
                marginTop: 4,
                fontSize: "1rem",
              }}
            />
          </label>
          <label style={{ color: "#ffd700", fontWeight: 500 }}>
            Message
            <textarea
              name="message"
              rows={6}
              style={{
                width: "100%",
                padding: 12,
                borderRadius: 4,
                border: "none",
                marginTop: 4,
                fontSize: "1rem",
              }}
            />
          </label>
          <button
            type="submit"
            style={{
              background: "#ffd700",
              color: "#181818",
              fontWeight: 700,
              fontSize: "1.1rem",
              border: "none",
              borderRadius: 4,
              padding: "12px 0",
              marginTop: 8,
              cursor: "pointer",
            }}>
            SEND MESSAGE
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;

