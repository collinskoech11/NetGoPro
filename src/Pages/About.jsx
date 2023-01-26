import React from "react";
import { next, prev, Btn, nextsmall } from "../icons";
import "../css/about.css";
import servicesone from "../assets/servicesone.png";
import servicestwo from "../assets/servicestwo.png";
import onenout from "../assets/oneanout.png";
import twoout from "../assets/twoout.png";
import threeout from "../assets/threeout.png";
import fourout from "../assets/fourout.png";

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
      <div className="elevated">
        <h2>Enjoy an Elevated Internet Experience</h2>
      </div>
      <div className="elevated-tabs">
        <div className="elevated-tab-item">
          <div>
            <img src={onenout} alt="onenout image" />
          </div>
          <div>
            <p>
              After evaluating the layout of your home, or office space and
              discussing your specific wifi needs, the tech will place equipment
              for maximum performance.
            </p>
          </div>
        </div>
        <div className="elevated-tab-item">
          <div>
            <img src={twoout} alt="onenout image" />
          </div>
          <div>
            <p>
              You have a support team on call all the time. If you have a
              problem with your wifi or need help connecting another device,
              call us and you’ll be put in touch with our support team. If
              something requires a tech to visit your home / office, we will do
              that at no additional cost.
            </p>
          </div>
        </div>
        <div className="elevated-tab-item">
          <div>
            <img src={threeout} alt="onenout image" />
          </div>
          <div>
            <p>
              We are live on our social media platforms where we provide new
              insights, customer support and promos.
            </p>
          </div>
        </div>
        <div className="elevated-tab-item">
          <div>
            <img src={onenout} alt="onenout image" />
          </div>
          <div>
            <p>
              With our home unlimited internet data, you can stream, binge watch
              and download anything at any time.
            </p>
          </div>
        </div>
      </div>
      <div className="started">
        <div
          className="started-sub"
          style={{ textAlign: "center", width: "69.5vw", margin: "auto" }}
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
