import './Form.css';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


function Start() {
    const navigate = useNavigate();
    const [redName, setRedName] = useState('');
    const [blueName, setBlueName] = useState('');
    const [rounds, setRounds] = useState(1);
    const [timer, setTime] = useState(60);

    const startGame = () => {
        navigate("/round1", {state:{redName:redName, blueName:blueName, rounds:rounds, timer: timer}})
    }


  return (
    <div className="container">
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
        </form>

        </div>
        <button 
            onClick={startGame}
            className="nextBtn"
        >
            Start
        </button>
    </div>
  );
}

export default Start;