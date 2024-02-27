import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/todo/todoSlice";

export const Increment = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <div>
      Value: {count} <button onClick={incrementHandler}>Increment</button>{" "}
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
};
