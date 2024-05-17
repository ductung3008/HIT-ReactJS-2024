import React from "react";
import "./IntroductionCard.scss";
import bmo from "../../assets/images/bmo.jpg";

const IntroductionCard = () => {
  return (
    <div className="intro-card">
      <div className="card">
        <div className="avatar">
          <img src={bmo} alt="" />
        </div>
        <div className="info">
          <p className="name">ductung3008</p>
          <p className="role">Student</p>
          <p className="school">Hanoi University of Industry</p>
        </div>
        <div className="social">
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <button>Contact me</button>
      </div>
    </div>
  );
};

export default IntroductionCard;
