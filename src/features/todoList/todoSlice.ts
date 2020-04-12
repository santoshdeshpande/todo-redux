import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "./types";
import { AppThunk, AppDispatch } from "../../app/store";
import { readTodos, writeTodos } from "../../api/jsonStore";
import { RootState } from "../../app/rootReducer";

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    receive(state, action: PayloadAction<Todo[]>) {
      return action.payload;
    },
    receiveOne(state, action: PayloadAction<Todo>) {
      state.push(action.payload);
    },
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

export const createList = (): AppThunk => async (dispatch: AppDispatch) => {
  const id = Math.random().toString(36).substr(2, 9);
  window.history.pushState(null, document.title, `${id}`);
};

export const loadTodos = (): AppThunk => async (dispatch: AppDispatch) => {
  const todos = await readTodos();
  dispatch(todoSlice.actions.receive(todos));
};

export const addTodo = (description: string): AppThunk => async (
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  const newTodo: Todo = {
    id: Math.random().toString(36).substr(2, 9),
    completed: false,
    description,
  };
  dispatch(todoSlice.actions.create(newTodo));
  writeTodos(getState().todos);
};

export const toggleTodo = (todo: Todo): AppThunk => async (
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  dispatch(todoSlice.actions.toggle(todo));
  writeTodos(getState().todos);
};

export default todoSlice.reducer;
