import { Todo } from "@/types";

export const getTodos = async (): Promise<Todo[]> => {
  const response = await fetch(`/api/todos`);
  const todos = await response.json();
  return todos;
};
