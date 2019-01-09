import React from 'react'


const ToDoItems =(props) => {
	return (
		<div className='todo-item'>
			<input type= 'checkbox' checked= {props.item.completed}/>
			<p>{props.item.text}</p>
		</div>
	)
}




export default ToDoItems