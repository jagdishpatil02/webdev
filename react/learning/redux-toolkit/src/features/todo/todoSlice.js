import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

const initialStateIncrement = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialStateIncrement, // Corrected typo: initialStateIncrement instead of initialStateIncrement
  reducers: {
    increment: (state) => {
      console.log(state.value);
      state.value += 1; // Corrected increment function
    },
    decrement: (state) => {
      state.value -= 1; // Corrected decrement function
    },
  },
});

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export const { increment, decrement } = counterSlice.actions; // Corrected import

const rootReducer = {
  todo: todoSlice.reducer,
  counter: counterSlice.reducer,
};

export default rootReducer; // Removed assignment of rootReducer in export
