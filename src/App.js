
import './App.css';
import React from "react"
import Bsound from "./Components/Bsound"

function App() {
  const [qEle,setQelement] = React.useState(  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: `https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3`
  },
)
  document.addEventListener('keydown', function(e) {
      if(e.keyCode === qEle.keyCode){ 
        document.getElementById('Q').play();
      }
  });


  
  return (
    <div className="App" id="drum-machine">
      <audio id={qEle.keyTrigger} src={qEle.url} />
       Q
    </div>
  );
}

export default App;
