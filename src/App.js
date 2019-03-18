import React from 'react'
import ToDoItems from './Components/ToDoItems'
import Header from './Components/Header'
import Tododata from './todosData'


class App extends React.Component {
	constructor(){
		super()
		this.state = {
			todos : Tododata
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange = (id) => {
		 this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
	}

	render(){
	const todolist = this.state.todos.map(item => <ToDoItems key={item.id} item={item}
		handleChange={this.handleChange} 
		/>)
		return (
			<div className='todo-list'>
				<Header />
				{todolist}
			</div>
		)
	}
}


export default App