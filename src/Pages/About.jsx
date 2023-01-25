import React from "react";
import { next, prev, Btn, nextsmall } from "../icons";
import servicesone from "../assets/servicesone.png";
import servicestwo from "../assets/servicestwo.png";

function About() {
  return (
    <>
      <div className="main-text">
        <h1>NETGOPRO</h1>
      </div>
      <div className="next-prev">
        <div></div>
        <div>{prev}</div>
        <div>{next}</div>
      </div>
      <div className="button-container" style={{ marginBottom: "150px" }}>
        {Btn}
      </div>
      <div className="services" style={{ marginBottom: "150px" }}>
        <div className="services-sub">
          {/* <div className="spacer"></div> */}
          <img src={servicesone} alt="services description" />
        </div>
        <div className="services-sub">
          <h3>Enjoy an Elevated Internet Experience</h3>
          <p>
            Netgopro is an Internet Service provider offering internet services
            in Maseno. We currently have an active customer base of 300+ clients
            within a 5KM range. We also offer other services which include :
            CCTV installation, Dedicated Business Internet, Networking
            Consultancy,dealers in networking products and office network setup.
          </p>
        </div>
      </div>
      <div className="services" style={{ marginBottom: "150px" }}>
        <div className="services-sub">
          <h3>Street and Campus Wifi </h3>
          <p>
            One of the key markets is Diani. Through the Diani app, we will have
            a free wifi option which tourists as well as the locals will be able
            to connect. Through university campuses, we will be able to connect
            many young people to a free high speed internet connection.
          </p>
        </div>
        <div className="services-sub">
          {/* <div className="spacer"></div> */}
          <img src={servicestwo} alt="services description" />
        </div>
      </div>
      <div className="started">
        <div
          className="started-sub"
          style={{ textAlign: "center", width: "69.5vw", margin: "auto"}}
        >
          <h3>Faqs</h3>
          <p>
            Internet coverage?
            <br />
            How do I connect to NetGoPro’s wifi?
            <br />
            How much does it cost for internet home installation?
            <br />
            Do you sell Internet equipment and accessories?
            <br />
            Do you have 24/7 custome support?{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
