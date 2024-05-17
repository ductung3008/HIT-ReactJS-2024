import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.scss";
import Button from "../../components/Button/Button";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const headerContainer = useRef();
  const isLogin = localStorage.getItem("access_token") ? true : false;

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        headerContainer.current.style.padding = "20px 0";
      } else {
        headerContainer.current.style.padding = "48px 0";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  const hideButton = location.pathname === "/login";

  return (
    <header>
      <div className="container" ref={headerContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="36"
          viewBox="0 0 49 36"
          fill="none"
        >
          <rect
            y="15.8323"
            width="19.8758"
            height="19.8758"
            rx="9.93789"
            fill="#9C69E2"
          />
          <rect
            x="28.8203"
            y="0.925415"
            width="19.8758"
            height="34.7826"
            rx="9.93789"
            fill="#F063B8"
          />
        </svg>
        {!hideButton && !isLogin && (
          <Button
            title={"Sign In"}
            width="208.696px"
            height={"59.627px"}
            handleClick={handleLogin}
          />
        )}
        {isLogin && (
          <div>
            <Button
              title={"Profile"}
              width="208.696px"
              height={"59.627px"}
              handleClick={() => navigate("/profile")}
            />
            <Button
              title={"Logout"}
              width="208.696px"
              height={"59.627px"}
              handleClick={() => {
                localStorage.removeItem("access_token");
                alert("Logout successful. See you again!");
                navigate("/");
              }}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
