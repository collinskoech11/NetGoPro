import React from "react";
import { Btn, nextsmall, divs } from "../icons";
import NETGOPRO from "../assets/NETGOPRO.png"
import OneGb from "../assets/one.png"
import ThreeGb from "../assets/Three.png"
import spiral from "../assets/spiral.png"

function Home() {
  return (
    <>
      <div className="main-text">
        <img src={NETGOPRO} alt="logo this" style={{maxWidth:"80vw"}}/>
      </div>
      {/* <div className="next-prev">
        <div></div>
        <div>{prev}</div>
        <div>{next}</div>
      </div> */}
      <div className="button-container">
        {Btn}
      </div>
      <div className="packages">
        <h3>Our Packages</h3>
        <div className="package-text">
          <h5>
            Choose from plans with a variety of speeds, data and price points to
            fit your household / internet needs.
          </h5>
          <div className="cards">
            <div className="card">
                <img src={OneGb} alt="bundles"/>
                <p>Valid daily for 6 hours.</p>
                <p>Ksh 20</p>
                <button>Buy</button>
            </div>
            <div className="card">
              <img src={ThreeGb} alt="bundlesThree"/>
              <p>Valid daily for 10 hours.</p>
              <p>Ksh 40</p>
              <button>Buy</button>
            </div>
            <div className="card">
              <img src={OneGb} alt="bundles"/>
              <p>Valid daily for 10 hours.</p>
              <p>Ksh 30</p>
              <button>Buy</button>
            </div>
          </div>
          <div className="more">
            <div></div>
            <p>see more</p>
            {nextsmall}
          </div>
        </div>
      </div>
      <div className="proccess">
        <div className="sub-process">
            <h2>Why NetGoPro ?</h2><br/><br/>
            <h3>Quick Installation</h3>
            <p>Connect without the long wait. Getting online is 
            simple and fast with household installation within 
            3 days and hotspot within minutes.
            </p><br/><br/>

            <h3>Customer Support</h3>
            <p>You have a support team on call all the time. If you have a 
                problem with your wifi or need help connecting another 
                device, call us and you’ll be put in touch with our support 
                team. If something requires a tech to visit your home / office, 
                we will do that at no additional cost.
            </p><br/><br/>


            <h3>Remote Management</h3>
            <p>If you need help with technical issues, we’ve got 
                you covered with sophisticated remote monitoring 
                and diagnostics that help us identify and resolve any 
                problems you may be experiencing quickly and in some 
                cases, without having to send a technician.
            </p><br/><br/>
        </div>
        <div className="sub-process">
            <div className="rec" style={{alignItems:"center", display:"flex"}}>
              <img src={spiral} alt="gears" style={{margin:"auto"}}/>
            </div>
        </div>
      </div>
      <div className="services">
        <div className="services-sub">
            <h3>Services We Offer</h3>
            <p>Netgopro is an Internet Service provider offering internet 
                services in Maseno. We currently have an active customer
                base of 300+ clients within a 5KM range. We also offer
                other services which include : CCTV installation, Dedicated
                Business Internet, Networking Consultancy,dealers in
                networking products and office network setup.
            </p>
        </div>
        <div className="services-sub" style={{ alignItems:"center", textAlign:"center"}}>
            {divs}
        </div>
      </div>
      <div className="trust">
        <div className="trust-sub">
            <div className="circle">
                <p><span className="quotes">"</span>Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Quis mi arcu nunc molestie 
                faucibus. Ut augue neque morbi facilisis 
                purus id laoreet. Odio tellus etiam varius 
                pellentesque enim. Iaculis lectus amet 
                <span className="quotes">"</span></p>
            </div>
        </div>
        <div className="trust-sub">
            <div className="trust-text">
                <h3>Trusted by thousands of <br/>
                customers countrywide</h3>
                <p>Netgopro has a client base of over 300
                    clients in the Maseno campus with
                    expansion to the Coast in Diani and 
                    other educational instittuions in Kenya.
                    Our clients trust us in providing fast, 
                    reliable and secure wifi.</p>
            </div>
        </div>
      </div>
      <div className="started">
        <div className="started-sub">
            <h3>How To Get Started</h3>
            <p>Connect to our wifi SSID and log in
            to your account. All set! </p>
            <div className="morera">
                <p>see more</p>
                {nextsmall}
          </div>
        </div>
        <div className="started-sub">
            {/* <img src={DianiApp} alt="" style={{marginLeft:"150px"}} /> */}
        </div>
      </div>
    </>
  );
}

export default Home;
