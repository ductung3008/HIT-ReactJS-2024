import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import CountUseReducer from "./pages/CountUseReducer/CountUseReducer";
import ToDoApp from "./pages/ToDoApp/ToDoApp";

const App = () => {
  return (
    <>
      <Link to="/count">Count</Link>
      <br />
      <Link to="/to-do-app">To Do App</Link>
      <Routes>
        <Route path="/count" element={<CountUseReducer></CountUseReducer>} />
        <Route path="/to-do-app" element={<ToDoApp></ToDoApp>} />
      </Routes>
    </>
  );
};

export default App;
