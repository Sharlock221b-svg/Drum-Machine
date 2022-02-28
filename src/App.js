
import './App.css';
import React from "react"
import PreButton from "./Components/PreButton.js"
import Display from "./Components/Display.js"
import Power from "./Components/Power.js"
import Bank from "./Components/Bank.js"
import Volume from "./Components/Volume.js"

function App() {
  const [phrase,setPhrase] = React.useState("");
  const [power,setPower] = React.useState(true);
  const [bank,setbank] = React.useState(false);
  const [volume,setVolume] = React.useState(0.3);
  
  function handle(val){
    setPhrase(val)
  }

  function handlePower(){
    setPower(!power);
  }

  return (
    <div className="App" id="drum-machine" >
    <div className="nav">
     <div className="power">
       <Power power={power} setPower={handlePower} setPhrase={handle}/>
    </div>
    <div className="ban">
       <Bank bank={bank} setbank={setbank}/>
    </div>
    </div>
       <PreButton setPhrase={handle} power={power} bank={bank} volume={volume}/>
       <Display phrase={phrase}/>
        <Volume volume={volume} setVolume={setVolume}/>
    </div>
  );
}

export default App;
