import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import '../styles/reset.css';
import '../styles/global.css';

import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
