import { v4 as uuid } from "uuid";

import { useLocalStorage } from "./useLocalStorage";

const useTodos = (initialTodos) => {
  const [todos, setTodos] = useLocalStorage(
    "todos",
    initialTodos ? initialTodos : []
  );

  const addTodo = (text) => {
    setTodos([...todos, { id: uuid(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);

    setTodos(filteredTodos);
  };

  const clearCompleted = () => {
    const filteredTodos = todos.filter((todo) => !todo.completed);

    setTodos(filteredTodos);
  };

  return {
    todos,
    setTodos,
    addTodo,
    toggleTodo,
    removeTodo,
    clearCompleted,
  };
};

export { useTodos };
