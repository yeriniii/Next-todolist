import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-3">Next+TS TodoList</h2>
      <TodoForm />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
    </div>
  );
}
