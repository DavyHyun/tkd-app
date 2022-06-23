import './Scorer.css';
import React, {useState} from 'react';
import GamePad from "react-gamepad";
import {useLocation} from 'react-router-dom';
import { CountdownCircleTimer} from "react-countdown-circle-timer";
import Timer from './MyTimer';
import { flushSync } from 'react-dom';
const { log } = console;

function Main() {
  const location = useLocation();

  const [increment, setInc] = useState(0);
  const [p1Fire, setp1Fire] = useState(0);
  const [p2Fire, setp2Fire] = useState(0);
  const [round, setRounds] = useState(1);
  const maxRounds = location.state.rounds;

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
    const [play, setPlay] = useState(false);
    const time = new Date();
    const seconds = location.state.timer;
    console.log(seconds)
    if (seconds === "90") { 
      time.setSeconds(time.getSeconds() + 90);
    } else if (seconds === "120") {
      time.setSeconds(time.getSeconds() + 120);
    } else {
      time.setSeconds(time.getSeconds() + 60);
    }
   
    
    const done = () => {
      alert("expiredd")
    }
    

  return (
    <div className="over">
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
      <div>
        
        <div class="split left">
          <div class="incrementBtns">
            <button style={{fontSize: '30px'}}>+</button>
            <button style={{fontSize: '30px'}}>-</button>
          </div>
          <div className="score"><h1 style={{fontSize: '300px', marginTop: '50%', marginRight: '10%' }}>1</h1></div> 
          <div className="nameBar">
            <h1 style={{color: 'white', fontSize: '50px'}}>{location.state.blueName}</h1>
          </div>
        </div>

        <div class="split right">
        <div class="incrementBtns2">
            <button style={{fontSize: '30px'}}>+</button>
            <button style={{fontSize: '30px'}}>-</button>
          </div>
          <div className="score"><h1 style={{fontSize: '300px', marginTop: '50%', marginLeft: '10%' }}>1</h1></div>    
          <div className="nameBar">
            <h1 style={{color: 'white', fontSize: '50px'}}>{location.state.redName}</h1>
          </div>
        </div>

      </div>
      <div id="overlay">
        <div className="roundBar"><span style={{color: "white", fontSize: '25px', textAlign: 'center', fontWeight: 'bold'}}>Round {round}</span></div>
        <Timer expiryTimestamp={time} onExpire={done} autoStart={false}  />
      </div>

    </div>
  );
}

export default Main;