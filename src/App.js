import React from 'react';
import Navbar from './components/Navbar';  
import Home from './components/Home';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route> 
          <Route path="*" element={<div>404 Not Found</div>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
