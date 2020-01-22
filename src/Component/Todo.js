import React, { useState } from 'react'



const Todo = (props) => {
    
let [show, setShow] = useState();
const todo = props.todo;
    return(
        <li className="todo" style={{listStyle: 'none', display: 'flex'}} 
        onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}> 
        <input type="checkbox" checked={todo.complete} onChange={props.todoChange}/>
        { todo.text }
        <button className ="buttons" onClick={()=>props.removeFromTodo(todo.id)} style={{display: show? 'block':'none'}}>X</button>
        </li>  
        )
}



export default Todo;