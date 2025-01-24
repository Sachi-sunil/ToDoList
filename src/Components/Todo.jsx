import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import Todoform from './Todoform';

function Todo({ todos, completetodo, removetodo, updatetodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitupdate = value=>{
    updatetodo(edit.id,value)
    setEdit({
      id: null,
      value:''
    })
  }

  if (edit.id){
    return <Todoform edit={edit} onSubmit={submitupdate}/>
  }
 
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index} // Use todo.id as key
          >
            <div onClick={() => completetodo(todo.id)}>
              {todo.text}
            </div>

            <div className="icons">
              <RiCloseCircleLine
                onClick={() => removetodo(todo.id)}
                className="delete-icon"
              />
              <TiEdit
                onClick={() => setEdit({ id: todo.id, value: todo.text })}
                className="edit-icon"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Todo;
