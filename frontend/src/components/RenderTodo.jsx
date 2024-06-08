export function RenderTodo({todos,setTodos}){//Array destructuring to render array
  const handleCompletion=async(event)=>{
    event.preventDefault();
    const res=await axios.put("http://localhost:3000/todo",{
      completed:true
    })
    console.log(res);
  }
 
  return (<div>
    {
      todos.map(function(todo){
        return <div>
            <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
        <button onClick={handleCompletion}>{todo.completed==false ? "Mark as Complete" : "Completed"}</button>
        </div>
        

      })
    }
    


  </div>
  )
}

