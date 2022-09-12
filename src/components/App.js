import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import '../styles/reset.css';
import '../styles/global.css';

import Login from './Login';
import Signup from './Singup';
import MyWallet from './MyWallet';
import NewEntry from './NewEntry';
import NewExit from './NewExit';

function App() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');

  function getData (response) {
    setUser(response.data);
    setToken(response.data.token);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login getData={getData} />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/MyWallet/:valueId' element={<MyWallet user={user} token={token} />} />
        <Route path='/NewEntry' element={<NewEntry />} />
        <Route path='/NewExit' element={<NewExit />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
