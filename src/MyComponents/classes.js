import React from "react";
import { Link } from "react-router-dom";
import "./classes.css";
export const Classes = () => {
  return (
    <div id="classesid">
      <h1 className="head1">Earn coins by Studying</h1>
      <div className="imgs">
        <img
          src="https://www.missioned.in/MissionEd_Store_New/assets/img/Graphic-Design-Courses.jpg"
          className="imgcls1"
        ></img>
        <img
          src="https://www.missioned.in/MissionEd_Store_New/8-12%20classes%20img.jpg"
          className="imgcls2"
        ></img>
      </div>
      <div className="btns1">
        {/* <a href="https://www.missioned.in/MissionEd_Store_New/MissionEd%20Classes.html"> */}
        <Link to="/classs">
          <button className="btns11">
            Go to MISSIONED Classes(for College students)
          </button>
          {/* </a>   */}
        </Link>
        <button className="btns12">
          Go to MISSIONED Classes(for Class 8-12)
        </button>
      </div>
    </div>
  );
};
