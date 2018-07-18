import React, {Component} from 'react';
import {ListGroup, Button} from 'reactstrap'
import './css/ToDoItems.css'

class ToDoItems extends Component {
  constructor(props) {
    super(props)

    this.createTodos = this.createTodos.bind(this)
  }

  delete(key) {
    this.props.delete(key)
  }


  done(key) {
    this.props.done(key)
  }
  /*Changes the state of the selected item to edit: true*/
  edit(key) {
    this.props.edit(key)
}

  /*A function to edit the selected item.*/
  edited(item){
    if(this._inputElement.value !== ""){
      item.text = this._inputElement.value
    }
    this.edit(item.key)
  }
  createTodos(item) {
    return (
      <div className="todoItems">
        {item.edit === false ? (
          <div>
            <li className={item.done === false ? "todoItem" : "doneItem"} key={item.key}>{item.text}</li>
              <button  title="Done" className={item.done === false ? "checkbox" : "invisible-checkbox"} onClick={() => this.done(item.key)}>
              </button>
              <Button id="delete-button" outline className="delete-button" title="Delete" onClick={() => this.delete(item.key)}>
                <span className="fa fa-minus-circle" aria-hidden="true" />
              </Button>
            {item.done === false &&
              <Button id="edit-button" outline className="edit-button" title="Edit" onClick={() => this.edit(item.key)} >
                {item.edit === false ? (
                  <span className="fa fa-pencil" aria-hidden="true" />
                ) : (
                  <span className="fa fa-check" aria-hidden="true" />
                )}
              </Button>
            }
          </div>
        ) : (
          <div>
            <input
              className="edited-input"
              placeholder={item.text}
              ref={(a) => this._inputElement = a}>
            </input>
            <Button id="done-editing" outline title="Save" className="edit-button" onClick={() => this.edited(item)} >
                <span className="fa fa-check" aria-hidden="true" />
            </Button>
            </div>
          )}
      </div>
    )
  }


  render() {
    var todoEntries = this.props.entries
    var listItems = todoEntries.map(this.createTodos)
    return (
      <ListGroup className="todoList">
        {listItems}
      </ListGroup>
    )
  }
}

export default ToDoItems
