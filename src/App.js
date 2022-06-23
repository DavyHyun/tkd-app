import './App.css';
import React from 'react';
import Round1Comp from './Round1';
import Round2Comp from './Round2';
import Round3Comp from './Round3';
import StartComp from './Start';
import GamePad from './GamePadTest'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartComp />} />
        <Route path="/round1" element={<Round1Comp />} />
        <Route path="/round2" element={<Round2Comp />} />
        <Route path="/round3" element={<Round3Comp />} />
        <Route path="/gp" element={<GamePad />} />
      </Routes>
    </Router>
  );
}

export default App;
