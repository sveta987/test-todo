import React, {useState} from 'react';
import {TrashIcon, PencilIcon} from '@heroicons/react/24/solid';

const Todo = ({todo, index, removeTodo, doneTodo, editTodo}) => {
  const [edit, setEdit] = useState({id: null, isEdit: false});
  const [editedText, setEditedText] = useState(todo.title);
  return (<div className="mt-[10px] border-y-[1px] border-black py-[5px] px-[5px] flex justify-between pr-[10px]"
               key={index}>
      {(edit.id !== todo.id || !edit.isEdit) && <p className={todo.done ? 'line-through ' : 'todo'}> {index + 1}: <span
        className="break-all"> {todo.title} </span></p>}
      {edit.id === todo.id && edit.isEdit &&
        <span className={todo.done && (edit.id !== todo.id || !edit.isEdit) ? 'line-through' : 'Todo'}>
          {index + 1} :
            <input id={todo.id} type="text"
                   defaultValue={todo.title}
                   onKeyUp={(e) => {
                     if (e.key === "Enter") {
                       editTodo(todo.id, e.target.value);
                       setEdit({id: null, isEdit: !edit.isEdit});
                     }
                     setEditedText(e.target.value);
                   }}
                   autoFocus={true}
                   className="ml-[5px] rounded-lg border-blue-500ring-blue-500 border-[1px] pl-[5px] outline-blue-500"
            /> </span>
      }
      <div className="flex items-center">
        <input onClick={() => doneTodo(todo.id)} type="checkbox" defaultChecked={todo.done}
               className="text-[#3F6ED6] !w-[25px] h-[25px]"/>
        <i onClick={() => {
          setEdit({id: todo.id, isEdit: !edit.isEdit})
          editTodo(todo.id, editedText)
          setEditedText(todo.title)

        }}> <PencilIcon className="text-[#3F6ED6] w-[25px] cursor-pointer mx-[5px]"/></i>
        <i onClick={() => removeTodo(todo.id)}> <TrashIcon
          className="text-[#3F6ED6] w-[25px] cursor-pointer"/> </i>
      </div>
    </div>
  )
}
export default Todo;


