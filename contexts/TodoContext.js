import React, { createContext, useContext, useState } from "react";
import { useTodos } from "../hooks/useTodos";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [showActive, toggleActive] = useState(false);
  const [showCompleted, toggleCompleted] = useState(false);

  const { todos, setTodos, addTodo, removeTodo, toggleTodo, clearCompleted } =
    useTodos();

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        addTodo,
        removeTodo,
        toggleTodo,
        clearCompleted,
        showActive,
        showCompleted,
        toggleActive,
        toggleCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }

  return context;
};
