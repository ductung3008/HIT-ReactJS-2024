import React from "react";
import { useState, useEffect } from "react";
import "./Header.module.scss";
import homeHeader from "./Header.module.scss";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const [headerStyle, setHeaderStyle] = useState({
    height: "80px",
    backgroundColor: "transparent",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHeaderStyle({
          height: "60px",
          backgroundColor: "rgba(39,70,133,0.8)",
        });
      } else {
        setHeaderStyle({
          height: "80px",
          backgroundColor: "transparent",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickNavmb = () => {
    setIsShow(!isShow);
    console.log(isShow);
  };

  return (
    <header className={homeHeader["header"]} style={headerStyle}>
      <div className={homeHeader["container"]}>
        <div className={homeHeader["logo"]}>
          <h1>
            <a href="#">SoftLand</a>
          </h1>
        </div>
        <nav>
          <ul className={homeHeader["nav"]}>
            <li>
              <a href="#" className={homeHeader["nav--active"]}>
                Home
              </a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li className={homeHeader["nav-lv2-dropdown"]}>
              <a href="#">
                Drop Down
                <i className="fa-regular fa-angle-down"></i>
              </a>
              <ul className={homeHeader["nav-lv2"]}>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li className={homeHeader["nav-lv3-dropdown"]}>
                  <a href="#">
                    Deep Drop Down
                    <i className="fa-regular fa-angle-right"></i>
                  </a>
                  <ul className={homeHeader["nav-lv3"]}>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <div className={homeHeader["nav-mb-toggle"]}>
            <i className="fa-solid fa-bars" onClick={handleClickNavmb}></i>
            <div
              className={`${homeHeader["nav-mb"]} ${isShow && homeHeader["active"]}`}
            >
              <ul>
                <li>
                  <a href="#" className={homeHeader["nav-mb--active"]}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Drop Down</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
              <i
                className={`${homeHeader["close"]} fa-solid fa-xmark`}
                onClick={handleClickNavmb}
              ></i>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
