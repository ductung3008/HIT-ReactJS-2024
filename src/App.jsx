import React from "react";
import { useState } from "react";
import PostTable from "./components/PostTable/PostTable";
import ToogleButton from "./components/ToogleButton/ToogleButton";

const App = () => {
  return (
    <>
      <ToogleButton></ToogleButton>
      <PostTable></PostTable>;
    </>
  );
};

export default App;
