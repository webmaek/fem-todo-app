import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({ todos, removeTodo, toggleTodo }) => {
  return (
    <ul className='bg-white rounded-md dark:bg-fem-blue divide-y divide-gray-300 dark:divide-gray-500'>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          {...todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList
