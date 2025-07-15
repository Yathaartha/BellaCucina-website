import React, { useState } from "react";
import logo from "./logo.png";
import { NavLink, Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "./App.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { to: "/", text: "Home", end: true },
    { to: "/about", text: "About Us" },
    { to: "/menu", text: "Menu" },
    { to: "/contact", text: "Contact" },
    {
      to: "/reservation",
      text: "Reservation Page",
      className: "nav-reservation",
    },
  ];

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="Bella Cucina Logo" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="nav desktop-nav">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              isActive
                ? link.className
                  ? `${link.className} active`
                  : "active"
                : link.className || undefined
            }>
            {link.text}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <Menu
          isOpen={isOpen}
          onStateChange={handleStateChange}
          right
          width={280}
          styles={{
            bmBurgerButton: {
              position: "relative",
              width: "36px",
              height: "30px",
              right: "0px",
              top: "0px",
            },
            bmBurgerBars: {
              background: "#ffd700",
            },
            bmBurgerBarsHover: {
              background: "#fff",
            },
            bmCrossButton: {
              height: "24px",
              width: "24px",
            },
            bmCross: {
              background: "#ffd700",
            },
            bmMenuWrap: {
              position: "fixed",
              height: "100%",
            },
            bmMenu: {
              background: "#111",
              padding: "2.5em 1.5em 0",
              fontSize: "1.15em",
            },
            bmMorphShape: {
              fill: "#111",
            },
            bmItemList: {
              color: "#fff",
              padding: "0.8em",
            },
            bmItem: {
              display: "block",
              marginBottom: "20px",
            },
            bmOverlay: {
              background: "rgba(0, 0, 0, 0.3)",
            },
          }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? link.className
                    ? `${link.className} active`
                    : "active"
                  : link.className || undefined
              }
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1.2rem",
                fontWeight: 500,
                display: "block",
                padding: "10px 0",
                borderBottom: "1px solid #333",
              }}>
              {link.text}
            </NavLink>
          ))}
        </Menu>
      </div>
    </header>
  );
}

export default Header;

