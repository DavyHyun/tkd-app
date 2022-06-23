import * as React from "react";
import GamePad from "react-gamepad";
import {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import './Scorer.css';

import Timer from './MyTimer';

const { log } = console;



function GamePadTest() {
  const [increment, setInc] = useState(0);
  const [p1Fire, setp1Fire] = useState(0);
  const [p2Fire, setp2Fire] = useState(0);

  const handleConnect = (index) => {
    log(`Connected - Device ${index}`);
  };
  
  const handleDisconnect = (index) => {
    log(`Disconnected - Device ${index}`);
  };
  
  const handleButton = (buttonName, pressed) => {
    log(`${buttonName} is ${pressed ? "pressed" : "not pressed"}.`);
  };
  
  const handleAxis = (axisName, value, previousValue) => {
    log(`${axisName} is ${value}. It was ${previousValue}.`);
  };
  
  const handleInc1 = () => {
      if (p2Fire === 1) {
        var inc = increment + 1;
        setInc(inc);
        setp1Fire(0);
        setp2Fire(0);
      } else {
        setp1Fire(1);
        setTimeout(() => setp1Fire(0), 2000);
      }

  
  }
  const handleInc2 = () => {
    if (p1Fire === 1) {
      var inc = increment + 1;
      setInc(inc);
      setp1Fire(0);
      setp2Fire(0);
    } else {
      setp2Fire(1);
      setTimeout(() => setp2Fire(0), 2000);
    }
  }
  return (
    <div className="gamepad">
      <span>
        <GamePad
         gamepadIndex={0}
          onConnect={handleConnect}
          onDisconnect={handleDisconnect}
          onButtonChange={handleButton}
          onAxisChange={handleAxis}
          onA={handleInc1}
        >
          <main></main>
        </GamePad>
      </span>
      <span>
        <GamePad
         gamepadIndex={1}
          onConnect={handleConnect}
          onDisconnect={handleDisconnect}
          onButtonChange={handleButton}
          onAxisChange={handleAxis}
          onA={handleInc2}
        >
          <main></main>
        </GamePad>
      </span>
    </div>
  );}


export default GamePadTest