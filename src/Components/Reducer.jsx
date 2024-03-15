import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    AddTodo: (state, action) => {
      const { image, title, price } = action.payload;
      const id = nanoid();
      const todo = { id, image, title, price };
      state.todos.push(todo);
    },
    RemoveTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { AddTodo, RemoveTodo } = todoSlice.actions;
export default todoSlice.reducer;
