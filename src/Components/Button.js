import React from "react"

/*
     keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
*/

export default function Button(props) {
  const handle = React.useCallback((event) => {
    if (event.keyCode === props.keyCode) {
     
      if (!props.power) {
        return;
      }
      const sound = document.getElementById(props.keyTrigger);
      sound.play();
      sound.volume = props.volume;
      props.setPhrase(props.id);
    }
  })
  function play() {
    if (!props.power) {
      return;
    }
    const sound = document.getElementById(props.keyTrigger);
    sound.play();
     sound.volume = props.volume;
    props.setPhrase(props.id);
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handle);
    return ()=> {
      document.removeEventListener('keydown',handle);
   }
  },[])

   React.useEffect(() => {
    document.addEventListener('keydown', handle);
     return ()=> {
      document.removeEventListener('keydown',handle);
   }
  },[props.power,props.volume])

  return (
    <div class="drum-pad" id={props.id} onClick={play}>
      <audio className="clip" id={props.keyTrigger} src={props.url} preload="auto" />
      {props.keyTrigger}
    </div>
  )
}