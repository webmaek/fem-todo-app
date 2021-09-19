import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text !== "" && text.length) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form className="my-6" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Create a new todo..."
        className="p-4 w-full rounded-md bg-white dark:bg-fem-blue dark:text-white"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </form>
  );
};

export default TodoForm;
