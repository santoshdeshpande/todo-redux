import React from "react";

interface Props {
  completed: boolean;
  description: string;
  onClick: () => void;
}

const TodoListItem = ({ completed, description, onClick }: Props) => {
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {description}
    </li>
  );
};

export default TodoListItem;
