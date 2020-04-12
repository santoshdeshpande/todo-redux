import React from "react";

interface Props {
  completed: boolean;
  description: string;
  onClick: () => void;
}

const TodoListItem = ({ completed, description, onClick }: Props) => {
  return (
    <li
      className="py-2 border-b text-gray-500"
      onClick={onClick}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {description}
    </li>
  );
};

export default TodoListItem;
