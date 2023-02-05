import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPanel from "./components/AdminPanel/0_Layout/AdminPanel";

const App = () => {
  return (
    <Routes>
      <Route path="/adminpanel" element={<AdminPanel />} />
    </Routes>
  )
};
export default App;
