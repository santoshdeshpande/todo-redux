import React from "react";
import { RootState } from "../../app/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import TodoListItem from "./TodoListItem";
import { toggleTodo } from "./todoSlice";
import { VisibilityFilter } from "../visibilityFilter/visibilityFilterSlice";
import { Todo } from "./types";

interface Props {}

const getVisibleTodos = (todos: Todo[], filter: VisibilityFilter) => {
  switch (filter) {
    case VisibilityFilter.ShowAll:
      return todos;
    case VisibilityFilter.ShowActive:
      return todos.filter((t) => !t.completed);
    case VisibilityFilter.ShowCompleted:
      return todos.filter((t) => t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

const TodoList = (props: Props) => {
  const todos = useSelector((state: RootState) =>
    getVisibleTodos(state.todos, state.visibilityFilter)
  );
  const dispatch = useDispatch();
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          {...todo}
          onClick={() => dispatch(toggleTodo(todo))}
        />
      ))}
    </ul>
  );
};

export default TodoList;
