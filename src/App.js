
import './App.css';
import React from "react"
import PreButton from "./Components/PreButton.js"
import Display from "./Components/Display.js"
import Power from "./Components/Power.js"
import Bank from "./Components/Bank.js"

function App() {
  const [phrase,setPhrase] = React.useState("");
  const [power,setPower] = React.useState(true);
  const [bank,setbank] = React.useState(false);
  
  function handle(val){
    setPhrase(val)
  }


  return (
    <div className="App" id="drum-machine" >
       <Power power={power} setPower={setPower} setPhrase={handle}/>
       <Bank bank={bank} setbank={setbank}/>
       <PreButton setPhrase={handle} power={power} bank={bank}/>
       <Display phrase={phrase}/>
    </div>
  );
}

export default App;
