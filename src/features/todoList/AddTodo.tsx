import React, { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

interface Props {}

const AddTodo = (props: Props): JSX.Element => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  function handleChange(e: { target: HTMLInputElement }) {
    setText(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!text.trim()) {
      return;
    }
    dispatch(addTodo(text));
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="border flex-1 mr-3 border-gray-300 p-2 rounded"
      />
      <button
        type="submit"
        className="p-2 text-white bg-blue-600 border border-blue-600 rounded"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
