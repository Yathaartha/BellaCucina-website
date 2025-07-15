import React from "react";
import "./App.css";

const ORDER_URL =
  "https://order.toasttab.com/online/bella-cucina-agawam-1422-main-street";

function FoodItem({ image, name, price, description }) {
  return (
    <div className="menu-card">
      <img
        src={image}
        alt={name}
        className="menu-card-img"
        style={{ width: "100%", height: 300, objectFit: "cover" }}
      />
      <div className="menu-card-info">
        <div
          className="menu-card-title"
          style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: 4 }}>
          {name}
        </div>
        {description && (
          <div
            className="menu-card-desc"
            style={{ color: "#ccc", fontSize: "0.95rem", marginBottom: 6 }}>
            {description}
          </div>
        )}
        <div
          className="menu-card-price"
          style={{ color: "#fff", fontWeight: 500 }}>
          {price}
        </div>
        <a
          href={ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: 10,
            background: "#ffd700",
            color: "#181818",
            fontWeight: 700,
            border: "none",
            borderRadius: 4,
            padding: "8px 18px",
            textDecoration: "none",
            fontSize: "1rem",
            transition: "background 0.2s, color 0.2s",
          }}>
          Order Now
        </a>
      </div>
    </div>
  );
}

export default FoodItem;

