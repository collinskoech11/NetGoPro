import React from "react";
import {nextsmall} from "../icons";


function Packages() {
  return (
    <>
      <div className="packages">
        <div className="cards">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
        <div className="more">
          <div></div>
          <p>see more</p>
          {nextsmall}
        </div>
      </div>
    </>
  );
}

export default Packages;
