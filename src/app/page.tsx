import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import { Button } from "@nextui-org/react";
export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex p-3">
        <h2 className="text-3xl font-bold mb-3">Next+TS TodoList</h2>
        <Button className="shadow-lg bg-teal-600 bg-gradient-to-tr text-white">
          할 일 정보 통계 보러가기
        </Button>
      </div>
    </div>
  );
}
