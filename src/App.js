import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Films from './pages/Films';
import Inscription from './pages/Inscription';
import Connection from './pages/Connection';
import UserList from './pages/UserList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Header from './components/Header';

const App = () => {
  const [isConnected, setIsConnected] = useState(false);


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user.uid ? setIsConnected(true) : setIsConnected(false);
    });
  }, [setIsConnected]);

  return (
    <BrowserRouter>
    <Header isConnected={isConnected} setIsConnected={setIsConnected}/>
      <Routes>
        {!isConnected &&
        <Route path="/" element={<Home />} />
        }
        <Route path="/" element={<Films />} />
        <Route path="/Inscription" element={<Inscription isConnected={isConnected} />} />
        <Route path="/Connection" element={<Connection  isConnected={isConnected}  />} />
        <Route path="/coup-de-coeur" element={<UserList />} />
        <Route path="*" element={<Films />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
