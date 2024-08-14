import React from 'react'
import TodoCard from './TodoCard'
export default function TodoList(props) {
    const {todos} = props
  return (
    <div>
        <ul>
            {todos.map((todo,index)=>{
                return (
                    <TodoCard {...props} key={index} index={index}>
                        {todo}
                    </TodoCard>
                )

            })}
        </ul>
    </div>
  )
}
