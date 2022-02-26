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
         const sound = document.getElementById(props.id);
         sound.play();
        }
  }
  
  React.useEffect(() =>{
     
    document.addEventListener('keydown',handle);
    return () => {
      document.removeEventListener('keydown',handle);
    };
  },[])
  
  return(
    <div className="drum-pad">
     <audio id={props.id} src={props.url} preload="auto"/>
     {props.keyTrigger}
    </div>
  );
}