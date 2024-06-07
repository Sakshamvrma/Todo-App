const {createTodo,updateTodo}=require('./types')
const express=require('express')
const {todo}=require('./db')
const app=express()
const PORT=3000;

app.use(express.json())//All the postr end points works and will be able to parse the json body
app.post('/todo',async(req,res)=>{
  const createPayload=req.body;
  const parsedPayload=createTodo.safeParse(createPayload);
  if(!parsedPayload.success){
    res.status(414).json({
      msg:"You sent wrong Inputs!"
    })
    return;
  }
  //put data in mongodb
  await todo.create({
    title:createPayload.title,
    description:createPayload.description,
    completed:false
  })
  res.status(200).json({
    status:"success"
  })


})
app.get('/todos',async(req,res)=>{
  const todos=await todo.find({})//returns a promise
  if(!todos){
    res.status(414).json({
      msg:"failed to get todos"
    })
  }
  res.status(200).json({
    status:"success",
    data:todos
  })

})
app.put('/completed',async(req,res)=>{
  const updatePayload=req.body;
  const parsedPayload=updateTodo.safeParse(updatePayload);
  if(!parsedPayload.success){
    res.status(414).json({
      msg:"You sent wrong Inputs!"
    })
    return;
  }
  const todoitem=await todo.findById(req.body.id);
  if (!todoitem) {
    res.status(404).json({
      msg: "Todo not found"
    });
    return;
  }
  todoitem.completed=true;
  await todoitem.save();
  
  res.status(200).json({
    status:"success"
  })
   
  // await todo.update({
  //   _id:req.body.id
  // },{
  //   completed:true
  // })
  // res.status(200).json({
  //   status:"success",
  // })
  

})
app.listen(PORT,()=>{
  console.log(`Server is running on port ${3000}`)
})