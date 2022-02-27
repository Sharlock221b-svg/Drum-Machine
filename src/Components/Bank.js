import React from "react"

export default function Bank(props){

  return (
    <div className="two">
      <h3 id="powText">Bank</h3>
       <div className="pow" onClick={() => (props.setbank(!props.bank))}>
    {props.bank === false ? <div className="lBox"></div> : <div className="rBox"></div>} 
       </div>
    </div>
 );
}