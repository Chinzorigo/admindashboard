import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./register/register";
import Login from "./login/login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
export default App;
