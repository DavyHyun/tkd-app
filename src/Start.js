import './Form.css';
import React, {startTransition, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import controller from './controlelr.jpg';
import GamePad from "react-gamepad";


function Start() {
    const navigate = useNavigate();
    const [redName, setRedName] = useState('');
    const [blueName, setBlueName] = useState('');
    const [rounds, setRounds] = useState(1);
    const [timer, setTime] = useState(60);
    const [controllers, setControllers] = useState(1);

    const [c1, setC1] = useState(false);
    const [c2, setC2] = useState(false);
    const [c3, setC3] = useState(false);

    const startGame = () => {
        navigate("/round1", {state:{redName:redName, blueName:blueName, rounds:rounds, timer: timer, controllers: controllers}})
    }

    const handleConnect = (index) => {
        if (index+"" === "0") {
            setC1(true);
        } else if (index+"" === "1") {
            setC2(true);
        } else {
            setC3(true);
        }
      };
      
      const handleDisconnect = (index) => {
        if (index+"" === "0") {
            setC1(false);
        } else if (index+"" === "1") {
            setC2(false);
        } else {
            setC3(false);
        }
      };


  return (
    <div className="container">
        <span>
        <GamePad
         gamepadIndex={0}
          onConnect={handleConnect}
          onDisconnect={handleDisconnect}
        >
          <main></main>
        </GamePad>
      </span>
      <span>
        <GamePad
         gamepadIndex={1}
          onConnect={handleConnect}
          onDisconnect={handleDisconnect}
        >
          <main></main>
        </GamePad>
      </span>
      <span>
        <GamePad
         gamepadIndex={2}
          onConnect={handleConnect}
          onDisconnect={handleDisconnect}
        >
          <main></main>
        </GamePad>
      </span>

        <h5 className="form-title">TAEKWONDO SCORER</h5>
        <div className="form-box">
        <form>
            <label id="name">Red Side Name</label>
            <input 
                type="text"
                className='input1'
                required
                value={redName}
                onChange={(r) => setRedName(r.target.value)}
            />
            <label id="name">Blue Side Name</label>
            <input 
                type="text"
                className='input2'
                required
                value={blueName}
                onChange={(b) => setBlueName(b.target.value)}
            />
            <label># of Rounds:</label>
            <select
                 value={rounds}
                 onChange={(e) => setRounds(e.target.value)}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>
            <label>Time per Round:</label>
            <select
                 value={timer}
                 onChange={(e) => setTime(e.target.value)}
            >
                <option value={60}>1:00</option>
                <option value={90}>1:30</option>
                <option value={120}>2</option>
            </select>
            <label># of Controllers: </label>
            <select
                 value={controllers}
                 onChange={(e) => setControllers(e.target.value)}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>
        </form>

        </div>
        <button 
            onClick={startGame}
            className="nextBtn"
        >
            Start
        </button>
        <div className="bottom">
            <img className="img" src={controller} alt="" />
            <div className="text">
                <h1>INSTRUCTIONS:</h1>
                <p1>1. Make sure alll controllers you want to use are connected.</p1>
                <p1>2. All controllers must press the same button within a 2 second interval</p1>
                <p1>in order for the point to count.</p1>
                <p1>3. DO NOT SPAM BUTTONS. This will result in incorrect inputs.</p1>
                <p1>Press firmly once.</p1>
                <p1>4.For any questions/concerns/suggestions, email davyhyun@cs.washington.edu</p1>
            </div>
            <div className="ct">
                <h2>CONTROLLER STATUS:</h2>
                <p1>Controller 1: {c1 ? "Connected" : "Disconnected"}</p1>
                <p1>Controller 2: {c2 ? "Connected" : "Disconnected"}</p1>
                <p1>Controller 3: {c3 ? "Connected" : "Disconnected"}</p1>
            </div>
        </div>
        
        
    </div>
  );
}

export default Start;