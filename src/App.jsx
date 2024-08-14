import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import { useState, useEffect } from 'react'

function App() {

  const [todos, setTodos] = useState([])
  const [todosValue, setTodosValue] = useState('')

    function persistData(newList){
      localStorage.setItem('todos', JSON.stringify({todos : newList}))
    }

    function handleAddTodo(newTodo) {
      const newTodoList = [...todos, newTodo]
      persistData(newTodoList)
      setTodos(newTodoList)
    }

    const handleDeleteTodo = (index) => {
      const newTodoList = todos.filter((todo, i) => i !== index)
      persistData(newTodoList)
      setTodos(newTodoList)
    }

    const handleEditTodo = (index) => {
      const valueToBeEdited = todos[index]
      setTodosValue(valueToBeEdited)
      handleDeleteTodo(index)
    }

    useEffect(() => {
      if (!localStorage) {
        return
      }
  
      let localTodos = localStorage.getItem('todos')
      if (!localTodos) {
        return
      }
  
      console.log(localTodos)
      localTodos = JSON.parse(localTodos).todos
      setTodos(localTodos)
  
    }, [])
  return (
    <>
      <TodoInput todosValue={todosValue} setTodosValue={setTodosValue} handleAddTodo={handleAddTodo}/>
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}/>
    </>
  )
}

export default App
