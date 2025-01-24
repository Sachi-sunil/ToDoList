import { useState } from 'react'
import './App.css'
import Todoform from './Components/Todoform'
import Todolist from './Components/Todolist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='todo-app'>
      <Todolist/>
    </div>
  )
}

export default App
