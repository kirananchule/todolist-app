import React from 'react'



const Todo = (props) => {
    const todo = props.todo;
    return(
        <li className="todo" style={{listStyle: 'none', display: 'flex'}}> 
        <input type="checkbox" checked={todo.complete} onChange={props.todoChange}/>
        { todo.text }
        <button className ="buttons" >X</button>
        </li>  
        
        
    )
}



export default Todo;