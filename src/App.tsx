import React from "react";
import AddTodo from "./features/todoList/AddTodo";
import TodoList from "./features/todoList/TodoList";
import Footer from "./features/visibilityFilter/Footer";
import { useDispatch } from "react-redux";
import { createList, loadTodos } from "./features/todoList/todoSlice";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (window.location.pathname === "/") {
      dispatch(createList());
    } else {
      dispatch(loadTodos());
    }
  }, [dispatch]);
  return (
    <div className="container">
      <div className="text-center w-full mb-8">
        <h1 className="text-3xl font-bold text-gray-800 uppercase tracking-tight">
          To do List
        </h1>
      </div>
      <div>
        <AddTodo />
        <TodoList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
