import React, { useState } from "react";
import {Link} from "react-router-dom"
import "../css/nav.css";
import NetGoLogo from "../assets/netgopro_logo.png";
import Vector from "../assets/Vector.png";
import closer from "../assets/closer.png"


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  return (
    <>
      {isOpen && (
        <div className="mobile-nav">
          <div className="main-nav-flex">
            <h3 style={{color:"#fff"}}>MENU</h3>
            <button>
              <h1 onClick={() => setIsOpen(false)}><img src={closer} alt="close icon"/></h1>
            </button>
          </div>
          <div className="mobile-nav-item">
            <Link><h3>HOME</h3></Link>
          </div>
          <div className="mobile-nav-item">
            <Link><h3>ABOUT US</h3></Link>
          </div>
          <div className="mobile-nav-item">
            <Link><h3>SERVICES</h3></Link>
          </div>
          <div className="mobile-nav-item">
            <Link><h3>CONTACT US</h3></Link>
          </div>
        </div>
      )}
      <div className="main-nav-container">
        <div>
          <img
            src={NetGoLogo}
            alt="logo on the nav"
            style={{ margin: "auto" }}
          />
        </div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/About">About Us</a>
          <a href="/Services">Services</a>
          <a href="/Contact">Contact Us</a>
        </div>
        <div className="sub-nav">
          <button
            onClick={() => open()}
            style={{ background: "transparent", border: "none" }}
          >
            <img
              src={Vector}
              alt="nav on nav"
              style={{ height: "20px", margin: "auto" }}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
