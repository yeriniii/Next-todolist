"use client";
import React from "react";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Todo, Todos } from "@/types";
import { useState } from "react";

import { useEffect } from "react";
const SsrPage = () => {
  const [working, setWorking] = useState<Todos>([]);
  const [done, setDone] = useState<Todos>([]);

  useEffect(() => {
    const getTodos = async (): Promise<void> => {
      try {
        const response = await fetch(`http://localhost:4000/todos`);
        const todos = await response.json();

        // 서버에서 가져온 데이터를 상태에 설정
        setWorking(todos.filter((todo: Todo) => !todo.isDone));
        setDone(todos.filter((todo: Todo) => todo.isDone));
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };

    getTodos(); // 페이지가 렌더링되면 데이터를 가져옴
  }, []);
  return (
    <div className="flex flex-col">
      <div className="flex p-3 justify-between p-5">
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
