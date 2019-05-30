import React from "react";
import ButtonComponentYo from "./ButtonComponentYo";
import "./Button.css";

function NumberButtonYo() {
  return (
    <div className="KeyPad">
      <div className="One">
        <ButtonComponentYo buttonStyle="Big" text="clear" />
        <ButtonComponentYo buttonStyle="Operator" text="÷" />
      </div>
      <div className="Two">
        <ButtonComponentYo buttonStyle="Small" text="7" />
        <ButtonComponentYo buttonStyle="Small" text="8" />
        <ButtonComponentYo buttonStyle="Small" text="9" />
        <ButtonComponentYo buttonStyle="Operator" text="X" />
      </div>

      <div className="Three">
        <ButtonComponentYo buttonStyle="Small" text="4" />
        <ButtonComponentYo buttonStyle="Small" text="5" />
        <ButtonComponentYo buttonStyle="Small" text="6" />
        <ButtonComponentYo buttonStyle="Operator" text="-" />
      </div>

      <div className="Four">
        <ButtonComponentYo buttonStyle="Small" text="1" />
        <ButtonComponentYo buttonStyle="Small" text="2" />
        <ButtonComponentYo buttonStyle="Small" text="3" />
        <ButtonComponentYo buttonStyle="Operator" text="+" />
      </div>

      <div className="Five">
        <ButtonComponentYo buttonStyle="Big" text="0" />
        <ButtonComponentYo buttonStyle="Operator" text="=" />
      </div>
    </div>
  );
}

export default NumberButtonYo;
