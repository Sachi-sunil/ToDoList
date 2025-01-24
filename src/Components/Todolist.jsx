import React,{useState} from 'react'
import Todoform from './Todoform'
import Todo from './Todo';

function Todolist() {
  const [todos,setTodos] = useState([]);

  const addtodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)){
      return
    }
    const newtodos = [todo,...todos]
    setTodos(newtodos);
  };


  const updatetodo = (todoid,newvalue) => {
    if(!newvalue.text || /^\s*$/.test(newvalue.text)){
      return
    }

    setTodos(prev => prev.map(item =>
       (item.id === todoid?newvalue : item)))
  }


  const removetodo = id =>{
    const removearr = [...todos].filter(todo=> todo.id!== id)

    setTodos(removearr);
  };


  const completetodo = id=> {
    let updatedtodos = todos.map(todo => {
      if(todo.id === id){
        todo.isComplete = !todo.isComplete
      }
      return todo
    });
    setTodos(updatedtodos);
  }

  
  return (
    <div>
      <h1>Whats the plan for Today?</h1>
      <Todoform onSubmit={addtodo}/>

      <Todo
      todos={todos}
      completetodo={completetodo}
      removetodo={removetodo}
      updatetodo={updatetodo}/>
    </div>
  )
}

export default Todolist
