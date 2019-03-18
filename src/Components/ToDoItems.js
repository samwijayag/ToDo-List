import React from 'react'


const ToDoItems =(props) => {
	const completedStyle = {
		fontStyle: "#cdcdcd",
		textDecoration: "line-through"
	}
	return (
		<div className='todo-item'>
			<input  
				type= 'checkbox' 
				checked= {props.item.completed}
				onChange={() => props.handleChange(props.item.id)}
			/>
			<p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
		</div>
	)
}



export default ToDoItems