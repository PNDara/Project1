import React, { useState } from "react";
import "./Header.css";
import logo from "../pic/logo.png";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });

  const [Mobile, setMobile] = useState(false);

  return (
    <header className="header">
      <div className="container d_flex">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navlink">
          <ul
            className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
            onClick={() => setMobile(false)}
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <button className="home-btn">Buy Now</button>
            </li>
          </ul>
          <button className="toggle" onClick={() => setMobile(!Mobile)}>
            {Mobile ? (
              <button className="fas fa-times close home-btn"></button>
            ) : (
              <button className="fas fa-bars open"></button>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
