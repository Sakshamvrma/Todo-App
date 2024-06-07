const zod=require('zod')
const createTodo=zod.object({
  title:zod.string(),
  description: zod.string().optional(),
  completed: zod.boolean().optional(),
})
const updateTodo=zod.object({
  id:zod.string()
})
module.exports={
  createTodo,
  updateTodo
}
  