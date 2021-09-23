import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import TodoFooter from "../TodoFooter/TodoFooter";
import Header from "./Header";

const Todo = () => {
  return (
    <main className="absolute top-0 w-full h-full">
      <div className="p-4 py-24 w-2/5 mx-auto">
        <Header />
        <TodoForm />
        <TodoList />
        <TodoFooter />
      </div>
    </main>
  );
};

export default Todo;
