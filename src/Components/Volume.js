import React from "react"

export default function Volume(props){

  return (
    <div>
     <h3 id="powText">Volume</h3>
     <input
          type="range"
          min={0}
          max={1}
          step={0.02}
          value={props.volume}
          onChange={event => {
            props.setVolume(event.target.valueAsNumber)
          }}
        />
    </div>
  );
}