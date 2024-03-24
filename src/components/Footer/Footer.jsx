import React from "react";
import homeFooter from "./Footer.module.scss";

const footerItems = [
  {
    title: "Navigation",
    items: ["Pricing", "Features", "Blog", "Contact"],
  },
  {
    title: "Services",
    items: ["Team", "Collaboration", "Todos", "Events"],
  },
  {
    title: "Downloads",
    items: ["Get from the App Store", "Get from the Play Store"],
  },
];

const socials = [
  "fa-brands fa-twitter",
  "fa-brands fa-facebook",
  "fa-brands fa-instagram",
  "fa-brands fa-linkedin",
];

const Footer = () => {
  return (
    <footer className={homeFooter["footer"]}>
      <div className={homeFooter["container"]}>
        <div className={homeFooter["content"]}>
          <div className={homeFooter["content-left"]}>
            <h3>About SoftLand</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea
              delectus pariatur, numquam aperiam dolore nam optio dolorem
              facilis itaque voluptatum recusandae deleniti minus animi.
            </p>
            <div className={homeFooter["socials"]}>
              {socials.map((s, index) => (
                <a href="#" key={index}>
                  <i className={s}></i>
                </a>
              ))}
            </div>
          </div>
          <div className={homeFooter["content-right"]}>
            {footerItems.map((fi, index) => (
              <div className={homeFooter["col"]} key={index}>
                <h3>{fi.title}</h3>
                <ul>
                  {fi.items.map((i, index) => (
                    <li key={index}>
                      <a href="#">{i}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={homeFooter["copyright"]}>
            <p>© Copyright SoftLand. All Rights Reserved</p>
            <p>
              Designed by <a href="#">Someone</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
