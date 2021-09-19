const TodoFooter = ({
  setShowActive,
  setShowCompleted,
  clearCompleted,
  todosLength,
}) => {
  const handleAllClick = () => {
    setShowActive(false);
    setShowCompleted(false);
  };

  const handleActiveClick = () => {
    setShowActive(true);
    setShowCompleted(false);
  };

  const handleCompletedClick = () => {
    setShowActive(false);
    setShowCompleted(true);
  };

  return (
    <div className="dark:bg-fem-blue dark:text-white pt-2">
      <div className="flex items-center justify-between p-2">
        <div>
          <span className="text-sm font-light">{todosLength} items left</span>
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
