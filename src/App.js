import React from 'react'
import ToDoItems from './Components/ToDoItems'


const App = () =>
{
	return (
		<div className='todo-list'>
			<ToDoItems />
			<ToDoItems />
			<ToDoItems />
			<ToDoItems />
		</div>
	)
}


export default App