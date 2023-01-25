import React from 'react'
import "../css/nav.css"
import {netgoLogo} from "../icons";
import NetGoLogo from "../assets/netgopro_logo.png"

function Navbar() {
  return (
    <div className='main-nav-container'>
        <div><img src={NetGoLogo}/></div>
        <a href="/">Home</a>
        <a href="/About">About Us</a>
        <a href="/Services">Services</a>
        <a href="/Contact">Contact Us</a>
        <div></div>
    </div>
  )
}

export default Navbar