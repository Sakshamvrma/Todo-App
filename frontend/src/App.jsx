import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CreateTodo } from './components/CreateTodo'
import { RenderTodo } from './components/RenderTodo'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  fetch("http://localhost:3000/todos").then(
    async(res)=>{
      const resp=await res.json();
      setTodos(resp.todos)
    }
  )

  return (
    <>
     <CreateTodo/>
     <RenderTodo todos={todos} setTodos={setTodos} />
     
    </>
  )
}

export default App