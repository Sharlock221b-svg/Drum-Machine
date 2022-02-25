import React from "react"
import  {bankOne} from "./data.js"

export default function PreButton() {
  const button = bankOne.map((x) =>(
    "hey"
));
  return (
    <div>
    {button}
    </div>
  );
}