import React from "react";
import "./Testimonials.scss";
import avatar from "../../assets/images/testimonials.jfif";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="title">Testimonials</h2>
        <div className="slide">
          <div className="slide-box">
            <div className="avatar">
              <img src={avatar} alt="" />
            </div>
            <div className="content">
              <div className="name">John Fang</div>
              <a className="website">wordfaang.com</a>
              <p>
                Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                aenean nam laoreet nulla.
              </p>
            </div>
          </div>
          <div className="arrow-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="17"
              viewBox="0 0 43 17"
              fill="none"
            >
              <path
                d="M35.9264 1.1288L41.9371 8.14134L35.9264 15.1539"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M41.9375 8.14136L1.86584 8.14136"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="arrow-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="17"
              viewBox="0 0 43 17"
              fill="none"
            >
              <path
                d="M7.06298 1.70121L1.05225 8.71374L7.06298 15.7263"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.05222 8.71374L41.1238 8.71375"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="dots">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="57"
              height="11"
              viewBox="0 0 57 11"
              fill="none"
            >
              <circle cx="5.98929" cy="5.15207" r="5.00894" fill="#F063B8" />
              <circle cx="23.5205" cy="5.65303" r="2.50447" fill="white" />
              <circle cx="38.5473" cy="5.65303" r="2.50447" fill="white" />
              <circle cx="53.5742" cy="5.65303" r="2.50447" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
