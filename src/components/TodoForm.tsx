"use client";
import { addTodo } from "@/apis/mutationFns";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

const TodoForm = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const queryClient = useQueryClient();
  const { mutate: mutateToAdd } = useMutation({
    mutationFn: addTodo,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutateToAdd({
      id: crypto.randomUUID(),
      title,
      body,
      isDone: false,
    });
    setTitle("");
    setBody("");
  };
  return (
    <div className="bg-[#f5f5f5] bg-opacity-80 flex rounded-2xl border-hidden p-5 justify-center">
      <form onSubmit={handleSubmit}>
        <strong className="text-black">제목 :</strong>
        <input
          className="text-black p-1 border-none rounded-md mx-2"
          value={title}
          placeholder="제목을 입력해주세요"
          onChange={(e) => setTitle(e.target.value)}
        />
        <strong className="text-black">내용 :</strong>
        <input
          className="text-black p-1 border-none rounded-md mx-2"
          value={body}
          placeholder="내용을 입력해주세요"
          onChange={(e) => setBody(e.target.value)}
        />
        <button className="bg-teal-600 rounded-3xl ml-5 border-none p-2 px-5 text-white font-medium">
          추가하기
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
