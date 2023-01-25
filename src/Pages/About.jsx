import React from "react";
import {next, prev, Btn} from "../icons"

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
      <div className="button-container">{Btn}</div>
    </>
  );
}

export default About;
