import { useTodoContext } from "../../contexts/TodoContext";

const TodoFooter = () => {
  const { todos, toggleActive, toggleCompleted, clearCompleted } =
    useTodoContext();

  const handleAllClick = () => {
    toggleActive(false);
    toggleCompleted(false);
  };

  const handleActiveClick = () => {
    toggleActive(true);
    toggleCompleted(false);
  };

  const handleCompletedClick = () => {
    toggleActive(false);
    toggleCompleted(true);
  };

  return (
    <div
      className={`dark:bg-fem-blue bg-white dark:text-white pt-2 rounded-b-md shadow-xl ${
        todos.length ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-between p-2">
        <div>
          <span className="text-sm font-light">{todos.length} items left</span>
        </div>
        <div>
          <button className="text-blue-500" onClick={handleAllClick}>
            All
          </button>
          <button className="ml-2" onClick={handleActiveClick}>
            Active
          </button>
          <button className="ml-2 text-gray-600" onClick={handleCompletedClick}>
            Completed
          </button>
        </div>
        <div>
          <button className="text-sm" onClick={clearCompleted}>
            Clear completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoFooter;
