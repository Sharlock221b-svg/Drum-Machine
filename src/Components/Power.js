import React from "react"

export default function Power(props) {
  

  
  React.useEffect(() =>{
    if(!props.power){
      props.setPhrase("");
   }
  },[props.power,props])
  
  return (
    <div>
    <h3 id="powText">Power</h3>
    <div className="pow" onClick={props.setPower}>
    {props.power === false ? <div className="lBox"></div> : <div className="rBox"></div>} 
    </div>
    </div>
  );
}