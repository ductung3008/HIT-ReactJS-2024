import React from "react";
import "./Banner.scss";
import Button from "../Button/Button";
import BannerImg from "../../assets/images/banner-img.png";

const Banner = () => {
  return (
    <section className="banner">
      <h2 className="title">Save your data storage here.</h2>
      <p className="desc">
        Data Warehouse is a data storage area that has been tested for security,
        so you can store your data here safely but not be afraid of being stolen
        by others.
      </p>
      <Button title="Learn more" width={"168.944px"} height={"59.627px"} />
      <div className="img">
        <img src={BannerImg} alt="" />
      </div>
    </section>
  );
};

export default Banner;
