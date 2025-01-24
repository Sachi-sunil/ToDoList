import React, { useState,useEffect,useRef } from 'react'

function Todoform(props) {
  const [input, setInput] = useState('')

  const inputref = useRef(null)

  useEffect(()=>{
    inputref.current.focus()
  })



  const handlechange = e => {
    setInput(e.target.value);
  }

  const handlesubmit = e => {
    e.preventDefault();

     props.onSubmit({
       id: Math.floor(Math.random()*10000),
       text: input
     });

    setInput('')
  };

  return (
    <form className='todo-form' onSubmit={handlesubmit}>
      <input
        type="text"
        placeholder='What task is up for today?'
        value={input}
        name="text"
        className='todo-input'
        onChange={handlechange}
        ref={inputref}
         />
         <button className='todo-button'>Add Task</button>
    </form>
  )
}

export default Todoform
