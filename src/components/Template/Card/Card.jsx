import React from "react";
import "./Card.scss";

const Card = ({ user_data }) => {
  return (
    <div className="card">
      <div className="card-info">
        <div className="avatar">
          <img src={user_data.avatar} alt="" />
        </div>
        <h2>{user_data.name}</h2>
        <p>{user_data.address.city}</p>
        <div className="socials">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-discord"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
