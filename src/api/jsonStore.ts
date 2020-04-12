import axios from "axios";
import { Todo } from "../features/todoList/types";

const baseURL =
  "https://www.jsonstore.io/c9e068a4c9855e0dcbf9ec7ae6c1b249d04faeb147acd2fcacee4bdda22f65cb";

interface GetTodosResponse {
  result: Todo[];
  ok: boolean;
}

export async function readTodos(): Promise<Todo[]> {
  const url = `${baseURL}${window.location.pathname}`;
  const response = await axios.get<GetTodosResponse>(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return response.data.result;
}

export async function writeTodos(todos: Todo[]) {
  const url = `${baseURL}${window.location.pathname}`;
  await axios.put<Todo[]>(url, todos, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}
