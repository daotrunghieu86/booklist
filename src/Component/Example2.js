import React, { useReducer } from "react";

const initialState = {
  count1: 0,
  count2: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, count1: state.count1 + 1 };
    case "increment2":
      return { ...state, count2: state.count2 + 1 };
    case "decrement1":
      return { ...state, count1: state.count1 - 1 };
    case "decrement2":
      return { ...state, count2: state.count2 - 1 };
    case "set1":
      return { ...state, count1: 0 };
    case "set2":
      return { ...state, count2: 0 };
  }
};

const Example02 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div className="class1">
        {state.count1}
        <button onClick={() => dispatch({ type: "increment1" })}>+1</button>
        <button onClick={() => dispatch({ type: "decrement1" })}>-1</button>
        <button onClick={() => dispatch({ type: "set1" })}>reset</button>
      </div>
      <div className="class2">
        {state.count2}
        <button onClick={() => dispatch({ type: "increment2" })}>+1</button>
        <button onClick={() => dispatch({ type: "decrement2" })}>-1</button>
        <button onClick={() => dispatch({ type: "set2" })}>reset</button>
      </div>
    </div>
  );
};

export default Example02;
