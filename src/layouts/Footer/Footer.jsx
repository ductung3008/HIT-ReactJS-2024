import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="left">
          <ul>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Sign up</Link>
            </li>
          </ul>
          <p className="copyright">
            © Your Website 2023. All Rights Reserved.
          </p>
        </div>
        <div className="right">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
