import React from "react"
import  {bankOne} from "./data.js"
import {bankTwo} from "./data2.js"
import Button from "./Button.js"


export default function PreButton(props) {

  
   let but = [];

   if(props.bank){
        but = bankOne.map((x) => (
           <Button keyCode={x.keyCode} keyTrigger={x.keyTrigger} id={x.id} url={x.url} setPhrase={props.setPhrase} power={props.power}
volume={props.volume}/> 
        ));
      }
      else{
         but = bankTwo.map((x) => (
           <Button keyCode={x.keyCode} keyTrigger={x.keyTrigger} id={x.id} url={x.url} setPhrase={props.setPhrase} power={props.power}
volume={props.volume}/> 
        ));
      }

  
  
  return (
    <div id="cont">
    {but}
    </div>
  );
}