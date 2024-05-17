import React from "react";
import { Link } from "react-router-dom";
import useStore from "../../hooks/useStore";
import { actions } from "../../store";
import "./Header.scss";

const Header = () => {
  const [{ theme }, dispatch] = useStore();
  return (
    <header>
      <div className="logo">
        <Link to="/">LOGO</Link>
      </div>
      <div className="menu">
        <Link to="/start-bootstrap">Start bootstrap</Link>
        <Link to="/todo-app">Todo App</Link>
        <Link to="/login">Login</Link>
        <div onClick={() => dispatch(actions.setTheme())}>
          {!theme ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
