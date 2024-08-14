import React from 'react'

export default function TodoInput(props) {
  const {handleAddTodo,setTodosValue,todosValue} = props
  return (
    <header>
      <input value={todosValue} onChange={(e) => {
          setTodosValue(e.target.value)
      }} placeholder="Enter todo..." />
      <button onClick={() => {
          handleAddTodo(todosValue)
          setTodosValue('')
      }}>Add</button>
    </header>
  )
}
