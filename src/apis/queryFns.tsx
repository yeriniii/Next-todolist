import { Todo } from "@/types";

export const getTodos = async (): Promise<Todo[]> => {
  const response = await fetch(`http://localhost:4000/todos`);
  const todos = await response.json();
  return todos;
};
