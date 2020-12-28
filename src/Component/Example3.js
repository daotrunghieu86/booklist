import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "set":
      return 0;
    default:
      throw new Error("Unexpected Action");
  }
};

const Example03 = () => {
  const [state1, dispatch1] = useReducer(reducer, initialState);
  const [state2, dispatch2] = useReducer(reducer, initialState);
  return (
    <div>
      <div className="class1">
        {state1}
        <button onClick={() => dispatch1({ type: "increment" })}>+1</button>
        <button onClick={() => dispatch1({ type: "decrement" })}>-1</button>
        <button onClick={() => dispatch1({ type: "set" })}>set1</button>
      </div>
      <div className="class2">
        {state2}
        <button onClick={() => dispatch2({ type: "increment" })}>+1</button>
        <button onClick={() => dispatch2({ type: "decrement" })}>-1</button>
        <button onClick={() => dispatch2({ type: "set" })}>set2</button>
      </div>
    </div>
  );
};

export default Example03;
