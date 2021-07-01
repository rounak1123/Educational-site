import React from "react";
import "./comp2.css";
export const Comp2 = () => {
  return (
    <div>
      <div className="head11comp2">OUR COURSES</div>
      <div className="boxes">
        <div className="box11">
          <div className="imgcomp2">
            <img
              src="https://www.missioned.in/MissionEd_Store_New/assets/img/courses/entrepreneneurs.jpg"
              className="imgss"
            />
          </div>
          <div className="contcomp2">
            <div className="headscomp2">
              Entrepreneurship
              <button className="btncomp2">See Courses</button>
            </div>
          </div>
        </div>
        <div className="box11">
          {" "}
          <div className="imgcomp2">
            <img
              src="https://www.missioned.in/MissionEd_Store_New/assets/img/courses/Finance.jpg"
              className="imgss"
            />
          </div>
          <div className="contcomp2">
            {" "}
            <div className="headscomp2">
              Finance
              <a href="https://www.missioned.in/MissionEd_Store_New/Finance.html">
                <button className="btncomp2">See Courses</button>
              </a>
            </div>
          </div>
        </div>
        <div className="box11">
          {" "}
          <div className="imgcomp2">
            <img
              src="https://www.missioned.in/MissionEd_Store_New/assets/img/courses/datascience.jpg"
              className="imgss"
            />
          </div>
          <div className="contcomp2">
            <div className="headscomp2">
              Data Science<button className="btncomp2">See Courses</button>
            </div>
          </div>
        </div>
        <div className="box11">
          {" "}
          <div className="imgcomp2">
            <img
              src="https://www.missioned.in/MissionEd_Store_New/assets/img/courses/Consulting.jpg"
              className="imgss"
            />
          </div>
          <div className="contcomp2">
            <div className="headscomp2">
              Consultancy
              <button className="btncomp2">See Courses</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
