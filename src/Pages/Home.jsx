import {useState, useEffect} from 'react'
import Form from '../Components/Form'
import Todo_list from '../Components/Todo_list'
import axios from 'axios'
export default function Home() {
  const [todoinput, setTodoinput] = useState("")
  const [todolist, setTodolist] = useState([])
  const [renderlist, setRenderlist] = useState([])

  // getting data from database
  useEffect(()=>{
    axios.get('http://localhost:5000/posts')
      .then(data => {
        setRenderlist(data.data)
        setTodolist(data.data)
      }).catch(err => console.log(err))
  }, [])
  

  return (
    <div>
        <Form setTodoinput={setTodoinput}
              todoinput = {todoinput}
              setTodolist={setTodolist}
              todolist={todolist}
              setRenderlist={setRenderlist} />
        <Todo_list todolist={todolist}  setTodolist={setTodolist} 
                    renderlist={renderlist} setRenderlist={setRenderlist}/>
    </div>
  )
}
