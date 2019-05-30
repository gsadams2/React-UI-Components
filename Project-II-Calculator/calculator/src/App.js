import React from "react";
import "./App.css";

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButtonYo from "./NumberButtonYo";

const App = () => {
  return (
    <div>
      <CalculatorDisplay />
      <NumberButtonYo />
    </div>
  );
};

export default App;
