import React from "react";
import { useReducer } from "react";

// initial state
const initState = {
  count: 0,
  divideNumber: 1,
};

// actions
const SET_DIVIDE_NUMBER = "set_divide_number";
const UP_COUNT = "up";
const DOWN_COUNT = "down";
const MULTIPLE_COUNT = "multiple";
const DIVIDE_COUNT = "divide";

const setDivideNumber = (payload) => ({
  type: SET_DIVIDE_NUMBER,
  payload,
});

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_DIVIDE_NUMBER:
      return {
        ...state,
        divideNumber: action.payload,
      };
    case UP_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DOWN_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case MULTIPLE_COUNT:
      return {
        ...state,
        count: state.count * state.count,
      };
    case DIVIDE_COUNT:
      if (state.divideNumber === 0) {
        alert("Khong the chia cho 0");
        return state;
      } else {
        return {
          ...state,
          count: state.count / state.divideNumber,
        };
      }
    default:
      throw new Error("Invalid action");
  }
};

const CountUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: UP_COUNT })}>UP</button>
      <button onClick={() => dispatch({ type: DOWN_COUNT })}>DOWN</button>
      <button onClick={() => dispatch({ type: MULTIPLE_COUNT })}>
        MULTIPLE
      </button>
      <br />
      <label htmlFor="divide">Chia cho</label>
      <input
        type="text"
        id="divide"
        name="divide"
        onChange={(e) => dispatch(setDivideNumber(parseInt(e.target.value)))}
      />
      <button onClick={() => dispatch({ type: DIVIDE_COUNT })}>DIVIDE</button>
    </>
  );
};

export default CountUseReducer;
