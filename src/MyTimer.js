import React, { useEffect } from 'react';
import './Timer.css';
import { useTimer } from 'react-timer-hook';

function MyTimer({expiryTimestamp, onExpire, autoStart}) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire, autoStart});

  return (
    <div className="timner-container">
      <div style={{fontSize: '100px', color: 'white'}}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <div className='button-container'>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Stop</button>
      <button onClick={resume}>Resume</button>
      </div>
    </div>
  );
  
}

export default MyTimer;

