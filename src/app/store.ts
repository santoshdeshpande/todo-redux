import { configureStore, Action } from "@reduxjs/toolkit";

// import counterReducer from "../features/counter/counterSlice";
// import todosReducer from "../features/todo/todoSlice";

import rootReducer, { RootState } from "./rootReducer";
import { ThunkAction } from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
});
// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//     todos: todosReducer,
//   },
// });

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
