import React, { useState } from "react";
import BackButtonComponent from "./BackComponent";
import Button from "./ButtonComponent";
import "./AutoComponent.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <BackButtonComponent />
      <h1 className="mainHeading">Counter</h1>
      <div className="counterValue">
        <Button buttonName="-" onClick={decrementCount}></Button>
        <span className="count">{count}</span>
        <Button buttonName="+" onClick={incrementCount}></Button>
      </div>
      <div className="reset">
        <Button buttonName="Reset" onClick={resetCount}></Button>
      </div>
    </div>
  );
};
export default Counter;
