import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Register from './register/register';
import Login from './login/login';


const App = () => {
  return (
  <Routes>
    <Route path="/" element = {<Login/>}/>

  </Routes>

  );
}

export default App;
