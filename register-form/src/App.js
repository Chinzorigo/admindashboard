import React from 'react';
import Home from './home/Home';
import Register from './register/register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
  <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/register" element = {<Register/>}/>
  </Routes>

  );
}

export default App;
