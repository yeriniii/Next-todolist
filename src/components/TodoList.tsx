"use client";
import React from "react";
import { Todos } from "@/types";

import TodoCard from "./TodoCard";
const TodoList = ({ todos }: { todos: Todos }) => {
  return (
    <div>
      <div className="flex flex-row flex-wrap p-3">
        {todos?.map((todo) => {
          return <TodoCard key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
