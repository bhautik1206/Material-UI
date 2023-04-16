// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Maincontent from './component/Maincontent';
// import { BrowserRouter as  Router , Switch   , Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Maincontent></Maincontent>
    </div>
  );
}

export default App;
