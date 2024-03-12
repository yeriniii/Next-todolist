import { Todo } from "@/types";

const addTodo = async (todo: Todo): Promise<Todo> => {
  const response = await fetch(`http://localhost:4000/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const data = await response.json();
  return data;
};
const deleteTodo = async (todo: Todo): Promise<Todo> => {
  const response = await fetch(`http://localhost:4000/todos/${todo.id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
const toggleTodo = async (todo: Todo): Promise<Todo> => {
  const response = await fetch(`http://localhost:4000/todos/${todo.id}`, {
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
