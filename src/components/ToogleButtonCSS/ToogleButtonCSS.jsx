import React from "react";

const ToogleButtonCSS = () => {
  return (
    <>
      <button className="m-4">
        <input
          type="checkbox"
          name="toogleButton"
          id="toogleButton"
          className="peer hidden"
        />
        <label
          htmlFor="toogleButton"
          className="peer relative inline-flex h-[50px] w-[100px] items-center rounded-full bg-[#c3c3c3] before:absolute before:right-0 before:mx-4 before:text-lg before:font-bold before:text-white before:content-['OFF'] after:absolute after:mx-1 after:block after:size-[40px] after:rounded-full after:bg-white after:transition-all after:duration-300 hover:cursor-pointer peer-checked:bg-[#00bfff] peer-checked:before:left-0 peer-checked:before:right-full peer-checked:before:content-['ON'] peer-checked:after:translate-x-[calc(100px-8px-40px)]"
        ></label>
      </button>
    </>
  );
};

export default ToogleButtonCSS;
