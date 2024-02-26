import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
export const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispath = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispath(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};
