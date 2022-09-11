import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import '../styles/reset.css';
import '../styles/global.css';

import Login from './Login';
import Signup from './Singup';
import MyWallet from './MyWallet';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/MyWallet' element={<MyWallet />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
