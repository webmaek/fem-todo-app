import { useState } from "react";
import { useTodoContext } from "../../contexts/TodoContext";

const TodoItem = ({ id, text, completed, innerRef, provided }) => {
  const [hovered, setHovered] = useState(false);
  const { toggleTodo, removeTodo } = useTodoContext();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <li
      ref={innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="p-4 flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <input
        type="checkbox"
        className={`appearance-none border-green-300 p-2 border-2 rounded-full ${
          completed && "bg-green-300"
        }`}
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <div className="w-full flex items-center justify-between">
        <span
          className={`ml-4 ${
            completed
              ? "text-gray-400 dark:text-gray-500 line-through"
              : "text-black dark:text-white"
          }`}
        >
          {text}
        </span>
        <img
          src="/images/icon-cross.svg"
          alt=""
          className={`${hovered ? "block" : "hidden"} hover:cursor-pointer`}
          onClick={() => removeTodo(id)}
        />
      </div>
    </li>
  );
};

export default TodoItem;
