import React from "react";
import Banner from "../../components/Banner/Banner";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <Banner title="Contact Start Bootstrap">
        <div className="form">
          <input type="text" placeholder="Email Address" />
          <button className="btn">Contact</button>
        </div>
      </Banner>
    </div>
  );
};

export default Contact;
