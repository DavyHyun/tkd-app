import './App.css';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


function Start() {
    const navigate = useNavigate();
    const [redName, setRedName] = useState('');
    const [blueName, setBlueName] = useState('');
    const [rounds, setRounds] = useState("1");

    const startGame = () => {
        navigate("/main", {state:{redName:redName, blueName:blueName, rounds:rounds}})
    }


  return (
    <div>
        <h2>BIGDIK HYUN TAEKWONDO FIGHTER SHIT</h2>
        <form>
            <label>Red Side Name:</label>
            <input 
                type="text"
                required
                value={redName}
                onChange={(r) => setRedName(r.target.value)}
            />
            <label>Blue Side Name:</label>
            <input 
                type="text"
                required
                value={blueName}
                onChange={(b) => setBlueName(b.target.value)}
            />
            <label># of Rounds:</label>
            <select
                 value={rounds}
                 onChange={(e) => setRounds(e.target.value)}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </form>

        <button 
            onClick={startGame}
        >
            start game 
        </button>
      <h1>start page</h1>
    </div>
  );
}

export default Start;