import React from 'react';



export default (props) =>(
    <div className="todoBox "
    style={{
      textDecoration: props.todo.complete ? "line-through" : ""
    }} onClick={props.toggleComplete}>
    
        <h3>Title: {props.todo.name}</h3>
        <p>Description: {props.todo.text}</p>
        <p>Creation Date: {props.todo.dateFormat}</p>
        <button className="submitButton" onClick={props.onDelete}>Delete</button>  
       
  </div>

)