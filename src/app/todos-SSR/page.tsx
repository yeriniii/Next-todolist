// "use client";
import React from "react";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Todo, Todos } from "@/types";

const SsrPage = async () => {
  const response = await fetch(`http://localhost:4000/todos`);
  const todos: Todos = await response.json();

  const working = todos.filter((todo: Todo) => !todo.isDone);
  const done = todos.filter((todo: Todo) => todo.isDone);
  return (
    <div className="flex flex-col">
      <div className="flex justify-between p-5">
        <h2 className="text-3xl font-bold">Next+TS TodoList</h2>
        <Link href="/report">
          <Button className="shadow-lg bg-teal-600 bg-gradient-to-tr text-white">
            할 일 정보 통계 보러가기
          </Button>
        </Link>
      </div>
      <TodoForm />
      <h2 className="text-2xl font-bold mt-3">Working🔥!</h2>
      <TodoList todos={working} />
      <h2 className="text-2xl font-bold mt-3">Done🎊</h2>

      <TodoList todos={done} />
    </div>
  );
};

export default SsrPage;
