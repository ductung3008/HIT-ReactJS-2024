import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Authentication from "./layouts/Authentication";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

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
      path: "/about-us",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <AboutUs />,
        },
      ],
    },
    {
      path: "/contact",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Contact />,
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
      path: "/register",
      element: <Authentication />,
      children: [
        {
          path: "",
          element: <Register />,
        },
      ],
    },
  ]);

  return router;
};

export default App;
