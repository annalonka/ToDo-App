import React, {Component} from 'react';
import {Form, Button} from 'reactstrap';
import ToDoItems from './ToDoItems'
import './ToDoList.css'


class ToDoList extends Component {
	constructor(props) {
		super(props)

		this.state= {
			todos: [],
			done: [],
			undone: [],
			all: [],
		}

		this.addToDo= this.addToDo.bind(this)
		this.deleteToDo = this.deleteToDo.bind(this)
		this.doneToDo = this.doneToDo.bind(this)
		this.editToDo = this.editToDo.bind(this)
	}


	addToDo(todo){
		if(this._inputElement.value !== ""){
			var newToDo = {
				text: this._inputElement.value,
				key: Date.now(),
				done: false,
				edit: false
			}
			this.setState((prevState) => {
				return {
					todos: prevState.todos.concat(newToDo),
					all: prevState.all.concat(newToDo),
					undone: prevState.undone.concat(newToDo)
				}
			})
		}
		this._inputElement.value = "";
		todo.preventDefault()
	}

	deleteToDo(key) {
		var todosLeft = this.state.todos.filter(function (todo) {
			return (todo.key !== key)
		})

		var allLeft = this.state.all.filter(function (todo) {
			return (todo.key !== key)
		})

		var doneLeft = this.state.done.filter(function (todo) {
			return (todo.key !== key)
		})

		var undoneLeft = this.state.undone.filter(function (todo) {
			return (todo.key !== key)
		})

		this.setState({
			todos: todosLeft,
			all: allLeft,
			done: doneLeft,
			undone: undoneLeft
		})
	}


	doneToDo(key) {
		var all = this.state.all
		if(this.state.all.find(n => n.key === key).done === false) {
			this.state.all.find(n => n.key === key).done = true
			var done = all.filter(n => n.done === true)
			var undone = all.filter(n => n.done === false)
		}
		this.setState({
			todos: this.state.todos,
			done: done,
			undone: undone,
			all: all
		})
	}

	editToDo (key) {
		if(this.state.all.find(n => n.key === key).edit === false) {
			this.state.all.find(n => n.key === key).edit = true
		}else {
			this.state.all.find(n => n.key === key).edit = false
		}
		this.setState({
			todos: this.state.todos,
		})
	}

	showDone () {
		this.setState({
			todos: this.state.done,
		})
	}

	showUndone () {
		this.setState({
			todos: this.state.undone,
		})
	}


	showAll() {
		this.setState({
			todos: this.state.all,
		})
	}


	render () {
		return (
			<div className="todoInput">
				<div>
					<Form className="input-and-button" onSubmit={this.addToDo}>
						<input
							className="input"
							ref={(a) => this._inputElement = a}
							placeholder="Add a new task here...">
						</input>
						<Button outline className="addButton" id="add-button" type="submit">
							<span className="fa fa-plus-circle" aria-hidden="true" />
						</Button>
					</Form>
					<Button outline className="show-button " onClick={() => this.showAll()}>All</Button>
					<Button outline className="show-button" onClick={() => this.showDone()}>Done</Button>
					<Button outline className="show-button" onClick={() => this.showUndone()}>Undone</Button>
				</div>
				<ToDoItems
					entries={this.state.todos}
					delete={this.deleteToDo}
					done={this.doneToDo}
					edit={this.editToDo}
				/>
			</div>
		)
	}
}
export default ToDoList;
