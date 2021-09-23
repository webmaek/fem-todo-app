import TodoItem from "../TodoItem/TodoItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useTodoContext } from "../../contexts/TodoContext";

const TodoList = () => {
  const { todos, setTodos, removeTodo, toggleTodo, showActive, showCompleted } =
    useTodoContext();

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (
          <ul
            className="relative bg-white dark:bg-fem-blue divide-y divide-gray-300 dark:divide-gray-500 shadow-xl rounded-t-md"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {todos
              .filter((todo) => {
                if (showActive) {
                  return !todo.completed;
                }

                if (showCompleted) {
                  return todo.completed;
                }

                return todo;
              })
              .map((todo, index) => (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                  {(provided) => (
                    <TodoItem
                      innerRef={provided.innerRef}
                      provided={provided}
                      {...todo}
                      removeTodo={removeTodo}
                      toggleTodo={toggleTodo}
                    />
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
