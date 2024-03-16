import React from "react";
import PostTable from "./components/PostTable/PostTable";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import Chatbot from "./components/Chatbot/Chatbot";

const App = () => {
  return (
    <>
      <ToggleButton></ToggleButton>
      <PostTable></PostTable>
      <Chatbot></Chatbot>
    </>
  );
};

export default App;
