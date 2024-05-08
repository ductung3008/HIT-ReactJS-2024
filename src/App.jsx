import React from "react";
import { Link, useRoutes } from "react-router-dom";
import CountUseReducer from "./pages/CountUseReducer/CountUseReducer";
import ToDoApp from "./pages/ToDoApp/ToDoApp";

const App = () => {
  const router = useRoutes([
    {
      path: "/count",
      element: <CountUseReducer />,
    },
    {
      path: "/to-do-app",
      element: <ToDoApp />,
    },
  ]);

  return router;
};

export default App;
