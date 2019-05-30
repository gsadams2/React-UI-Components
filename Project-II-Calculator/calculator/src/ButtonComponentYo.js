import React from "react";
import "./Button.css";

function ButtonComponentYo(props) {
  return <button className={props.buttonStyle}>{props.text}</button>;
}

export default ButtonComponentYo;
