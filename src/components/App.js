import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here
  
  const [currentTime,setcurrentTime]=useState(0);
  
  
  function updateTime(){
    var input=document.getElementById("timeCount");
    var time=Math.floor(input.value);
      setInterval(()=>{
        setcurrentTime(time--);
      },1000);
    
    
  }

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={updateTime} /> sec.
        </h1>
      </div>
      <div id="current-time">{currentTime}</div>
    </div>
  )
}


export default App;
