"use client";
import React from "react";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "@/apis/queryFns";
import { Todos } from "@/types";
import { Button } from "@nextui-org/react";
const CsrPage = () => {
  const router = useRouter();
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
  const working: Todos = [];
  const done: Todos = [];

  todos?.forEach((todo) => {
    todo.isDone ? done.push(todo) : working.push(todo);
  });
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between p-5">
        <h2 className="text-3xl font-bold">Next+TS TodoList</h2>
        <Button
          onClick={() => router.push("/report")}
          className="shadow-lg bg-teal-600 bg-gradient-to-tr text-white"
        >
          할 일 정보 통계 보러가기
        </Button>
      </div>

      <TodoForm />
      <h2 className="text-2xl font-bold mt-3">Working🔥!</h2>
      <TodoList todos={working} />
      <h2 className="text-2xl font-bold mt-3">Done🎊</h2>

      <TodoList todos={done} />
    </div>
  );
};

export default CsrPage;
