import './App.css';
import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';
import { CountdownCircleTimer} from "react-countdown-circle-timer";


function Main() {

    const location = useLocation();
    const [play, setPlay] = useState(false);
    const formatRemainingTime = time => {
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
      
        return `${minutes}:${seconds}`;
      };
      const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
          return <div className="timer">Too lale...</div>;
        }
      
        return (
          <div className="timer">
            <div className="text">Remaining time</div>
            <div className="value">{formatRemainingTime(remainingTime)}</div>
          </div>
        );
      };

  return (
    <div>
      <h1>Red Name: {location.state.redName}</h1>
      <h1>Blue Name: {location.state.blueName}</h1>
      <h1>Rounds: {location.state.rounds}</h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying={play}
          duration={100}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => alert("DONE!")}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <button
        onClick={() => {
            setPlay(!play);
        }}
      >
          pause/continue
      </button>
    </div>
  );
}

export default Main;