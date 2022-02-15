/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(45);
  const [minutes, setMinutes] = useState(59);
  const [hours, setHours] = useState(0);
  const [time, setTime] = useState(false);

  const handleStart =() =>{
    setTime(true)
 }

 const handleRestart =() =>{
   setSeconds(0);
   setMinutes(0);
   setHours(0);
 };

 const handleStop =()=>{
    setTime(false)
 }

 
 useEffect(() => {
    let interval = null;
    if(time){
      interval = setInterval(() => setSeconds(seconds + 1), 1000);
      if (seconds === 60) {
        setMinutes(minutes + 1);
        setSeconds(0);
      } 
      if (minutes === 60) {
        setHours(hours + 1);
        setMinutes(0);
        setSeconds(0); 
      }
    }
   return () => {
     clearInterval(interval);
   };
 });
 
 
  return (
    <div className="mt-5 w-50 ml-0 mr-0 mx-auto text-center">
      <div className="container">
        <h1>Timer</h1>
        <h3>
          {hours < 10 ? "0" + hours : hours} :{" "}
          {minutes < 10 ? "0" + minutes : minutes} :
          {seconds < 10 ? "0" + seconds : seconds}
        </h3>
        <div className="container">
        <button className="btn btn-primary p-2 mx-4 mt-2"
                  onClick={handleStart}>Start</button>
          <button className="btn btn-warning p-2 mx-4 mt-2"
                  onClick={handleRestart}> Re-Start</button>
          <button className="btn btn-danger p-2 mx-4 mt-2" 
                   onClick={handleStop}>Stop</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
