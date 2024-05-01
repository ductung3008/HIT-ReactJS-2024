import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Header.scss";
import userAvatar from "../../assets/images/user-avatar.jpg";

const Header = () => {
  const navigate = useNavigate();
  const access_token = localStorage.getItem("access_token");

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    navigate("/");
    localStorage.clear();
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <h1>Start Bootstrap</h1>
        </Link>
        {!access_token ? (
          <Button title="Login" handleClick={handleLogin} />
        ) : (
          <div className="user">
            <div className="avatar">
              <img src={userAvatar} alt="" />
            </div>
            <p>Hi, I'm Trang</p>
            <div className="dropdown">
              <ul>
                <li>
                  <Link to="/about-us">About us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
