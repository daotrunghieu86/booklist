import React, { useReducer } from "react";

let initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "inscrement":
      return state + 1;
    case "descrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error("Unexpected action");
  }
};

const Example01 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  //   method dispatch
  return (
    <div>
      {console.log(count)}
      {count}
      <button onClick={() => dispatch("inscrement")}>+1</button>
      {/* dispatch function which sends the 'action' to the 'reducer' */}
      <button onClick={() => dispatch("descrement")}>-1</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};

export default Example01;
