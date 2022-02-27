
import './App.css';
import React from "react"
import PreButton from "./Components/PreButton.js"
import Display from "./Components/Display.js"

function App() {
  const [phrase,setPhrase] = React.useState("");

  function handle(val){
    setPhrase(val)
}
  
  return (
    <div className="App" id="drum-machine">
       <PreButton setPhrase={handle}/>
       <Display phrase={phrase}/>
    </div>
  );
}

export default App;
