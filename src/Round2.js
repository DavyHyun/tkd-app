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

function Round2() {


  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [increment, setInc] = useState(0);


  const [aPress, setAPress] = useState(0);
  const [bPress, setBPress] = useState(0);
  const [yPress, setYPress] = useState(0);
  const [xPress, setXPress] = useState(0);
  const [rbPress, setRBPress] = useState(0);
  const [dPress, setDPress] = useState(0);
  const [lPress, setLPress] = useState(0);
  const [uPress, setUPress] = useState(0);
  const [rPress, setRPress] = useState(0);
  const [lbPress, setLBPress] = useState(0);



  const [round, setRounds] = useState(2);
  const [redScore, setRedScore] = useState(0);
  const [blueScore, setBlueScore] = useState(0);
  const [winner, setWinner] = useState("");
  const [test, setTest] = useState(0);

  const maxRounds = location.state.rounds;

  // useEffect(()=> {
  //   if (!(test === 0)) {
  //     var sound = new Howl({
  //       src: [Clip]
  //     })
  //     sound.play();
  //   }
  //   setTest(1);
  // }, [blueScore, redScore])


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
    if (location.state.controllers === 1) {
        log(location.state.controllers);
        var inc = redScore + 1;
        setRedScore(inc);
    } else {
      if (aPress > 0) {
        var incr = redScore + 1;
        setRedScore(incr);
        setAPress(0);
      } else {
        var incre = aPress + 1;
        setAPress(incre);
        setTimeout(() => setAPress(0), 2000);
      }
    }
}

const red2 = () => {
  if (location.state.controllers === 1) {
    var inc = redScore + 2;
    setRedScore(inc);
} else {
  if (bPress > 0) {
    var incr = redScore + 2;
    setRedScore(incr);
    setBPress(0);
  } else {
    var incre = bPress + 1;
    setBPress(incre);
    setTimeout(() => setBPress(0), 2000);
  }
} 
}


const red3 = () => {
if (location.state.controllers === 1) {
  var inc = redScore + 3;
  setRedScore(inc);
} else {
if (yPress > 0) {
  var incr = redScore + 3;
  setRedScore(incr);
  setYPress(0);
} else {
  var incre = yPress + 1;
  setYPress(incre);
  setTimeout(() => setYPress(0), 2000);
}
}
}

const red4 = () => {
if (location.state.controllers === 1) {
  var inc = redScore + 4;
  setRedScore(inc);
} else{
if (xPress > 0) {
  var incr = redScore + 4;
  setRedScore(incr);
  setXPress(0);
} else {
  var incre = xPress + 1;
  setXPress(incre);
  setTimeout(() => setXPress(0), 2000);
}
}
}


const red5 = () => {
if (location.state.controllers === 1) {
  var inc = redScore + 5;
  setRedScore(inc);
} else{
if (rbPress > 0) {
  var incr = redScore + 5;
  setRedScore(incr);
  setRBPress(0);
} else {
  var incre = rbPress + 1;
  setRBPress(incre);
  setTimeout(() => setRBPress(0), 2000);
}
} 
}


const blue1 = () => {
if (location.state.controllers === 1) {
  var inc = blueScore + 1;
  setBlueScore(inc);
} else {
if (dPress > 0) {
  var incr = blueScore + 1;
  setBlueScore(incr);
  setDPress(0);
} else {
  var incre = dPress + 1;
  setDPress(incre);
  setTimeout(() => setDPress(0), 2000);
}
} 
}


const blue2 = () => {
if (location.state.controllers === 1) {
  var inc = blueScore + 2;
  setBlueScore(inc);
} else {
if (lPress > 0) {
  var incr = blueScore + 2;
  setBlueScore(incr);
  setLPress(0);
} else {
  var incre = lPress + 1;
  setLPress(incre);
  setTimeout(() => setLPress(0), 2000);
}
}
}


const blue3 = () => {
if (location.state.controllers === 1) {
  var inc = blueScore + 3;
  setBlueScore(inc);
} else  {
if (uPress > 0) {
  var incr = blueScore + 3;
  setBlueScore(incr);
  setUPress(0);
} else {
  var incre = uPress + 1;
  setUPress(incre);
  setTimeout(() => setUPress(0), 2000);
}
} 
}


const blue4 = () => {
if (location.state.controllers === 1) {
  var inc = blueScore + 4;
  setBlueScore(inc);
} else {
if (rPress > 0) {
  var incr = blueScore + 4;
  setBlueScore(incr);
  setRPress(0);
} else {
  var incre = rPress + 1;
  setRPress(incre);
  setTimeout(() => setRPress(0), 2000);
}
} 
}

const blue5 = () => {
if (location.state.controllers === 1) {
  var inc = blueScore + 5;
  setBlueScore(inc);
} else {
if (lbPress > 0) {
  var incr = blueScore + 5;
  setBlueScore(incr);
  setLBPress(0);
} else {
  var incre = lbPress + 1;
  setLBPress(incre);
  setTimeout(() => setLBPress(0), 2000);
}
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
        navigate("/round2", {state:{redName:location.state.redName, blueName:location.state.blueName, rounds:location.state.rounds, timer: location.state.timer, controllers: location.state.controllers, blueScore: blueScore, blueScore: blueScore}});
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
         gamepadIndex={2}
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

export default Round2;