import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login/Login";
import EditProfile from "./pages/EditProfile/EditProfile";

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login />}></Route>
          <Route path="edit-profile" element={<EditProfile />}></Route>
        </Route>
      </Routes>
      <div
        style={{
          display: "flex",
          position: "fixed",
          top: 20,
          right: 20,
          gap: 20,
          fontSize: "18px",
        }}
      >
        <Link to="/login">Login</Link>
        <Link to="/edit-profile">Edit Profile</Link>
      </div>
    </BrowserRouter>
  </>
);

export default App;
