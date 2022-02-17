import './App.css';
// import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom'

// react-bootstrap pages
import NavBar from "./pages/NavBar"
import Main from "./pages/Main"
import Footer from "./pages/Footer"
import Account from "./pages/Account"

function App() {
  

  return (
    <div className="App" id="header">
      <NavBar />  
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="connectWallet" element={<Account />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;