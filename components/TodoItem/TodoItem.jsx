import { useState } from 'react'

const TodoItem = ({ id, text, completed, removeTodo, toggleTodo }) => {
  const [hovered, setHovered] = useState(false)

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }

  return (
    <li
      className='p-4 flex items-center'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <input
        type='checkbox'
        className='appearance-none border-green-300 p-2 border-2 rounded-full'
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <div className='w-full flex items-center justify-between'>
        <span
          className={`ml-4 font-light text-black dark:text-white ${
            completed
              ? 'text-gray-400 dark:text-gray-500 line-through'
              : 'text-black'
          }`}
        >
          {text}
        </span>
        <img
          src='/images/icon-cross.svg'
          alt=''
          className={`${hovered ? 'block' : 'hidden'} hover:cursor-pointer`}
          onClick={() => removeTodo(id)}
        />
      </div>
    </li>
  )
}

export default TodoItem
