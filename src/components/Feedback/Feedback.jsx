import React from "react";
import "./Feedback.scss";
import fb1 from "../../assets/images/fb-1.jpg";
import fb2 from "../../assets/images/fb-2.jpg";
import fb3 from "../../assets/images/fb-3.jpg";

const Feedback = () => {
  return (
    <section className="feedback">
      <div className="container">
        <h2 className="fb-title">What people are saying...</h2>
        <div className="fbs">
          <div className="fb-item">
            <div className="fb-avt">
              <img src={fb1} alt="" />
            </div>
            <h3>Margaret E.</h3>
            <p>"This is fantastic! Thanks so much guys!"</p>
          </div>
          <div className="fb-item">
            <div className="fb-avt">
              <img src={fb2} alt="" />
            </div>
            <h3>Fred S.</h3>
            <p>
              "Bootstrap is amazing. I've been using it to create lots of super
              nice landing pages."
            </p>
          </div>
          <div className="fb-item">
            <div className="fb-avt">
              <img src={fb3} alt="" />
            </div>
            <h3>Sarah W.</h3>
            <p>
              "Thanks so much for making these free resources available to us!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
