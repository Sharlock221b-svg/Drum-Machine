import React from "react"

/*
     keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
*/

export default function Button(props){
  
  function handle(event){
        if(event.keyCode === props.keyCode){
              play();
        }
  }

  function play(){
     const sound = document.getElementById(props.keyTrigger);
     sound.play();
     props.setPhrase(props.id);
  };
  
  React.useEffect(() =>{
    document.addEventListener('keydown',handle);
    return () => {
      document.removeEventListener('keydown',handle);
    };
  },[])
  
  return(
    <div class="drum-pad" id={props.id} onClick={play}>
     <audio className="clip" id={props.keyTrigger} src={props.url} preload="auto"/>
     {props.keyTrigger}
    </div>
  );
}