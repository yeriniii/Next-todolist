import { Todo } from "@/types";

const addTodo = async (todo: Todo): Promise<Todo> => {
  const response = await fetch(`/api/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const data = await response.json();
  return data;
};
const deleteTodo = async (id: string): Promise<Todo> => {
  const response = await fetch(`/api/todos/${id}`, {
    method: "DELETE",
    body: JSON.stringify(id),
  });
  const data = await response.json();
  return data;
};
const toggleTodo = async (todo: Todo): Promise<Todo> => {
  const response = await fetch(`/api/todos/${todo.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      isDone: !todo.isDone,
    }),
  });
  const data = await response.json();
  return data;
};

export { addTodo, deleteTodo, toggleTodo };
