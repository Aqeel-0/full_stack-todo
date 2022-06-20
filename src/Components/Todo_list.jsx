import {React} from 'react'
import Todo from './Todo'
export default function Todo_list({todolist, setTodolist, renderlist, setRenderlist}) {

    const newarr = renderlist.map((item)=>{
        return <Todo key = {item._id} id = {item._id} item = {item} todolist={todolist} setTodolist={setTodolist} setRenderlist={setRenderlist}/>
    })

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {newarr}
      </ul>
    </div>
  )     
}
