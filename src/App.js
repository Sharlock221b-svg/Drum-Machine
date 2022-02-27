
import './App.css';
import React from "react"
import PreButton from "./Components/PreButton.js"
import Display from "./Components/Display.js"
import Power from "./Components/Power.js"

function App() {
  const [phrase,setPhrase] = React.useState("");
  const [power,setPower] = React.useState(true);
  
  function handle(val){
    setPhrase(val)
  }
  
  return (
    <div className="App" id="drum-machine" >
       <Power power={power} setPower={setPower} setPhrase={handle}/>
       <PreButton setPhrase={handle} power={power}/>
       <Display phrase={phrase}/>
    </div>
  );
}

export default App;
