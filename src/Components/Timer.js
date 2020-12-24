import React, { useState } from "react";
import "../Timer.css"

const Timer = (props) => {

    const styleBlack = {color : "#3C403D"};
    const styleRed = {color : "red"};

    const style = props.timerLeft < 60
    ? styleRed
    : styleBlack;

    const className = props.timerLeft < 60 && props.isPlaying
    ? "blink"
    : "no-blink";

    return(
        <div id="timer">
            <div id="timer-input"  className={className} style={style}> 
            {
                props.isSession
                ? "Session"
                : "Break"
            } 
            </div>
            <div id="minute-second" className={className} style={style}>
                {props.children}
            </div>
        </div>
    )
}

export default Timer;