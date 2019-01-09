import React from 'react'
import ToDoItems from './Components/ToDoItems'
import Tododata from './todosData'


const App = () =>
{
	const todolist = Tododata.map(item => <ToDoItems key={item.id} item={item} />)
	return (
		<div className='todo-list'>
			{todolist}
		</div>
	)
}


export default App