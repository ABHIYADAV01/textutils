import React from "react";

export default function Alert(props) {
  return (
    
    <div style={{height: '50px'}}>
   { props.alert && (
      <div
        className={`alert alert-success alert-dismissible fade show`}
        role="alert"
      >
        {" "}
        {/*remember it need alert-success for green color with small 's' if u write{props.alert.type} and pass Success with capital 'S' it won't work */}
        <strong>{props.alert.type}</strong>! {props.alert.msg}{" "}
        {/* Strong will make the text bolder in simple terms  */}
   
      </div>
     
    )
   }
    </div>
      
  );
}
