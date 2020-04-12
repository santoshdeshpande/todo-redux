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
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
