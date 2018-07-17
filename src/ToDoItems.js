import React, {Component} from 'react';
import {ListGroup, Button, UncontrolledTooltip, Label, Input} from 'reactstrap'
import './ToDoItems.css'

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

  edit(key) {
    this.props.edit(key)
}

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
            {item.done === false &&
              <Label check className="checkbox">
                <Input type="checkbox" onClick={() => this.done(item.key)}/>
              </Label>
            }
            <Button id="delete-button" outline className="delete-button" onClick={() => this.delete(item.key)}>
              <span className="fa fa-minus-circle" aria-hidden="true" />
            </Button>
            <UncontrolledTooltip className="tooltip-top" delay={{ show: 600, hide: 0 }} placement="top" target="delete-button">
              Delete
            </UncontrolledTooltip>
              <Button id="edit-button" outline className="edit-button" onClick={() => this.edit(item.key)} >
                {item.edit === false ? (
                  <span className="fa fa-pencil" aria-hidden="true" />
                ) : (
                  <span className="fa fa-check" aria-hidden="true" />
                )}
              </Button>
            <UncontrolledTooltip className="tooltip-top" delay={{ show: 600, hide: 0 }} placement="top" target="edit-button">
              Edit
            </UncontrolledTooltip>
          </div>
        ) : (
          <div>
            <input
              className="edited-todo"
              placeholder={item.text}
              ref={(a) => this._inputElement = a}>
            </input>
            <Button id="done-editing" outline className="edit-button" onClick={() => this.edited(item)} >
                <span className="fa fa-check" aria-hidden="true" />
            </Button>
            <UncontrolledTooltip className="tooltip-top" delay={{ show: 600, hide: 0 }} placement="top" target="done-editing">
              Save
            </UncontrolledTooltip>
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
