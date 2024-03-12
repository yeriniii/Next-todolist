"use client";
import React from "react";

import { useQuery } from "@tanstack/react-query";
import { getTodos } from "@/apis/queryFns";
import TodoCard from "./TodoCard";
const TodoList = ({ isActive }: { isActive: boolean }) => {
  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
  if (isLoading) {
    return <div>loading...</div>;
  }
  if (isError) {
    return <div>error...</div>;
  }
  const filteredTodos =
    todos?.filter((todo) => todo.isDone === !isActive) || [];
  return (
    <div>
      <h2 className="text-2xl font-bold mt-3">
        {isActive ? "Working🔥!" : "Done🎊!"}
      </h2>
      <div className="flex flex-row flex-wrap p-3">
        {filteredTodos.map((todo) => {
          return <TodoCard key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
