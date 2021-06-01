import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here
  
  const [currentTime,setcurrentTime]=useState("Enter the Number");
  
  
  const updateTime=(event)=>{
    if(event.key === "Enter" ){
      var time=Number(document.getElementById("timeCount").value);
      var countDownBegins = setInterval(() => {
        if(time===0){
          clearInterval(countDownBegins);
        }
            setcurrentTime(time);
            time--;

          
    }, 1000);
    }
  
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
