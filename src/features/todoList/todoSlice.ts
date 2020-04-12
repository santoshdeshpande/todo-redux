import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "./types";
import { AppThunk, AppDispatch } from "../../app/store";

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    create(state, action: PayloadAction<Todo>) {
      state.push(action.payload);
    },
    toggle(state, action: PayloadAction<Todo>) {
      let todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { toggle } = todoSlice.actions;

export const addTodo = (description: string): AppThunk => async (
  dispatch: AppDispatch
) => {
  const newTodo: Todo = {
    id: Math.random().toString(36).substr(2, 9),
    completed: false,
    description,
  };
  dispatch(todoSlice.actions.create(newTodo));
};

export default todoSlice.reducer;
