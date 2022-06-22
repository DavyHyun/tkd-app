import './App.css';
import React from 'react';
import MainComp from './Main';
import StartComp from './Start';
import GamePad from './GamePadTest'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartComp />} />
        <Route path="/main" element={<MainComp />} />
        <Route path="/gp" element={<GamePad />} />
      </Routes>
    </Router>
  );
}

export default App;
