import TodoItem from "../TodoItem/TodoItem";
import TodoFooter from "../TodoFooter/TodoFooter";

const TodoList = ({
  todos,
  removeTodo,
  toggleTodo,
  showActive,
  showCompleted,
  setShowActive,
  setShowCompleted,
  clearCompleted,
}) => {
  return (
    <ul className="bg-white rounded-md dark:bg-fem-blue divide-y divide-gray-300 dark:divide-gray-500">
      {todos.map((todo) => {
        if (showCompleted) {
          if (todo.completed) {
            return (
              <TodoItem
                key={todo.id}
                {...todo}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
              />
            );
          }
        }

        if (showActive) {
          if (!todo.completed) {
            return (
              <TodoItem
                key={todo.id}
                {...todo}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
              />
            );
          } else return null;
        }

        if (!showCompleted && !showCompleted) {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
            />
          );
        }
      })}
      <TodoFooter
        setShowActive={setShowActive}
        setShowCompleted={setShowCompleted}
        clearCompleted={clearCompleted}
        todosLength={todos.length}
      />
    </ul>
  );
};

export default TodoList;
