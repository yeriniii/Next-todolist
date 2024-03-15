import { Todo, Todos } from "@/types";
import React from "react";
import Link from "next/link";
const ReportPage = async () => {
  const response = await fetch(`http://localhost:4000/todos`, {
    next: {
      revalidate: 10,
    },
  });
  const todos: Todos = await response.json();

  const workingTodos = todos.filter((todo: Todo) => todo.isDone === false);
  const doneTodos = todos.filter((todo: Todo) => todo.isDone === true);
  return (
    <div className="flex flex-col items-center mt-12 space-y-8">
      <div className="max-w-sm rounded-xl overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            현재까지 등록된 할일은 {todos.length}개 입니다.
          </div>
          <p className="text-gray-700 text-base">
            진행 중인 할 일은 {workingTodos.length}개 입니다.
          </p>
          <p className="text-gray-700 text-base">
            완료된 할 일은 {doneTodos.length}개 입니다.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-end">
          <Link href="/todos-CSR">
            <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              할 일 작성하러 가기
            </span>
          </Link>
        </div>
      </div>
      <div className="container mt-4 mx-auto">
        <h2 className="font-bold text-xl">진행 중인 할일 목록 </h2>
        <div className="mt-3 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {workingTodos.map((work: Todo) => {
            return (
              <div
                key={work.id}
                className="border border-gray-300 p-4 rounded-lg"
              >
                <p className="text-lg font-medium">제목:{work.title}</p>
                <p className="text-gray-600">내용: {work.body}</p>
              </div>
            );
          })}
        </div>
        <h2 className="mt-3 font-bold text-xl">완료한 할일 목록</h2>
        <div className="mt-3 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {doneTodos.map((work: Todo) => {
            return (
              <div
                key={work.id}
                className="border border-gray-300 p-4 rounded-lg"
              >
                <p className="text-lg font-medium">제목:{work.title}</p>
                <p className="text-gray-600">내용: {work.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
