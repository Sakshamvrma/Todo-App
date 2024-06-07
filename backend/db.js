const mongoose=require('mongoose');
const dotenv=require('dotenv')
dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log('DB connection successful!'));
const todoSchema= new mongoose.Schema({
  title:String,
  description:String,
  completed:Boolean
})
const todo=mongoose.model('todo',todoSchema);
module.exports={todo};