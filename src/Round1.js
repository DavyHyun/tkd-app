import './Scorer.css';
import React, {useState, useEffect} from 'react';
import GamePad from "react-gamepad";
import {useLocation} from 'react-router-dom';
import { CountdownCircleTimer} from "react-countdown-circle-timer";
import Timer from './MyTimer';
import { flushSync } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal'
import {Howl, Howler} from 'howler';
import Clip from './scoreSound.mp3';
const { log } = console;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '200px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

function Round1() {


  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [increment, setInc] = useState(0);


  const [p1FireA, setp1FireA] = useState(0);
  const [p2FireA, setp2FireA] = useState(0);
  const [p1FireB, setp1FireB] = useState(0);
  const [p2FireB, setp2FireB] = useState(0);
  const [p1FireY, setp1FireY] = useState(0);
  const [p2FireY, setp2FireY] = useState(0);
  const [p1FireX, setp1FireX] = useState(0);
  const [p2FireX, setp2FireX] = useState(0);
  const [p1FireRB, setp1FireRB] = useState(0);
  const [p2FireRB, setp2FireRB] = useState(0);
  const [p1FireDown, setp1FireDown] = useState(0);
  const [p2FireDown, setp2FireDown] = useState(0);
  const [p1FireLeft, setp1FireLeft] = useState(0);
  const [p2FireLeft, setp2FireLeft] = useState(0);
  const [p1FireUp, setp1FireUp] = useState(0);
  const [p2FireUp, setp2FireUp] = useState(0);
  const [p1FireRight, setp1FireRight] = useState(0);
  const [p2FireRight, setp2FireRight] = useState(0);
  const [p1FireLB, setp1FireLB] = useState(0);
  const [p2FireLB, setp2FireLB] = useState(0);


  const [round, setRounds] = useState(1);
  const [redScore, setRedScore] = useState(0);
  const [blueScore, setBlueScore] = useState(0);
  const [winner, setWinner] = useState("");
  const [test, setTest] = useState(0);

  const maxRounds = location.state.rounds;

  useEffect(()=> {
    if (!(test === 0)) {
      var sound = new Howl({
        src: [Clip]
      })
      sound.play();
    }
    setTest(1);
  }, [redScore, blueScore])


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
  
  const red1 = () => {
      if (p2FireA === 1) {
        var inc = redScore + 1;
        setRedScore(inc);
        setp1FireA(0);
        setp2FireA(0);
      } else {
        setp1FireA(1);
        setTimeout(() => setp1FireA(0), 2000);
      }

  
  }
  const red11 = () => {
    if (p1FireA === 1) {
      var inc = redScore + 1;
      setRedScore(inc);
      setp1FireA(0);
      setp2FireA(0);
    } else {
      setp2FireA(1);
      setTimeout(() => setp2FireA(0), 2000);
    }
  }

  const red2 = () => {
    if (p2FireB === 1) {
      var inc = redScore + 2;
      setRedScore(inc);
      setp1FireB(0);
      setp2FireB(0);
    } else {
      setp1FireB(1);
      setTimeout(() => setp1FireB(0), 2000);
    }


}
const red22 = () => {
  if (p1FireB === 1) {
    var inc = redScore + 2;
    setRedScore(inc);
    setp1FireB(0);
    setp2FireB(0);
  } else {
    setp2FireB(1);
    setTimeout(() => setp2FireB(0), 2000);
  }
}

const red3 = () => {
  if (p2FireY === 1) {
    var inc = redScore + 3;
    setRedScore(inc);
    setp1FireY(0);
    setp2FireY(0);
  } else {
    setp1FireY(1);
    setTimeout(() => setp1FireY(0), 2000);
  }


}
const red33 = () => {
if (p1FireY === 1) {
  var inc = redScore + 3;
  setRedScore(inc);
  setp1FireY(0);
  setp2FireY(0);
} else {
  setp2FireY(1);
  setTimeout(() => setp2FireY(0), 2000);
}
}

const red4 = () => {
  if (p2FireX === 1) {
    var inc = redScore + 4;
    setRedScore(inc);
    setp1FireX(0);
    setp2FireX(0);
  } else {
    setp1FireX(1);
    setTimeout(() => setp1FireX(0), 2000);
  }


}
const red44 = () => {
if (p1FireX === 1) {
  var inc = redScore + 4;
  setRedScore(inc);
  setp1FireX(0);
  setp2FireX(0);
} else {
  setp2FireX(1);
  setTimeout(() => setp2FireX(0), 2000);
}
}

const red5 = () => {
  if (p2FireRB === 1) {
    var inc = redScore + 5;
    setRedScore(inc);
    setp1FireRB(0);
    setp2FireRB(0);
  } else {
    setp1FireRB(1);
    setTimeout(() => setp1FireRB(0), 2000);
  }


}
const red55 = () => {
if (p1FireRB === 1) {
  var inc = redScore + 5;
  setRedScore(inc);
  setp1FireRB(0);
  setp2FireRB(0);
} else {
  setp2FireRB(1);
  setTimeout(() => setp2FireRB(0), 2000);
}
}

const blue1 = () => {
  if (p2FireDown === 1) {
    var inc = blueScore + 1;
    setBlueScore(inc);
    setp1FireDown(0);
    setp2FireDown(0);
  } else {
    setp1FireDown(1);
    setTimeout(() => setp1FireDown(0), 2000);
  }


}
const blue11 = () => {
if (p1FireDown === 1) {
  var inc = blueScore + 1;
  setBlueScore(inc);
  setp1FireDown(0);
  setp2FireDown(0);
} else {
  setp2FireDown(1);
  setTimeout(() => setp2FireDown(0), 2000);
}
}

const blue2 = () => {
  if (p2FireLeft === 1) {
    var inc = blueScore + 2;
    setBlueScore(inc);
    setp1FireLeft(0);
    setp2FireLeft(0);
  } else {
    setp1FireLeft(1);
    setTimeout(() => setp1FireLeft(0), 2000);
  }


}
const blue22 = () => {
if (p1FireLeft === 1) {
  var inc = blueScore + 2;
  setBlueScore(inc);
  setp1FireLeft(0);
  setp2FireLeft(0);
} else {
  setp2FireLeft(1);
  setTimeout(() => setp2FireLeft(0), 2000);
}
}

const blue3 = () => {
  if (p2FireUp === 1) {
    var inc = blueScore + 3;
    setBlueScore(inc);
    setp1FireUp(0);
    setp2FireUp(0);
  } else {
    setp1FireUp(1);
    setTimeout(() => setp1FireUp(0), 2000);
  }


}
const blue33 = () => {
if (p1FireUp === 1) {
  var inc = blueScore + 3;
  setBlueScore(inc);
  setp1FireUp(0);
  setp2FireUp(0);
} else {
  setp2FireUp(1);
  setTimeout(() => setp2FireUp(0), 2000);
}
}

const blue4 = () => {
  if (p2FireRight === 1) {
    var inc = blueScore + 4;
    setBlueScore(inc);
    setp1FireRight(0);
    setp2FireRight(0);
  } else {
    setp1FireRight(1);
    setTimeout(() => setp1FireRight(0), 2000);
  }


}
const blue44 = () => {
if (p1FireRight === 1) {
  var inc = blueScore + 4;
  setBlueScore(inc);
  setp1FireRight(0);
  setp2FireRight(0);
} else {
  setp2FireRight(1);
  setTimeout(() => setp2FireRight(0), 2000);
}
}

const blue5 = () => {
  if (p2FireLB === 1) {
    var inc = blueScore + 5;
    setBlueScore(inc);
    setp1FireLB(0);
    setp2FireLB(0);
  } else {
    setp1FireLB(1);
    setTimeout(() => setp1FireLB(0), 2000);
  }


}
const blue55 = () => {
if (p1FireLB === 1) {
  var inc = blueScore + 5;
  setBlueScore(inc);
  setp1FireLB(0);
  setp2FireLB(0);
} else {
  setp2FireLB(1);
  setTimeout(() => setp2FireLB(0), 2000);
}
}
    const time = new Date();
    const seconds = location.state.timer;
    if (seconds === "90") { 
      time.setSeconds(time.getSeconds() + 90);
    } else if (seconds === "120") {
      time.setSeconds(time.getSeconds() + 120);
    } else {
      time.setSeconds(time.getSeconds() + 60);
    }
   
    
    const done = () => {
      if (location.state.rounds === 1) {
        if (redScore > blueScore) {
          setWinner("RED");
        } else {
          setWinner("BLUE");
        }
        setShow(true);
      } else {
        navigate("/round2", {state:{redName:location.state.redName, blueName:location.state.blueName, rounds:location.state.rounds, timer: location.state.timer, blueScore: blueScore, redScore: redScore}});
      }
    }

    const redWin = () => {
      setWinner("RED");
      setShow(true);
    }

    const blueWin = () => {
      setWinner("BLUE");
      setShow(true);
    }

    const blueAdd = () => {
      var score = blueScore + 1;
      setBlueScore(score);
    }

    const blueSub = () => {
      var score = blueScore - 1;
      setBlueScore(score);
    }

    const redAdd = () => {
      var score = redScore + 1;
      setRedScore(score);
    }

    const redSub = () => {
      var score = redScore - 1;
      setRedScore(score);
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
          onA={red1}
          onB={red2}
          onY={red3}
          onX={red4}
          onRB={red5}
          onDown={blue1}
          onLeft={blue2}
          onUp={blue3}
          onRight={blue4}
          onLB={blue5}
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
          onA={red11}
          onB={red22}
          onY={red33}
          onX={red44}
          onRB={red55}
          onDown={blue11}
          onLeft={blue22}
          onUp={blue33}
          onRight={blue44}
          onLB={blue55}
        >
          <main></main>
        </GamePad>
      </span>

      <div>

        <Modal isOpen={show} style={customStyles}>
          <h2 style={{fontSize: '60px'}}>{winner} wins! </h2>
          <button onClick={()=>{setShow(false); navigate("/")}}>Return</button>
        </Modal>
        
        <div class="split left">
          <div class="incrementBtns">
            <button onClick={blueAdd} style={{fontSize: '30px'}}>+</button>
            <button onClick={blueSub} style={{fontSize: '30px'}}>-</button>
          </div>
          <div className="score"><h1 style={{fontSize: '300px', marginTop: '50%', marginRight: '10%' }}>{blueScore}</h1></div> 
          <div className="nameBar">
            <h1 style={{color: 'white', fontSize: '50px'}}>{location.state.blueName}</h1>
          </div>
        </div>

        <div class="split right">
        <div class="incrementBtns2">
            <button onClick={redAdd} style={{fontSize: '30px'}}>+</button>
            <button onClick={redSub} style={{fontSize: '30px'}}>-</button>
          </div>
          <div className="score"><h1 style={{fontSize: '300px', marginTop: '50%', marginLeft: '10%' }}>{redScore}</h1></div>    
          <div className="nameBar">
            <h1 style={{color: 'white', fontSize: '50px'}}>{location.state.redName}</h1>
          </div>
        </div>

      </div>
      <div id="overlay">
        <div className="roundBar">
            <button onClick={blueWin}><span style={{color: "blue"}}>win</span></button>
            <span style={{color: "white", fontSize: '25px', textAlign: 'center', fontWeight: 'bold'}}>Round {round}</span>
            <button onClick={redWin}><span style={{color: "red"}}>win</span></button>
        </div>
        <Timer expiryTimestamp={time} onExpire={done} autoStart={false}  />
      </div>

    </div>
  );
}

export default Round1;