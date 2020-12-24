import React, { useEffect, useState, useRef } from "react";
import Button from "./Components/Button";
import Timer from "./Components/Timer";
import BreakLength from "./Components/BreakLength";
import SessionLength from "./Components/SessionLength";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faStop } from '@fortawesome/free-solid-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import "./App.css";
import alarm from "./alarm.mp3"

const arrowUp = <FontAwesomeIcon icon={faArrowUp}/>;
const arrowDown = <FontAwesomeIcon icon={faArrowDown}/>;
const play = <FontAwesomeIcon icon={faPlay}/>;
const stop = <FontAwesomeIcon icon={faStop}/>;
const reset = <FontAwesomeIcon icon={faSyncAlt}/>;


const App = () => {

  const [timerLeft, setTimerLeft] = useState(1500);
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSession, setIsSession] = useState(true);
  const intervalId = useRef();
  const beep = useRef();
  // Displaying Timer
  const displayTimer = () => {
    let minute = Math.floor(timerLeft / 60);
    let second = Math.floor(timerLeft % 60);
    if(minute < 10){
      minute = "0" + minute;
    }if(second === 0 || second < 10){
      second = "0" + second;
    }
    return minute + ":" + second;
  };

  //Setting sesison length
  const increaseSessionLength = () => {
    if(isPlaying){
      return;
    }else{
      if(sessionLength === 60){
        return;
      }else{
        setSessionLength(sessionLength + 1);
        setTimerLeft((sessionLength * 60) + 60);
      }
    }  
  };
  const decreaseSessionLength = () => {
    if(isPlaying){
      return;
    }else{
      if(sessionLength === 1){
        return;
      }else{
        setSessionLength(sessionLength - 1);
        setTimerLeft((sessionLength * 60) - 60);
      }
    }
   
  };

  //Setting break length
  const increaseBreakLength = () => {
    if(isPlaying){
      return;
    }else{
      if(breakLength === 60){
        return;
      }else{
        setBreakLength(((breakLength * 60) + 60) / 60);
      }
    }
    
  };
  const decreaseBreakLength = () => {
    if(isPlaying){
      return;
    }else{
      if(breakLength === 1){
        return;
      }else{
        setBreakLength(((breakLength * 60) - 60) / 60);
      }
    }
  };

  //Play timer
  const onPlay = () => {
    if(isPlaying){
      return;
    }else{
      const interval = setInterval(() => {
        countdownTimer();
      }, 1000);
      intervalId.current = interval;
      setIsPlaying(true);
    }
  };

  const countdownTimer = () => {
    setTimerLeft(prev => prev -1);
  };

  //Pause timer
  const onPause = () => {
    clearInterval(intervalId.current);
    setIsPlaying(false);
  };

  //Reset timer
  const onReset = () => {
    clearInterval(intervalId.current);
    setTimerLeft(1500);
    setSessionLength(25);
    setBreakLength(5);
    setIsPlaying(false);
    setIsSession(true);
  };

  //Switching to breaktimer after sesison is out and vice versa
  useEffect(() => {
    if(timerLeft === -1){
      setTimerLeft(breakLength * 60);
      setIsSession(false);
      if(!isSession){
        setTimerLeft(sessionLength * 60);
        setIsSession(true);
      }
    };
    if(timerLeft === 0){
      beep.current.play();
    };
  });

  return(
    <div id="page-wrapper">
      <div id="pomodoro-clock">
        <h1>Pomodoro Clock</h1>
        <div id="length-wrapper">
            <BreakLength>
              <div onClick={decreaseBreakLength} className="icon">
                {arrowDown}
              </div>
              <div className="length-input">
                {breakLength}
              </div>
              <div onClick={increaseBreakLength} className="icon">
                {arrowUp}
              </div>
            </BreakLength>
            <SessionLength>
              <div onClick={decreaseSessionLength} className="icon">
                {arrowDown}
              </div>
              <div className="length-input">
                {sessionLength}
              </div>
              <div onClick={increaseSessionLength}  className="icon">
                {arrowUp}
              </div>
            </SessionLength>
        </div>
        <div id="timer-wrapper">
          <Timer isSession={isSession} timerLeft={timerLeft} isPlaying={isPlaying}>
            {displayTimer()}
          </Timer>
        </div>
        <div id="function-button">
          <Button handleClick={() => {onPlay()}}>{play}</Button>
          <Button handleClick={() => {onPause()}}>{stop}</Button>
          <Button handleClick={() => {onReset()}}>{reset}</Button>
        </div>
        </div>
        <div id="footer">
          <p>Designed and Coded by</p>
          <p id="name"><a href="https://github.com/Shuto46490802" target="_blank">Shuto S</a></p>
        </div>
        <audio id="beep" src={alarm} ref={beep} />
      </div>
  )
}

export default App;
