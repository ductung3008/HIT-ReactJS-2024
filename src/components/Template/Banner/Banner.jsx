import React from "react";
import userPageBanner from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={userPageBanner["banner"]}>
      <div className={userPageBanner["container"]}>
        <h1>USERS PAGE</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          consequuntur excepturi temporibus, quod in odio voluptatem reiciendis
          rem earum iusto?
        </p>
      </div>
    </div>
  );
};

export default Banner;
