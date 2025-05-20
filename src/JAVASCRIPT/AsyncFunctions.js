// Asynchronous functions


setTimeout 
1) one time after delay
2) automatically stop after one time run
3) we can manually stop // clearTimeout();


setInterval
1) repeatdly after each interval of time
2) No, it wont stop automatically
3) we can manually stop // clearInterval();


two parameters
1) call back
2) time in milliseconds
// execute the first parameter callback after some delay time ( in milliseconds) second parameter.


const callMe = () =>{
console.log("I will run first");

const timeOut = setTimeout(() => {
    console.log("Hi 5 seconds time is completed")
}, 2000)

const timeInterval = setInterval(()=>{
  console.log("I am calling again ...")
}, 3000)

clearTimeout(timeOut);
clearInterval(timeInterval);

console.log("I will run last")
}

callMe();



 
setTimeout //   debounce => vinod   =>  userEnter => 3 seconds

import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timeOutFunction = setTimeout(() => {
      console.log("I am testing");
    }, 5000);

    return () => clearTimeout(timeOutFunction);
  }, []);

  return (
    <div className="App">
      <div>Header </div>
      {message}
      <div>Body </div>
      <div>Footer </div>
    </div>
  );
}



setInterval //


import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const intervalFunction = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalFunction);
  }, []);

  return <div className="App">{time && time?.toLocaleTimeString()}</div>;
}


setInterval //

import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(120);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    if (counter === 0) {
      clearInterval(intervalId);
    }

    // Cleanup interval on unmount or when counter changes
    return () => clearInterval(intervalId);
  }, [counter]);

  return <div className="App">{counter}</div>;
}


