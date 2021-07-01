import React from "react";
import "./todo.css";
import { Router } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const fadeImages = [
  " https://www.missioned.in/MissionEd_Store_New/assets/img/items/1.jpg",
  "https://www.missioned.in/MissionEd_Store_New/assets/img/items/2.jpg",
  "https://www.missioned.in/MissionEd_Store_New/assets/img/items/3.jpg",
  "https://www.missioned.in/MissionEd_Store_New/assets/img/items/4.jpg",
  "https://www.missioned.in/MissionEd_Store_New/assets/img/items/5.jpg",
  "https://www.missioned.in/MissionEd_Store_New/assets/img/items/6.jpg",
  "https://www.missioned.in/MissionEd_Store_New/assets/img/items/7.jpg",
  " https://www.missioned.in/MissionEd_Store_New/assets/img/items/8.jpg",
];

const fadeProperties = {
  duration: 2500,
  transitionDuration: 800,
  infinite: true,
  indicators: true,
};

export const Todo = () => {
  return (
    <>
      <div className="storeimgs" id="deals12">
        <h2 className="deals"> Amazing deals of the day!</h2>
        <Fade {...fadeProperties}>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[0]} />
            </div>

            <h2>
              <button className="btn">BUY NOW! </button>
            </h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[1]} />
            </div>

            <h2>
              <button className="btn">BUY NOW! </button>
            </h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[2]} />
            </div>

            <h2>
              <button className="btn">BUY NOW! </button>
            </h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[3]} />
            </div>

            <h2>
              <button className="btn">BUY NOW! </button>
            </h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[4]} />
            </div>

            <h2>
              <button className="btn">BUY NOW! </button>
            </h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[5]} />
            </div>

            <h2>
              <button className="btn">BUY NOW! </button>
            </h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[6]} />
            </div>

            <h2>
              <button className="btn">BUY NOW! </button>
            </h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[7]} />
            </div>

            <h2>
              <button className="btn">BUY NOW! </button>
            </h2>
          </div>
        </Fade>
      </div>
    </>
  );
};
