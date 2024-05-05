import React from "react";
import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import Features from "../../components/Features/Features";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <Features />
      <Testimonials />
    </>
  );
};

export default Home;
