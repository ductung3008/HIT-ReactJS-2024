import React from "react";
import userPageFooter from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={userPageFooter["footer"]}>
      Trang web được thiết kế bởi trang{" "}
      <a href="https://www.freepik.com/">freepik.com</a>
    </footer>
  );
};

export default Footer;
