import {useEffect} from 'react'
import axios from 'axios'
export default function ({item, todolist, setTodolist, setRenderlist}) {

    const change_list = (prevL, id) =>{
        const newarr = prevL.map((arr_item)=>{
            if(arr_item._id == id) {
                arr_item.completed = !arr_item.completed
            }
            return arr_item
        })
        return newarr
    }

    const delete_list = (prevL, id) =>{
        const newarr = prevL.filter((arr_item)=>{
            if(arr_item._id != id) return arr_item
        })
        
        return newarr
    }
    const check_complete = async (e)=>{
        const curr_id = e.target.parentNode.id
        let temp = {}
        await axios.get(`http://localhost:5000/posts/${curr_id}`)
        .then(data => {
            temp = {completed: !data.data.completed}
        })
        await axios.patch(`http://localhost:5000/posts/${curr_id}`, temp)
        setTodolist(prevL => change_list(prevL, curr_id))
        setRenderlist(prevL => change_list(prevL, curr_id))

    }

    const delete_item = (e)=>{
        const curr_id = e.target.parentNode.id
        e.target.parentNode.className+=' fall'
        setTimeout(() => {
            setTodolist(prevList => delete_list(prevList, curr_id))
            setRenderlist(prevList => delete_list(prevList, curr_id))
        }, 1000);
        axios.delete(`http://localhost:5000/posts/${curr_id}`)
    }

    

  return (
    <div id = {item._id} className='todo'>
        <li className={`todo-item ${item.completed === true ? 'completed': ''}`}>
            {item.text}
        </li>
        <button onClick={check_complete} className='complete-btn'>R</button>
        <button onClick ={delete_item}className='trash-btn'>T</button>
    </div>
  )
}
