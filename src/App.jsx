import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home/Home";
import StartBootstrap from "./pages/Start-Bootstrap/Home/Home";
import TodoApp from "./pages/ToDoApp/ToDoApp";
import Login from "./pages/LoginV1/LoginV1";

const App = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/start-bootstrap",
          element: <StartBootstrap />,
        },
        {
          path: "/todo-app",
          element: <TodoApp />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return router;
};

export default App;
