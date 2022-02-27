import React from "react"

export default function Power(props) {
  
  function handle(){
    props.setPower(!props.power);
  }
  
  React.useEffect(() =>{
    if(!props.power){
      props.setPhrase("");
   }
 })
  
  return (
    <div>
    <h3 id="powText">Power</h3>
    <div className="pow" onClick={handle}>
    {props.power === false ? <div className="lBox"></div> : <div className="rBox"></div>} 
    </div>
    </div>
  );
}