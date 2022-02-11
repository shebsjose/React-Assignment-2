import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

 useEffect(() => {
  var timerId = setInterval(() => setSeconds(seconds + 1), 1000);
   console.log(timerId);

   if (seconds === 60) {
     setMinutes(minutes + 1);
     setSeconds(0);
   } else if (minutes === 60) {
     setHours(hours + 1);
     setMinutes(0);
     setSeconds(0);
   }

   return () => {
     clearInterval(timerId);
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
      </div>
    </div>
  );
};

export default Timer;
