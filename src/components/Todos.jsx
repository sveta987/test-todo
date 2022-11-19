import React from 'react'
import Todo from "./Todo";

const Todos = ( {todos, removeTodo, doneTodo, editTodo} ) => {
  return( todos.map( (todo, index)=>(
      <Todo todo={todo}
            index={index}
            removeTodo={removeTodo}
            doneTodo={doneTodo}
            editTodo={editTodo}
            key={index}
      />
  ))
)
}
export default Todos


