import React from "react"

export default function Display(props) {
  return (
    <div id="display">
    <p>{props.phrase}</p>
    </div>
  );
}