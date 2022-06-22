import './App.css';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useGamepads } from 'react-gamepads';

const buttonLabels = [
    "A",
    "B",
    "X",
    "Y",
    "L1",
    "R1",
    "L2",
    "R2",
    "Back",
    "Start",
    "L3",
    "R3",
    "UP",
    "DOWN",
    "LEFT",
    "RIGHT",
    "XBOX",
  ]
  
  const axesLabels = [
    "LX",
    "LY",
    "RX",
    "RY",
  ]


function GamePad() {
    const navigate = useNavigate();

const [gamepads, setGamepads] = useState([]);
  useGamepads(_gamepads => {
    setGamepads(Object.values(_gamepads))
  })
 

  return (
    <div
      className="App"
    >
      {gamepads.length && gamepads.map(gp => {
        return (
          <div>
            <div><span>ID:</span>{gp.id}</div>
            {gp.buttons.map((button, index) => {
              return (
                <div><span>{buttonLabels[index]}:</span><span>{button.value}</span></div>
              )
            })}
          </div>
        )
      })}
    </div>
  );
}

export default GamePad;