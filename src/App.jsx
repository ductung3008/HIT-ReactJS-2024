import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Authentication from "./layouts/Authentication";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";

const App = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <Authentication />,
      children: [
        {
          path: "",
          element: <Login />,
        },
      ],
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);

  return router;
};

export default App;
