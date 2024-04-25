import React from "react";
import "./Banner.scss";

const Banner = ({ title, children }) => {
  const signUpTitle = "Ready to get started? Sign up now!";
  return (
    <section
      className={`banner ${title === signUpTitle ? "sign-up-banner" : ""}`}
    >
      <div className="container">
        <h1>
          {title
            ? title
            : "Generate more leads with a professional landing page!"}
        </h1>
        {children}
      </div>
    </section>
  );
};

export default Banner;
