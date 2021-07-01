import React from "react";
import { Link } from "react-router-dom";
import "./comp1.css";

export const Comp1 = () => {
  return (
    <div>
      <div className="Image2" id="home1">
        <img
          className="img2"
          src="https://www.missioned.in/static/media/NavigationLogo.19c19c2f.svg"
        ></img>
        <div className="content1">
          <div class="cont1">
            <span className="head2">MISSIONED CLASSES!</span>
          </div>

          <span className="content11">
            <br />
            Get the best classes by the best Faculty members <br /> in the
            Country
          </span>
        </div>
        <img
          className="bodyimg"
          src="https://www.missioned.in/MissionEd_Store_New/assets/img/hero-img.png"
        />
      </div>
      <Link to="/">
        <button className="btnscomp1">Go to MissionEd Store</button>
      </Link>
    </div>
  );
};
