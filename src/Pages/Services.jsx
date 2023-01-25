import React from "react";
import {Btn, prev, next} from "../icons"

function Services() {
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
      <div className="button-container">{Btn}</div>
      <div className="proccess">
        <div className="sub-process">
            <div className="rec">

            </div>
        </div>
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
        
      </div>
    </>
  );
}

export default Services;
