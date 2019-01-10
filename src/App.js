import React from 'react'
import ToDoItems from './Components/ToDoItems'
import Tododata from './todosData'


class App extends React.Component {
	constructor(){
		super()
		this.state = {
			todos : Tododata
		}
	}

	
	render(){
	const todolist = this.state.todos.map(item => <ToDoItems key={item.id} item={item} />)
		return (
			<div className='todo-list'>
				{todolist}
			</div>
		)
	}
}


export default App