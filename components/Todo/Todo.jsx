import { useState } from "react";
import { useTodos } from "../../hooks/useTodos";

import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import Header from "./Header";

const Todo = () => {
  const [showActive, setShowActive] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const { todos, addTodo, removeTodo, toggleTodo, clearCompleted } = useTodos();

  return (
    <main className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5">
      <div className="p-4 py-24">
        <Header />
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          showActive={showActive}
          showCompleted={showCompleted}
          setShowActive={setShowActive}
          setShowCompleted={setShowCompleted}
          clearCompleted={clearCompleted}
        />
      </div>
    </main>
  );
};

export default Todo;
