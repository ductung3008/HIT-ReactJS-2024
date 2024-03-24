import React from "react";
import { useState } from "react";
import "./App.scss";
import UserPageHeader from "./components/Template/Header/Header";
import UserPageBanner from "./components/Template/Banner/Banner";
import UserPageCardLists from "./components/Template/CardLists/CardLists";
import users_data from "./data/users.json";
import UserPageFooter from "./components/Template/Footer/Footer";
import HomeHeader from "./components/Header/Header";
import HomeBanner from "./components/Banner/Banner";
import HomeSection from "./components/Section/Section";
import HomeFooter from "./components/Footer/Footer";

const App = () => {
  const [isOn, setIsOn] = useState(false);

  const handleSwitch = () => {
    setIsOn(!isOn);
  };

  const buttonStyle = {
    bottom: "0",
    right: "0",
    position: "fixed",
    background: "red",
    zIndex: "99999",
    color: "white",
    padding: "8px",
    border: "0",
  };

  return (
    <>
      <button className="switch-btn" style={buttonStyle} onClick={handleSwitch}>
        Click here to switch website
      </button>
      {isOn && (
        <>
          <UserPageHeader></UserPageHeader>
          <UserPageBanner></UserPageBanner>
          <UserPageCardLists users_data={users_data}></UserPageCardLists>
          <UserPageFooter></UserPageFooter>
        </>
      )}
      {!isOn && (
        <>
          <HomeHeader></HomeHeader>
          <HomeBanner></HomeBanner>
          <HomeSection></HomeSection>
          <HomeFooter></HomeFooter>
        </>
      )}
    </>
  );
};

export default App;
