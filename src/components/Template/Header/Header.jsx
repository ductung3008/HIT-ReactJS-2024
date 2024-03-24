import React from "react";
import Toggle from "../Toggle/Toggle";
import headerLogo from "../../../assets/images/header-logo.png";
import userPageHeader from "./Header.module.scss";
import { useState } from "react";

const Header = () => {
  const [isShow, setShow] = useState(false);

  const handleClickNavmb = () => {
    setShow(!isShow);
  };

  return (
    <header className={userPageHeader["header"]}>
      <div className={userPageHeader["container"]}>
        <div>
          <img src={headerLogo} alt="" />
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#" className={userPageHeader["active"]}>
            Users
          </a>
          <a href="#">Blogs</a>
          <a href="#">Service</a>
          <a href="#">Contact</a>
        </nav>
        <div className={userPageHeader["toggle-btn"]}>
          <Toggle></Toggle>
        </div>
        <div
          className={userPageHeader["nav-mb-icon"]}
          onClick={handleClickNavmb}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
        <nav
          className={`${userPageHeader["nav-mb"]} ${isShow && userPageHeader["active"]}`}
        >
          <a href="#">Home</a>
          <a href="#" className={userPageHeader["active"]}>
            Users
          </a>
          <a href="#">Blogs</a>
          <a href="#">Service</a>
          <a href="#">Contact</a>
          <div className={userPageHeader["toggle-btn-mb"]}>
            <Toggle></Toggle>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
