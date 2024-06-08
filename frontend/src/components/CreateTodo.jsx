import { useState } from "react"
import axios from "axios"
export function CreateTodo(){
  const [title,setTitle]=useState(" ")
  const [description,setDescription]=useState(" ")
  const handleTodo=async(event)=>{
    event.preventDefault();
    const res=await axios.post("http://localhost:3000/todo",{
      title:title,
      description:description
    })
    console.log(res);

  }
  return (
  <>
  <input type="text" placeholder="Title" onChange={(e)=>{
    const value=e.target.value;
    setTitle(e.target.value);
  }}></input>
    <input type="text" placeholder="Description" onChange={(e)=>{
         const value=e.target.value;
         setDescription(e.target.value) 
        }}></input>
    <button onClick={handleTodo
      // async(event,res)=>{
      // event.preventDefault();
      //     await fetch("http://localhost:3000/todo",{
      //       method:"POST",
      //       body:JSON.stringify({
      //         title:title,
      //         description:description
      //       }),
      //       headers:{
      //         "Content-Type":"application/json"
      //       }
      //     })
      //     .then(async(res)=>{
      //       const resp=await res.json();
      //       console.log(resp)
      //     })
          
      //   }
        } >Add a Todo</button>
  
  </>
    
  )
}