import { useEffect, useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { RenderTodo } from './components/RenderTodo'


function App() {
  const [todos, setTodos] = useState([])
  
  useEffect(()=>{
    setInterval(()=>{
      fetch("http://localhost:3000/todos").then(
    async(res)=>{
      const resp=await res.json();
      console.log(resp)
      setTodos(resp.data)
    }
  )

    },5000)
    

  },[])
  

  return (
    <>
    <>{todos.length} todos</>
      { todos && todos.map((todo)=>(
        <RenderTodo  key={todo._id} todo={todo}  />
     ))}
    </>
  )
}

export default App
